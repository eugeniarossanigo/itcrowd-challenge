import Brand from  '../models/brandModel.js'

const brandController = {
  create: async(req, res) => {
    try {
      const brand = await Brand.create(req.body)
      res.json({
        message: 'brand created',
        success: true,
        id: brand.id_brand
      })
    } catch (err) {
        res.status(500).json({
          message: err.message,
          success: false
        })
    }
  },
  getAll: async(req, res) => {
    try {
      const brands = await Brand.findAll()
      res.status(200).json({
        message: 'all brands',
        success: true,
        response: brands
      })
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  },
  getOne: async(req, res) => {
    try {
      const brands = await Brand.findAll({
        where: {
          id_brand: req.params.id
        }
      })
      res.status(200).json({
        message: 'get one brand',
        success: true,
        response: brands[0]
      })
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  },
}

export default brandController
