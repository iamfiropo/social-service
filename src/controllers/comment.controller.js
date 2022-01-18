const Comment = require('../models/comment.model')
const Post = require('../models/post.model');

class CommentController {
  create = async (req, res) => {
    const { content, postId } = req.body;

    try {
      if (postId) {
        const post = await Post.findOne({
          _id: postId
        })
  
        if (!post) {
          return res.status(404).json('Post id not found')
        }
      }
    
      const comment = await Comment.create({
        content,
        postId
      });
    
      res.status(201).json(comment)
    } catch(error) {
      res.status(500).json({ error: error.message })
    }
  }

  getAll = async (req, res) => {
    const comments = await Comment.find();

    res.status(200).json(comments);
  }

  getOne = async (req, res) => {
    const comment = await Comment.findOne({_id: req.params.id})

    if (!comment) {
      return res.status(404).json('Comment not found')
    }

    res.status(200).json(comment)
  }

  update = async (req, res) => {
    // 1) get the object properties to update the record from req.body
    const updates = req.body;
    // 2) get id or identifier of that object from the req.params
    const id = req.params.id;
    // 3) use the id to query the database
    const comment = await Comment.findOne({ _id: id })
    // 4) check the database response
    // 5) if it is a failure response, send back to the client an error message of record not found
    if (!comment) {
      return res.status(404).json('Comment not found');
    }
    // 6) if succeeded, update the stored records with the req.body properties
    // 7) save record

    const updatedComment = Object.assign(comment, updates);

    updatedComment.save();

    res.status(200).json(updatedComment)
  }

  delete = async (req, res) => {
    // 1) get id or identifier of that object from the req.params
    const id = req.params.id;
    // 2) delete the record
    const comment = await Comment.findByIdAndDelete({ _id: id });

    if (!comment) {
      return res.status(404).json('Comment not found');
    }

    res.status(200).json('success');
  }
}

module.exports = CommentController;