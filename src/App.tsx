import { Routes, Route } from "react-router-dom"
import SurahList from "./components/SurahList"
import SurahPage from "./pages/Surah"

function App() {
  return (

    <>
    
        <Routes>
      <Route path="/" element={<SurahList />} />
      <Route path="/surah/:id" element={<SurahPage />} />
    </Routes>


    </>



  )
}

export default App
