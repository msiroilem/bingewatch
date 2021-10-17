import Client from './api'

export const CreateUser = async data => {
  const res = await Client.post('/users', data)
  return res
}

export const GetUsers = async data => {
  const res = await Client.post('users', data)
  return res
}

export const GetUserById = async data => {
  const res = await Client.get('/users', data)
  return res
}

export const UpdateUser = async data => {
  const res = await Client.put('/users', data)
  return res
}

export const DeleteUser = async data => {
  const res = await Client.delete('/users', data)
  return res
}
