import { surahNames } from "../data/surahNames"

export const getSurahName = (id: number | string) => {
  return surahNames[Number(id)] || "سورة غير معروفة"
}
