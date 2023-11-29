import { Router } from 'express'
const guitarsRouter = Router()

guitarsRouter.get('/', (req, res, next) => {
  res.send('all guitars')
})

export default guitarsRouter