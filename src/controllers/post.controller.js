const Post = require('../models/post.model')

module.exports = async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.create({
    title,
    content
  });

  res.json(post)
}