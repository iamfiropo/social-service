const bcrypt = require('bcryptjs');

module.exports = class Password {
  constructor(password) {
    this.password = password;
  }

  hashPassword = async () => {
    const saltRounds = Number(process.env.SALT_ROUNDS);

    const hash = await bcrypt.hash(this.password, saltRounds);

    return hash;
  }

  comparePassword = async (storedPassword) => {
    return await bcrypt.compare(this.password, storedPassword)
  }
}