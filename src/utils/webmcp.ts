import { surahNames } from '../data/surahNames';
import quranData from '../data/quran.json';
import type { Quran, Ayah } from '../types/quran.types';
import type { WebMCPTool, RegisterToolOptions } from '../types/webmcp';

const typedQuran = quranData as unknown as Quran;

// Polyfill document.modelContext if not natively provided by the browser environment
function ensureModelContext() {
  if (typeof document === 'undefined') return;

  const toolsMap = new Map<string, WebMCPTool>();

  if (!document.modelContext) {
    document.modelContext = {
      registerTool: async (tool: WebMCPTool, options?: RegisterToolOptions) => {
        toolsMap.set(tool.name, tool);

        if (options?.signal) {
          options.signal.addEventListener('abort', () => {
            toolsMap.delete(tool.name);
          });
        }
      },
      unregisterTool: async (name: string) => {
        toolsMap.delete(name);
      },
      getTools: () => {
        return Array.from(toolsMap.values());
      }
    };
  }

  if (typeof window !== 'undefined' && !window.modelContext) {
    window.modelContext = document.modelContext;
  }
}

export function initWebMCP() {
  if (typeof document === 'undefined') return () => {};

  ensureModelContext();

  const controller = new AbortController();
  const { signal } = controller;

  // 1. Tool: searchSurahs
  const searchSurahsTool: WebMCPTool = {
    name: 'searchSurahs',
    description: 'ابحث عن سور القرآن الكريم بالاسم أو برقم السورة (1-114)',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'اسم السورة (مثل: الفاتحة، الكهف) أو رقم السورة (1-114)'
        }
      },
      required: ['query']
    },
    execute: async (args: Record<string, unknown>) => {
      const q = String(args.query ?? '').trim();
      const normalize = (t: string) =>
        t
          .replace(/[أإآ]/g, 'ا')
          .replace(/ة/g, 'ه')
          .replace(/ى/g, 'ي')
          .replace(/[\u064B-\u065F]/g, '');

      const normQ = normalize(q);
      const results = [];

      for (let i = 1; i <= 114; i++) {
        const name = surahNames[i] || '';
        const normName = normalize(name);
        if (normName.includes(normQ) || i.toString() === q) {
          results.push({
            id: i,
            name,
            totalAyahs: typedQuran[i]?.length || 0,
            url: `https://quran-kareem-ya-21.vercel.app/surah/${i}`
          });
        }
      }

      return {
        count: results.length,
        results
      };
    }
  };

  // 2. Tool: getSurah
  const getSurahTool: WebMCPTool = {
    name: 'getSurah',
    description: 'الحصول على تفاصيل وآيات سورة معينة برقمها من 1 إلى 114',
    inputSchema: {
      type: 'object',
      properties: {
        surahNumber: {
          type: 'integer',
          description: 'رقم السورة المراد قراءتها (من 1 إلى 114)'
        }
      },
      required: ['surahNumber']
    },
    execute: async (args: Record<string, unknown>) => {
      const id = Number(args.surahNumber);
      if (isNaN(id) || id < 1 || id > 114) {
        throw new Error('رقم السورة يجب أن يكون بين 1 و 114');
      }

      const name = surahNames[id];
      const ayahs = typedQuran[id] || [];

      return {
        surahNumber: id,
        name,
        totalAyahs: ayahs.length,
        ayahs: ayahs.map((a: Ayah) => ({
          verse: a.verse,
          text: a.text
        }))
      };
    }
  };

  // 3. Tool: getLastRead
  const getLastReadTool: WebMCPTool = {
    name: 'getLastRead',
    description: 'الحصول على آخر موضع قراءة محفوظ للمستخدم في المصحف',
    inputSchema: {
      type: 'object',
      properties: {}
    },
    execute: async () => {
      try {
        const saved = localStorage.getItem('lastRead');
        const data = saved ? JSON.parse(saved) : { surah: 1, ayah: 1 };
        return {
          surahNumber: data.surah,
          surahName: surahNames[data.surah] || '',
          ayahNumber: data.ayah,
          url: `https://quran-kareem-ya-21.vercel.app/surah/${data.surah}`
        };
      } catch {
        return {
          surahNumber: 1,
          surahName: surahNames[1],
          ayahNumber: 1,
          url: 'https://quran-kareem-ya-21.vercel.app/surah/1'
        };
      }
    }
  };

  // Register all tools with document.modelContext
  if (document.modelContext?.registerTool) {
    document.modelContext.registerTool(searchSurahsTool, { signal });
    document.modelContext.registerTool(getSurahTool, { signal });
    document.modelContext.registerTool(getLastReadTool, { signal });
  }

  return () => {
    controller.abort();
  };
}
