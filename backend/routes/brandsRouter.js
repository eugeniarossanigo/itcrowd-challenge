import { Router } from 'express'
const brandsRouter = Router()
import brandController from '../controllers/brandController.js'
import validator from '../middlewares/validator.js'
import brandSchema from '../validators/brandValidator.js'

brandsRouter.get('/', brandController.getAll)
brandsRouter.get('/:id', brandController.getOne)
brandsRouter.post('/', validator(brandSchema), brandController.create)

export default brandsRouter
