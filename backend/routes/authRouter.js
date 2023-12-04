import { Router } from 'express'
const authRouter = Router()
import userController from '../controllers/userController.js'
import validator from '../middlewares/validator.js'
import signupSchema from '../validators/signupValidator.js'
import signinSchema from '../validators/signinValidator.js'
import { generateToken, passportVerify, verifyPass, verifyUser } from '../middlewares/verifications.js'

authRouter.get('/', userController.getAll)
authRouter.get('/:id', userController.getOne)
authRouter.post('/signup', validator(signupSchema), userController.signup)
authRouter.post('/signin', validator(signinSchema), verifyUser, verifyPass, generateToken, userController.signin)
authRouter.post('/token', passportVerify.authenticate('jwt', {session: false}), generateToken, userController.authenticated);
authRouter.post('/signout', userController.signout)

export default authRouter
