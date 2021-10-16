import Client from '/api'

TODO

export const GetReview = async () => {
  const res = await Client.get('/reviews')
}

export const CreateReview = async () => {
  const res = await Client.post('/reviews')
}

export const UpdateReview = async () => {
  const res = await Client.put('/reviews')
}

export const DeleteReview = async () => {
  const res = await Client.delete('/reviews')
}
