import Axios from 'axios'
import { TVDB_BASE_URL } from '../globals'

const TVDBClient = Axios.create({
  // baseURL: TVDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_TVDB_KEY}`
  }
})

// TVDBClient.interceptors.request.use(
//   config => {
//     const token = process.env.VUE_APP_TVDB_KEY
//     if (token) {
//       config.headers['authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   error => Promise.reject(error)
// )

export const getSeries = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/series`)
  return res.data
}
export const getImage = async image => {
  const res = await TVDBClient.get(`https://api.thetvdb.com${image}`)
  return res.data
}
export const getSeriesSeasons = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/seasons`)
  return res.data
}

export const getSeasonEpisodes = async id => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/episodes/${id}`)
  return res.data
}

export const getMovies = async () => {
  const res = await TVDBClient.get(`${TVDB_BASE_URL}/movies`)
  return res.data
}
