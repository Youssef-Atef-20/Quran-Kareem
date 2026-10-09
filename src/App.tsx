import { Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"
import SurahList from "./components/SurahList"
import SurahPage from "./pages/SurahPage"
import NotFound from "./pages/NotFound";

function App() {
  return (
  <>
    <Analytics/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah" element={<SurahList />} />
      <Route path="/surah/:id" element={<SurahPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>

  )
}

export default App
