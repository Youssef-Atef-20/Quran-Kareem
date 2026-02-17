import React from "react";
import { useParams, Link } from "react-router-dom"
import { useQuran } from "../hooks/useQuran"
import { surahNames } from "../data/surahNames"
import { useSettings } from "../hooks/useSettings"
import { useLastRead } from "../hooks/useLastRead"
import { useEffect, useRef, useState } from "react"



const SurahPage = () => {

  const { id } = useParams()
  const { quran } = useQuran()
  const { fontSize, setFontSize } = useSettings()
  const { setLastRead, surah: savedSurah, ayah: savedAyah } = useLastRead()
  const [showSaved, setShowSaved] = useState(false)

  // مهم: تعريفهم قبل useEffect
  const surahId = Number(id)
  const surah = quran[surahId]

  // refs للآيات
  const ayahRefs = useRef<{ [key: number]: HTMLParagraphElement | null }>({})

  // scroll تلقائي لآخر آية
  useEffect(() => {
    if (!savedAyah) return

    if (savedSurah === surahId) {
      setTimeout(() => {
        ayahRefs.current[savedAyah]?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }, 400)
    }
  }, [surahId, savedAyah, savedSurah])




  if (!surah)
    return <div className="p-10 text-center text-red-500">السورة غير موجودة</div>

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* اسم السورة */}
      < h1 className="text-3xl font-bold text-center mb-6">
        سورة {surahNames[surahId]}
      </h1>


      <div className="flex flex-row-reverse justify-center gap-4 mb-8">

        <Link
          to={"/surah"}
          className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition flex flex-col justify-center items-center w-1/3 text-center "
        >
          كل السور
        </Link>



        <Link
          to={"/"}
          className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition flex flex-col justify-center items-center w-1/3 text-center"
        >
          القائمة الرئيسية
        </Link>

      </div>


      {/* التحكم في حجم الخط */}
      <h2 className="text-xl text-center mb-4 text-white">
        حجم الخط
      </h2>

      <div className="flex flex-row-reverse justify-center gap-4 mb-8">

        <button
          onClick={() => setFontSize(Math.max(18, fontSize - 2))}
          className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition"
        >
          A-
        </button>

        <button
          onClick={() => setFontSize(24)}
          className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition"
        >
          Reset
        </button>

        <button
          onClick={() => setFontSize(Math.min(44, fontSize + 2))}
          className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition"
        >
          A+
        </button>

      </div>



      <div className="mb-8 text-center bg-blue-900/40 border border-blue-700 text-blue-200 px-6 py-4 rounded-2xl max-w-xl mx-auto">
        لو عايز تحفظ مكان قراءتك اضغط على الآية اللي وقفت عندها
      </div>


      {/* البسملة */}
      {surahId !== 1 && surahId !== 9 && (
        <h2 className="text-2xl text-center mb-10 text-green-700">
          بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
        </h2>
      )}

      {/* الآيات */}
     {surah.map((ayah) => (
  <React.Fragment key={ayah.verse}>

    <p
      ref={(el) => {
        ayahRefs.current[ayah.verse] = el
      }}
      onClick={() => {
        setLastRead(surahId, ayah.verse)
        setShowSaved(true)

        setTimeout(() => {
          setShowSaved(false)
        }, 2000)
      }}
      className="mb-6 text-center cursor-pointer"
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${fontSize * 2}px`
      }}
    >
      <span className="text-green-700 ml-4 inline-block">
        ﴿{ayah.verse}﴾
      </span>
      {ayah.text}
    </p>

    {ayah.part && (
  <div className="flex items-center my-12 gap-3">
    <div className="flex-1 h-px bg-yellow-500/40"></div>

    <span className="whitespace-nowrap px-4 py-1 text-yellow-500 font-bold text-lg">
      ۞ الجزء {ayah.part}
    </span>

    <div className="flex-1 h-px bg-yellow-500/40"></div>
  </div>
)}

  </React.Fragment>
))}


      {showSaved && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg animate-fade flex items-center gap-2 whitespace-nowrap">
          تم حفظ مكان آخر آية قرأتها ✓
        </div>
      )}


      <div className="flex flex-row-reverse justify-center gap-4 mb-8">

        {surahId - 1 >= 1 && (
          <Link
            to={`/surah/${surahId - 1}`}
            className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition flex flex-col justify-center items-center w-1/3 text-center "
          >
            <div>السورة السابقة </div>  ( {surahNames[surahId - 1]} )
          </Link>
        )}



        {surahId + 1 <= 114 && (
          <Link
            to={`/surah/${surahId + 1}`}
            className="px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition flex flex-col justify-center items-center w-1/3 text-center bg-green-700"
          >
            <div>السورة التالية </div>  ( {surahNames[surahId + 1]} )
          </Link>
        )}


      </div>


    </div>
  )
}

export default SurahPage
