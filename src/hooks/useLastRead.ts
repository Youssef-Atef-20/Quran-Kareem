import { useContext } from "react"
import { LastReadContext } from "../context/last-read-context"

export const useLastRead = () => {
  const context = useContext(LastReadContext)
  if (!context) throw new Error("useLastRead must be used inside LastReadProvider")
  return context
}
