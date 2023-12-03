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
      if (brands.length) {
        res.status(200).json({
          message: 'all brands',
          success: true,
          response: brands
        })
      } else {
        res.status(404).json({
          message: 'could not find any brands',
          success: false
        })
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  },
  getOne: async(req, res) => {
    try {
      const brand = await Brand.findByPk(req.params.id)
      if (brand) {
        res.status(200).json({
          message: 'get one brand',
          success: true,
          response: brand
        })
      } else {
        res.status(404).json({
          message: 'could not find that brand',
          success: false
        })
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  },
}

export default brandController
