import Client from './api'

export const LoginUser = async data => {
  const res = await Client.post('/auth/login', data)
  localStorage.setItem('token', res.data.token)
  return res.data.user
}

export const RegisterUser = async data => {
  const res = await Client.post('/auth/register', data)
  return res
}

export const CheckSession = async () => {
  const res = await Client.get('/auth/session')
  return res.data
}
