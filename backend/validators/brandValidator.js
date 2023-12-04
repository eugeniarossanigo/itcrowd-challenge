import joi from 'joi'

const brandSchema = joi.object({
  id_brand: joi.string().required(),
  name: joi.string().min(2).max(20).required().messages({
    'any.required': 'Field is required',
    'string.empty': 'Name can not be empty',
    'string.min' : 'Minimum 2 characters',
    'string.max' : 'Maximum 20 characters'
  }),
  logo: joi.string().required()
})

export default brandSchema