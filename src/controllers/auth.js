const User = require('../models/user.model');
const JWTToken = require('../utils/jwt-token');

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
      
      const response = new JWTToken(user).signToken();
  
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }    
  }

  static async signIn(req, res) {
    const { email, password } = req.body;
    // find the sign in email in the database
    const user = await User.findOne({ email })

    if (!user || !user.comparePassword(password)) {
      return res.status(400).json('Incorrect email or password')
    }

    const response = new JWTToken(user).signToken();

    res.status(200).json(response)

  }
}