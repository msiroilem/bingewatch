import Client from '../services/api'

export const GetReviews = async () => {
  const res = await Client.get('/reviews/test/review')
  return res.data
}

export const GetShowReviews = async id => {
  const res = await Client.get(`/reviews/show/${id}`)
  return res.data
}

export const CreateReview = async data => {
  const res = await Client.post('/reviews/review', data)
  return res
}

export const UpdateReview = async (id, data) => {
  const res = await Client.put(`/reviews/${id}`, data)
  return res
}

export const DeleteReview = async id => {
  const res = await Client.delete(`/reviews/${id}`)
  return res
}
