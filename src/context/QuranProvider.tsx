import type { ReactNode } from "react"
import quranData from "../data/quran.json"
import { QuranContext } from "./QuranContext"
import type { Quran } from "../types/quran.types"

interface Props {
  children: ReactNode
}

export const QuranProvider = ({ children }: Props) => {

  const quran = quranData as Quran

  return (
    <QuranContext.Provider value={{ quran }}>
      {children}
    </QuranContext.Provider>
  )
}
