import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { QuranProvider } from "./context/QuranProvider"
import { SettingsProvider } from "./context/SettingsProvider"
import { LastReadProvider } from "./context/LastReadProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LastReadProvider>
        <SettingsProvider>
          <QuranProvider>
            <App />
          </QuranProvider>
        </SettingsProvider>
      </LastReadProvider>
    </BrowserRouter>
  </React.StrictMode>
)