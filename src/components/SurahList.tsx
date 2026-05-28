import { useState } from "react"
import { Link } from "react-router-dom"
import { useQuran } from "../hooks/useQuran"
import { surahNames } from "../data/surahNames"

const SurahList = () => {
  const { quran } = useQuran()
  const [searchTerm, setSearchTerm] = useState("")

  const surahs = Object.keys(quran)
    .map(Number)
    .sort((a, b) => a - b)

  const normalizeArabic = (text: string) => {
    if (!text) return ""
    return text
      .replace(/[أإآ]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/[\u064B-\u065F]/g, "") // Remove harakat (diacritics)
  }

  const filteredSurahs = surahs.filter((id) => {
    const name = surahNames[id] || ""
    const normalizedName = normalizeArabic(name)
    const normalizedSearch = normalizeArabic(searchTerm)
    return normalizedName.includes(normalizedSearch) || id.toString().includes(searchTerm)
  })

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* Header Banner */}
      <div className="w-full mb-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-gray-900/40 to-teal-950/30 border border-emerald-500/20 shadow-xl shadow-emerald-950/10 text-center relative overflow-hidden">
        {/* Decorative background blur/gradients */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl border border-gray-700/60 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition flex items-center gap-2 text-sm bg-gray-950/20"
          >
            <span>←</span>
            <span>الرئيسية</span>
          </Link>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
            {surahs.length} سورة
          </div>
        </div>

        {/* Beautiful Quran Icon / SVG */}
        <div className="mx-auto w-16 h-16 mb-4 text-emerald-400 flex items-center justify-center bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-wide font-amiri">
          المصحف الشريف
        </h1>
        <h2 className="text-emerald-400 text-lg md:text-xl font-medium mb-6">
          جميع سور القرآن الكريم
        </h2>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="ابحث عن سورة بالاسم أو الرقم..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-2xl border border-gray-700/60 bg-gray-950/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-right"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Surah List Grid */}
      {filteredSurahs.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full px-2">
          {filteredSurahs.map((id) => (
            <Link
              key={id}
              to={`/surah/${id}`}
              className="relative group p-5 rounded-2xl border border-gray-800 bg-gray-900/20 text-center hover:border-emerald-500 hover:bg-emerald-950/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/30 flex flex-col items-center justify-center min-h-[110px]"
            >
              {/* Surah number/index */}
              <span className="absolute top-3 right-3 text-xs font-mono text-emerald-400/60 group-hover:text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-500/30 px-2 py-0.5 rounded-md bg-emerald-500/5 transition-colors">
                {id}
              </span>

              <h3 className="text-xl font-bold text-gray-200 group-hover:text-emerald-300 transition-colors mt-3">
                {surahNames[id]}
              </h3>
              
              <span className="text-xs text-gray-500 group-hover:text-emerald-400/80 transition-colors mt-2">
                {quran[id]?.length} آية
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          لا توجد نتائج تطابق بحثك
        </div>
      )}
    </div>
  )
}

export default SurahList

