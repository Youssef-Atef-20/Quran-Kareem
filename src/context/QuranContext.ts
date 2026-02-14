import { createContext } from "react"
import type { Quran } from "../types/quran.types"

export interface QuranContextType {
  quran: Quran
}

export const QuranContext = createContext<QuranContextType | null>(null)
