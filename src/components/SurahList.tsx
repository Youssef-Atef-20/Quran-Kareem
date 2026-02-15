import { Link } from "react-router-dom"
import { useQuran } from "../hooks/useQuran"
import { surahNames } from "../data/surahNames"

const SurahList = () => {
  const { quran } = useQuran()

  const surahs = Object.keys(quran)
    .map(Number)
    .sort((a, b) => a - b)

  return (
   <div className=" mx-auto p-6 flex flex-wrap justify-center gap-4">

      {surahs.map((id) => (
        <Link
          key={id}
          to={`/surah/${id}`}
          className="w-32 p-4 rounded-xl border text-center hover:bg-green-50 hover:scale-105 transition"
        >
          <h3 className="text-lg font-semibold text-center">
            {surahNames[id]}
          </h3>
        </Link>
      ))}

    </div>
  )
}

export default SurahList
