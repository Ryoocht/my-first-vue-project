import quizes from './quizes.json'

type Option = {
  id: number
  label: string
  text: string
  isCorrect: boolean
}

type Question = {
  id: number
  text: string
  options: Option[]
}

export type Subject = {
  id: number
  img: string
  name: string
  questions: Question[]
}

export const q: Subject[] = quizes
