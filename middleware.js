export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // When an AI agent requests markdown via HTTP Content Negotiation
  if ((url.pathname === '/' || url.pathname === '/index.html') && accept.includes('text/markdown')) {
    try {
      const mdUrl = new URL('/index.md', request.url);
      const res = await fetch(mdUrl);
      if (res.ok) {
        const text = await res.text();
        return new Response(text, {
          status: 200,
          headers: {
            'content-type': 'text/markdown; charset=utf-8',
            'x-markdown-tokens': '2400',
            'vary': 'Accept',
            'access-control-allow-origin': '*',
            'link': '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="service-desc", </.well-known/agent-skills/index.json>; rel="agent-skills", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="author-doc"'
          }
        });
      }
    } catch {
      // proceed to fallback
    }

    // Direct Markdown fallback
    const fallbackMarkdown = `# القرآن الكريم - Quran Kareem\n\n> موقع لقراءة القرآن الكريم بسهولة مع حفظ آخر موضع قراءة وواجهة مريحة للعين على الموبايل والكمبيوتر.\n\n## استكشاف المصحف\n- لقراءة السور: انتقل إلى /surah/{id} حيث الرقم بين 1 و 114.\n- الفهرس الكامل: تفضل بزيارة /index.md\n- أدوات WebMCP و API متوفرة عبر /.well-known/api-catalog`;

    return new Response(fallbackMarkdown, {
      status: 200,
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': '300',
        'vary': 'Accept',
        'access-control-allow-origin': '*',
        'link': '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="service-desc", </.well-known/agent-skills/index.json>; rel="agent-skills", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="author-doc"'
      }
    });
  }
}
