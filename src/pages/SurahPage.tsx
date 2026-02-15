import { useParams } from "react-router-dom"
import { useQuran } from "../hooks/useQuran"
import { surahNames } from "../data/surahNames"
import { useSettings } from "../hooks/useSettings"

const SurahPage = () => {

  const { id } = useParams()
  const { quran } = useQuran()
  const { fontSize, setFontSize } = useSettings()

  const surahId = Number(id)
  const surah = quran[surahId]

  if (!surah)
    return <div className="p-10 text-center text-red-500">السورة غير موجودة</div>

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        سورة {surahNames[surahId]}
      </h1>

     
      <div className="flex justify-center gap-4 mb-6">

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

      
      {surahId !== 9 && (
        <h2 className="text-2xl text-center mb-8 text-green-700">
          بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
        </h2>
      )}

      {/* الآيات */}
      <div dir="rtl">

        {surah.map((ayah) => (
          <p
            key={ayah.verse}
            className="mb-6 text-center"
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
        ))}

      </div>

    </div>
  )
}

export default SurahPage
