import Client from '/api'

export const GetReview = async () => {
  try {
    const res = await Client.get('/reviews')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetShowReviews = async id => {
  try {
    const res = await Client.get(`/reviews/show/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateReview = async data => {
  try {
    const res = await Client.post('/reviews', data)
    return res
  } catch (error) {
    throw error
  }
}

export const UpdateReview = async (id, data) => {
  try {
    const res = await Client.put(`/reviews/${id}`, data)
    return res
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async id => {
  try {
    const res = await Client.delete(`/reviews/${id}`)
    return res
  } catch (error) {
    throw error
  }
}
