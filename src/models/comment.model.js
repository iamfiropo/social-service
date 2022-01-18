const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  }
}, {
  timestamps: true,
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;