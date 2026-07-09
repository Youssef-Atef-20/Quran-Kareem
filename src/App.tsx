import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SurahList from "./components/SurahList"
import SurahPage from "./pages/SurahPage"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah" element={<SurahList />} />
      <Route path="/surah/:id" element={<SurahPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
