const { Schema, model } = require('mongoose');
const Password = require('../utils/password');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: [true, 'Please provide your first name'],
  },
  lastName: {
    type: String,
    required: true,
    trim: [true, 'Please provide your last name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  }, 
  password: {
    type: String,
    required: [true, 'Please provide a password']
  },
  phone: {
    type: String,
  }
}, {
  timestamps: true,
})

userSchema.pre('save', async function (next) {
  try {
    const password = new Password(this.password);
    this.password = await password.hashPassword();
  } catch (error) {
    return error.message;
  }

  next();
})

userSchema.methods.comparePassword = function (password) {
  return new Password(password).comparePassword(this.password) 
}

const User = model('User', userSchema);

module.exports = User;