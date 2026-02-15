import { Link } from "react-router-dom"
import { useLastRead } from "../hooks/useLastRead"


const Home = () => {
  const { surah, ayah } = useLastRead()

  return (
    <div className="flex flex-col items-center justify-center text-center p-6" role="main">

      <h1 className="text-5xl font-bold mb-6 text-blue-400">
        القرآن الكريم
      </h1>

      <p className="text-lg mb-12 text-gray-300 max-w-xl leading-8">
        اقرأ وتدبر آيات الله في تجربة هادئة
      </p>

      <Link
        to="/surah"
        className="
          px-10 py-4
          rounded-2xl
          border border-gray-500
          text-blue-400 text-xl font-semibold
          hover:bg-gray-200 hover:text-black
          transition duration-300
        "
      >
        ادخل إلى المصحف
      </Link>

      <Link
        to={`/surah/${surah}`}
        className="mt-6 px-8 py-3 rounded-2xl border border-gray-500 text-blue-400 hover:bg-gray-200 hover:text-black transition"
      >
        اكمل القراءة — سورة {surah} آية {ayah}
      </Link>


    </div>
  )
}

export default Home
