import { Link } from "react-router-dom"
import { useQuran } from "../hooks/useQuran"
import { surahNames } from "../data/surahNames"

const SurahList = () => {
  const { quran } = useQuran()

  const surahs = Object.keys(quran)
    .map(Number)
    .sort((a, b) => a - b)

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {surahs.map((id) => (
        <Link
          key={id}
          to={`/surah/${id}`}
          className="p-4 rounded-xl border hover:bg-green-50 transition"
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
