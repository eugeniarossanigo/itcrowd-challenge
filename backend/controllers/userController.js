import User from  '../models/userModel.js'
import bcrypt from 'bcryptjs'

const userController = {
  signup: async(req, res) => {
    try {
      const payload = req.body
      payload.logged = false
      const user = await User.findByPk(payload.id_user)
      if (user) {
        return res.status(403).json({
          message: 'User already exists'
        })
      } else {
        const passHash = bcrypt.hashSync(payload.password, 10)
        payload.password = passHash

        const newUser = await User.create(payload)
        res.status(200).json({
          message: 'user created',
          response: newUser,
          success: true
        })
      }
    } catch (err) {
        res.status(500).json({
          message: err.message,
          success: false
        })
    }
  },
  signin: async(req, res) => {
    try {
      const user = req.user;
      user.logged = true;
      await user.save()
      const loginUser = {
        id_user: req.user.id_user,
        name: req.user.name,
        email: req.user.email,
        image: req.user.image,
        role: req.user.role,
        logged: user.logged
      }
      return res.status(200).json({
        message: 'User logged',
        response: loginUser,
        token: req.token,
        success: true
      })
    } catch (err) {
      res.status(500).json({
        message: err,
        success: false
      })
    }
  },
  authenticated: async(req, res) => {
    try {
      const user = req.user;
      user.logged = true;
      await user.save()
      const loginUser = {
        id_user: req.user.id_user,
        name: req.user.name,
        email: req.user.email,
        image: req.user.image,
        role: req.user.role,
        logged: user.logged
      }
      return res.status(200).json({
        message: 'User authenticated',
        response: loginUser,
        token: req.token,
        success: true
      })
    } catch (err) {
      res.status(500).json({
        message: err,
        success: false
      })
    }
  },
  signout: async(req, res) => {
    try {
      const user = await User.findOne({
        where:
          { email: req.body.email }
      })
      if (user) {
        user.logged = false;
        await user.save()
        res.status(200).json({
          success: true,
          token: req.token,
          message: 'Bye ' + user.name
        })
      } else {
        res.status(404).json({
          message: 'could not logout',
          success: false
        })
      }
    } catch (error) {
      console.log(error)
        res.status(400).json({
          success: false,
          message: 'Sign out ERROR, try again later'
      })
    }
  },
  getAll: async(req, res) => {
    try {
      const users = await User.findAll()
      if (users.length) {
        res.status(200).json({
          message: 'all users',
          success: true,
          response: users
        })
      } else {
        res.status(404).json({
          message: 'could not find any users',
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
      const user = await User.findByPk(req.params.id)
      if (user) {
        res.status(200).json({
          message: 'get one user',
          success: true,
          response: user
        })
      } else {
        res.status(404).json({
          message: 'could not find that user',
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

export default userController
