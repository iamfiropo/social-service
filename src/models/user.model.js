const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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
    this.password = await bcrypt.hash(this.password, 12)
  } catch (error) {
    return error.message;
  }

  next();
})

const User = model('User', userSchema);

module.exports = User;