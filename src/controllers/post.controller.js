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

  getOne = async (req, res) => {
    const post = await Post.findOne({_id: req.params.id})

    res.status(200).json(post)
  }

  update = async (req, res) => {
    // 1) get the object properties to update the record from req.body
    const updates = req.body;
    // 2) get id or identifier of that object from the req.params
    const id = req.params.id;
    // 3) use the id to query the database
    const post = await Post.findOne({ _id: id })
    // 4) check the database response
    // 5) if it is a failure response, send back to the client an error message of record not found
    if (!post) {
      res.status(404).json('Post not found');
    }
    // 6) if succeeded, update the stored records with the req.body properties
    // 7) save record

    const updatedPost = Object.assign(post, updates);

    updatedPost.save();

    res.status(200).json(updatedPost)
  }
}

module.exports = PostController;