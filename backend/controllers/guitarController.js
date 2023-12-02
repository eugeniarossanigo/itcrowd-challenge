// const noteModel = require('../models/noteModel');
import Guitar from  '../models/guitarModel.js'

const guitarController = {
  create: async(req, res) => {
    try {
      const guitar = await Guitar.create(req.body)
      res.json({
        message: 'guitar model created',
        success: true,
        id: guitar.id
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
      const guitars = await Guitar.findAll()      
      res.status(200).json({
        message: 'all guitars',
        success: true,
        response: guitars
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
      const guitars = await Guitar.findAll({
        where: {
          id_guitar: req.params.id
        }
      })
      res.status(200).json({
        message: 'get one guitar',
        success: true,
        response: guitars[0]
      })
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
      res.json({
        message: 'guitar updated',
        success: true,
        response: guitar
      })
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
      res.json({
        message: 'guitar deleted',
        success: true,
        response: guitar.id_guitar
      })
    } catch (err) {
      res.status(500).json({
        message: err.message,
        success: false
      })
    }
  }
}

export default guitarController
