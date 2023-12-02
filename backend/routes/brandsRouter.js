import { Router } from 'express'
const brandsRouter = Router()
import brandController from '../controllers/brandController.js'

brandsRouter.get('/', brandController.getAll)
brandsRouter.get('/:id', brandController.getOne)
brandsRouter.post('/', brandController.create)

export default brandsRouter
