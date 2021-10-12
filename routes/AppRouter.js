const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ShowRouter = require('./ShowRouter')
const ReviewRouter = require('./ReviewRouter')
Router.use('/users', UserRouter)
Router.use('/shows', ShowRouter)
Router.use('/reviews', ReviewRouter)
module.exports = Router
