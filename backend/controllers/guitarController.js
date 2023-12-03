// const noteModel = require('../models/noteModel');
import Guitar from  '../models/guitarModel.js'
import { Sequelize } from 'sequelize';

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
      const regexPattern = '^' + req.query.name
      const guitars = await Guitar.findAll({
        where: {
          name: {
            [Sequelize.Op.regexp]: regexPattern.trim()
          }
        }
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
