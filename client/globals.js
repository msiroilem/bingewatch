export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const TVDB_BASE_URL =
  process.env.VUE_APP_USE_TVDB === 'true'('https://api4.thetvdb.com/v4')
