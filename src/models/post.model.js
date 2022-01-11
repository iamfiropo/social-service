const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;