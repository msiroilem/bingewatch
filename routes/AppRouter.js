const { Router } = require('express')
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const ShowRouter = require('./ShowRouter')
const ReviewRouter = require('./ReviewRouter')

const AppRouter = Router()

AppRouter.get('/status', (req, res) => {
  res.send({ msg: 'Server working' })
})

AppRouter.use('/auth', AuthRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/shows', ShowRouter)
AppRouter.use('/reviews', ReviewRouter)
module.exports = AppRouter
