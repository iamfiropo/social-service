const { Schema, model } = require('mongoose');

const postSchema = new Schema({
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

const Post = model('Post', postSchema);

module.exports = Post;