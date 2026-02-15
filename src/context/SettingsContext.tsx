import { createContext } from "react"

export interface SettingsContextType {
  fontSize: number
  setFontSize: (size: number) => void
}

export const SettingsContext = createContext<SettingsContextType | null>(null)
