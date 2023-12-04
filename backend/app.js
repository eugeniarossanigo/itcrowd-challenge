import express from 'express'
import cors from 'cors'

import router from './routes/indexRouter.js'
import db from './database/db.js'
const server = express()

server.use(express.json())
server.use(cors())

const port = process.env.PORT || '3000'
server.listen(port, () => console.log('listen in port ' + port))

try {
  db.authenticate()
  console.log('db connected')
} catch (err) {
  console.error(err)
}

server.get('/', (req, res, next) => {
  res.send('Hi there! The url is /api')
})
server.use('/api', router);

export default server