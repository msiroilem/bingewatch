import Axios from 'axios'
import { TVDB_BASE_URL } from '../globals'

export const TVDBClient = Axios.create({
  // baseURL: TVDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_TVDB_KEY}`
  }
})

export const GetSeries = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/series?page=14`)
  return res.data
}
export const GetImage = async image => {
  const res = await TVDBClient.get(`https://api.thetvdb.com${image}`)
  return res.data
}
export const GetSeriesSeasons = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/seasons`)
  return res.data
}

export const GetSeasonEpisodes = async id => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/episodes/${id}`)
  return res.data
}

export const GetMovies = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/movies`)
  return res.data
}

export const GetSearchResults = async query => {
  const res = await TVDBClient.get(
    `${TVDB_BASE_URL}/search?q=${query}&limit=10`
  )
  return res.data
}
