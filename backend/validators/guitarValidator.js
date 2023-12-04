import joi from 'joi'

const guitarSchema = joi.object({
  id_guitar: joi.string().required(),
  name: joi.string().min(2).max(150).required().messages({
    'any.required': 'Field is required',
    'string.empty': 'Name can not be empty',
    'string.min' : 'Minimum 2 characters',
    'string.max' : 'Maximum 150 characters'
  }),
  model: joi.string().required(),
  type: joi.string().required(),
  image1: joi.string().required(),
  image2: joi.string().required(),
  price: joi.number().required(),
  stock: joi.number().required(),
  description: joi.string().required(),
  shipment: joi.boolean()
})

export default guitarSchema