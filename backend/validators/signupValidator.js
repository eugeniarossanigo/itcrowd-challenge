import joi from 'joi'
import joipwd from 'joi-password-complexity'

const complexityOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 3,
}

const signupSchema = joi.object({
  id_user: joi.string().required(),
  name: joi.string().min(2).max(30).required(),
  email: joi.string().email().min(10).required().messages({
    'any.required': 'Field is required',
    'string.empty': 'Mail can not be empty',
    'string.min' : 'Minimum 10 characters',
  }),
  password: joipwd(complexityOptions).required(),
  role: joi.boolean().required(),
  logged: joi.boolean()
})

export default signupSchema