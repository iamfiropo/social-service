const User = require('../models/user.model');

module.exports = class AuthController {
  static async signUp(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      phone
    } = req.body;

    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        phone
      })
  
      if (!user) {
        return res.status(400).json('Unable to create user')
      }
  
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }    
  }
}