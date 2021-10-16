import Client from '../services/api'

export const getReview = async () => {
  const res = await Client.get('/reviews')
  return res.data
}

export const getShowReviews = async id => {
  const res = await Client.get(`/reviews/show/${id}`)
  return res.data
}

export const createReview = async data => {
  const res = await Client.post('/reviews', data)
  return res
}

export const updateReview = async (id, data) => {
  const res = await Client.put(`/reviews/${id}`, data)
  return res
}

export const deleteReview = async id => {
  const res = await Client.delete(`/reviews/${id}`)
  return res
}
