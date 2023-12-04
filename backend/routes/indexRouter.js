import { Router } from 'express'
const router = Router()
import guitarsRouter from './guitarsRouter.js'
import brandsRouter from './brandsRouter.js'
import authRouter from './authRouter.js'

router.get('/', (req, res, next) => {
  res.send('Welcome to my guitar API :)')
})
router.use('/guitars', guitarsRouter)
router.use('/brands', brandsRouter)
router.use('/auth', authRouter)

export default router