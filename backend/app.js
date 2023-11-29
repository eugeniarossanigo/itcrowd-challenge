import express from 'express';
import router from './routes/indexRouter.js';
const server = express()

server.use(express.json());
app.use(cors())

server.get('/', (req, res, next) => {
  res.send('Hi there! The url is /api')
})
server.use('/api', router);

const port = process.env.PORT || '3000'
server.listen(port, () => console.log('listen in port ' + port));

export default server