import axios from 'axios'

// const baseURL: string = Config.API_BASE_URL

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

const key = 'fa3ba756e42ed2619c60491b768e1ac4'

const defaultContent = {
  api_key: key,
  language: 'pt-BR'
}

function queryString(obj) {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join('&')
}

export const getTrendings = async (): Promise<TrendingMovies | any> => {
  try {
    const obj = { ...defaultContent }
    return await api.get(`trending/movie/week?${queryString(obj)}`)
  } catch (error: any) {
    if (error.response) {
      return error.response
    }
    return error
  }
}

export const getPopularActors = async (): Promise<PopularActors | any> => {
  try {
    const obj = { ...defaultContent }
    return await api.get(`/person/popular?${queryString(obj)}`)
  } catch (error: any) {
    if (error.response) {
      return error.response
    }
    return error
  }
}

export const getTopRated = async (): Promise<TopRated | any> => {
  try {
    const obj = { ...defaultContent }
    return await api.get(`movie/top_rated?${queryString(obj)}`)
  } catch (error: any) {
    if (error.response) {
      return error.response
    }
    return error
  }
}
