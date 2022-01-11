const Post = require('../models/post.model')

class PostController {
  create = async (req, res) => {
    const { title, content } = req.body;
  
    const post = await Post.create({
      title,
      content
    });
  
    res.status(201).json(post)
  }

  getAll = async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts);
  }
}

module.exports = PostController;