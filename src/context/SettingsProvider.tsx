import { useEffect, useState } from "react"
import { SettingsContext } from "./SettingsContext"

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {

  const [fontSize, setFontSize] = useState<number>(() => {
  const saved = localStorage.getItem("fontSize")
  return saved ? Number(saved) : 24
})


  useEffect(() => {
  localStorage.setItem("fontSize", fontSize.toString())
}, [fontSize])


  return (
    <SettingsContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </SettingsContext.Provider>
  )
}
