import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SurahList from "./components/SurahList"
import SurahPage from "./pages/SurahPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah" element={<SurahList />} />
      <Route path="/surah/:id" element={<SurahPage />} />
    </Routes>
  )
}

export default App
