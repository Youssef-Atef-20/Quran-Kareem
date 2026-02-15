import { createContext } from "react"

export interface LastReadType {
  surah: number
  ayah: number
  setLastRead: (surah: number, ayah: number) => void
}

export const LastReadContext = createContext<LastReadType | null>(null)
