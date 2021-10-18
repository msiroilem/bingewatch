import Client from './api'

export const CreateShow = async data => {
  const res = await Client.post('/shows', data)
  return res
}

export const GetAllShows = async data => {
  const res = await Client.get('/shows', data)
  return res.data
}

export const GetShow = async data => {
  const res = await Client.get('/shows', data)
  return res
}

export const UpdateShow = async (id, data) => {
  const res = await Client.put(`/shows/${id}`, data)
  return res
}

export const DeleteShow = async id => {
  const res = await Client.delete(`/shows/${id}`)
  return res
}
