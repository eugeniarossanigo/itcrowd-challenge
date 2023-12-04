import Guitar from '../models/guitarModel.js'
import Brand from '../models/brandModel.js'
import { Sequelize, Op } from 'sequelize';

Brand.hasMany(Guitar, { foreignKey: 'id_brand' });
Guitar.belongsTo(Brand, { foreignKey: 'id_brand' });

const guitarController = {
  create: async(req, res) => {
    try {
      const guitar = await Guitar.create(req.body)
      res.json({
        message: 'guitar model created',
        success: true,
        id: guitar.id_guitar
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
      const regexName = req.query.name ? req.query.name.trim() : null
      const regexDesc = req.query.description ? req.query.description.trim() : null
      const whereClause = {};

      if (regexName || regexDesc) {
        whereClause[Op.or] = []
        if (regexName) {
          whereClause[Op.or].push({ name: {[Op.regexp]: regexName}})
        }
        if (regexDesc) {
          whereClause[Op.or].push({ description: {[Op.regexp]: regexDesc}})
        }
      }
      const guitars = await Guitar.findAll({
        where: whereClause,
        include: [{
          model: Brand,
          attributes: ['name', 'logo']
        }]
      })
      if (guitars.length) {
        res.status(200).json({
          message: 'all guitars',
          success: true,
          response: guitars
        })
      } else {
        res.status(404).json({
          message: 'could not find any guitars',
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
      const guitar = await Guitar.findByPk(req.params.id)
      if (guitar) {
        res.status(200).json({
          message: 'get one guitar',
          success: true,
          response: guitar
        })
      } else {
        res.status(404).json({
          message: 'could not find that guitar',
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
  update: async(req, res) => {
    try {
      const guitar = await Guitar.update(req.body, {
        where: {
          id_guitar: req.params.id
        }
      })
      if (guitar) {
        res.json({
          message: 'guitar updated',
          success: true,
          response: guitar
        })
      } else {
        res.status(404).json({
          message: 'could not updated the guitar',
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
  delete: async(req, res) => {
    try {
      const guitar = await Guitar.destroy({
        where: {
          id_guitar: req.params.id
        }
      })
      if (guitar) {
        res.json({
          message: 'guitar deleted',
          success: true,
          response: guitar.id_guitar
        })
      } else {
        res.status(404).json({
          message: 'could not delete the guitar',
          success: false
        })
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  }
}

export default guitarController
