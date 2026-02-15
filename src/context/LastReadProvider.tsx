import { useState } from "react"
import { LastReadContext } from "./last-read-context"

export const LastReadProvider = ({ children }: { children: React.ReactNode }) => {

  // lazy initializer (يقرأ من localStorage مرة واحدة فقط)
  const [lastRead, setLastReadState] = useState<{ surah: number; ayah: number }>(() => {
    const saved = localStorage.getItem("lastRead")
    if (saved) return JSON.parse(saved)
    return { surah: 1, ayah: 1 }
  })

  const setLastRead = (s: number, a: number) => {
    const data = { surah: s, ayah: a }
    setLastReadState(data)
    localStorage.setItem("lastRead", JSON.stringify(data))
  }

  return (
    <LastReadContext.Provider
      value={{
        surah: lastRead.surah,
        ayah: lastRead.ayah,
        setLastRead
      }}
    >
      {children}
    </LastReadContext.Provider>
  )
}
