const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const UserRouter = require('./routes/UserRouter')
const ShowRouter = require('./routes/ShowRouter')
const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/reviews', ReviewRouter)
app.use('/users', UserRouter)
app.use('/shows', ShowRouter)

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')))
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/client/build/index.html`))
//   })
// }
app.get('/', (req, res) => res.json({ msg: 'Server works' }))

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
