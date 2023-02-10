import { IMovie } from 'types/movie'

export type TSection = {
  title: string
  text: string
  linkText: string
  linkUrl: string
  movies: IMovie[]
}

export interface IHomepageData {
  upcoming: TSection
  popular: TSection
}
