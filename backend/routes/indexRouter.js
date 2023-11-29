import { Router } from 'express'
const router = Router()
import guitarsRouter from './guitarsRouter.js'
import brandsRouter from './brandsRouter.js'

router.use('/guitars', guitarsRouter)
router.use('/brands', brandsRouter)

export default router