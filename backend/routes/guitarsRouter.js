import { Router } from 'express'
const guitarsRouter = Router()
import guitarController from '../controllers/guitarController.js'
import validator from '../middlewares/validator.js'
import guitarSchema from '../validators/guitarValidator.js'

guitarsRouter.get('/', guitarController.getAll);
guitarsRouter.get('/:id', guitarController.getOne);
guitarsRouter.post('/', validator(guitarSchema), guitarController.create);
guitarsRouter.put('/:id', guitarController.update);
guitarsRouter.delete('/:id', guitarController.delete);

export default guitarsRouter
