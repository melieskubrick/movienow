declare type PopularActors = {
  adult: boolean
  gender: number
  id: number
  known_for: KnowFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

type KnowFor = {
  adult: false
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}
