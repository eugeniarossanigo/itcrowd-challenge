import User from  '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

const passportVerify = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'challenge' // process.env.SECRET_KEY
    }, async(payload, done) => {
      try {
        let user = await User.findOne({
          where:
          { email: payload.email }
        })
        if (user) {
          return done(null, user)
        } else {
          return done(null)
        }
      } catch (error) {
        return done(error)
      }
    }
  )
)

const verifyUser = async(req, res, next) => {
  const userFound = await User.findOne({
    where:
      { email: req.body.email }
  })
  if (userFound) {
      req.user = userFound
      next()
  } else {
    res.status(400).json({message: 'user not found'})
  }
}

const verifyPass = (req, res, next) => {
  const { password } = req.body
  const passUser = req.user.password
  const isMatch = bcrypt.compareSync(password, passUser)
  if (isMatch) {
    next()
  } else {
    res.status(400).json({message: 'wrong password'})
  }
}

const generateToken = (req, res, next) => {
  try {
    let secretKet = 'challenge' // process.env.SECRET_KEY
    let token = jwt.sign({email: req.user.email}, secretKet, {expiresIn: 60*60})
    req.token = token
    next()
  } catch (err) {
    res.status(500).json({
      message: err,
      success: false
    })
  }
}

export { passportVerify , verifyUser, verifyPass, generateToken }