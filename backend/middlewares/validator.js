const validator = (schema) => [
  (req, res, next) => {
    const val = schema.validate(req.body, {abortEarly: false})
    if (val.error) {
      return res.status(400).json({
        success: false,
        message: val.error.details.map(e => e.message)
      })
    }
    return next()
  }
]

export default validator