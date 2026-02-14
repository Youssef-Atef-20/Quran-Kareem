import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { QuranProvider } from "./context/QuranProvider"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <BrowserRouter>
    <QuranProvider>
      <App />
    </QuranProvider>
  </BrowserRouter>
  </React.StrictMode>
)
