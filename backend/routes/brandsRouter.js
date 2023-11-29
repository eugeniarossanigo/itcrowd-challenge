import { Router } from 'express'
const brandsRouter = Router()

brandsRouter.get('/', (req, res, next) => {
  res.send('all brands')
})

export default brandsRouter