export interface Ayah {
  chapter: number
  verse: number
  text: string
  part: number
}

export type Quran = {
  [key: string]: Ayah[]
}
