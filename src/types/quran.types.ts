export interface Ayah {
  chapter: number
  verse: number
  text: string
}

export type Quran = {
  [key: string]: Ayah[]
}
