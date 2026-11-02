---
name: quran-reader
description: Retrieve Quranic Surahs, Ayahs, translations, and search the Holy Quran text.
version: 1.0.0
---

# Quran Reader Skill

Use this skill when interacting with Quran Kareem or retrieving Holy Quran text, chapters, and verses.

## Available Actions
1. **List Surahs**: There are 114 Surahs in the Holy Quran (from 1: Al-Fatiha to 114: An-Nas).
2. **Read Surah**: Navigate to `/surah/{id}` where `{id}` is between 1 and 114.
3. **Search Surahs**: Search by Arabic name or Surah number.
4. **WebMCP In-Browser Tools**:
   - `searchSurahs({ query: string })`: Search Surahs by name or number.
   - `getSurah({ surahNumber: number })`: Get all verses and metadata for a specific Surah.
   - `getLastRead()`: Get the user's saved reading bookmark.

## Data Endpoints
- Web & Markdown: `GET https://quran-kareem-ya-21.vercel.app/` with `Accept: text/markdown`
- API Health: `GET https://quran-kareem-ya-21.vercel.app/api/health`
- OpenAPI Specification: `https://quran-kareem-ya-21.vercel.app/openapi.json`

