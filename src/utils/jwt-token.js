const jwt = require('jsonwebtoken');

module.exports = class JWTToken {
  constructor(user) {
    this.user = user;
  }


  signToken = () => {
    const { id, user } = this.user;

    const token = jwt.sign({ id, user }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    
    this.user.password = undefined;

    return { user: this.user, token };
  }
}