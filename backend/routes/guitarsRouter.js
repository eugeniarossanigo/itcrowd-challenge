import { Router } from 'express'
const guitarsRouter = Router()
import guitarController from '../controllers/guitarController.js'

guitarsRouter.get('/', guitarController.getAll);
guitarsRouter.get('/:id', guitarController.getOne);
guitarsRouter.post('/', guitarController.create);
guitarsRouter.put('/:id', guitarController.update);
guitarsRouter.delete('/:id', guitarController.delete);

export default guitarsRouter
