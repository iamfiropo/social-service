const PostController = require('../controllers/post.controller');
const postController = new PostController();
const CommentController = require('../controllers/comment.controller');
const commentController = new CommentController();
const AuthController = require('../controllers/auth');

module.exports = (router) => {
  router.post('/auth/signup', AuthController.signUp);
  router.post('/posts', postController.create);
  router.get('/posts', postController.getAll);
  router.get('/posts/:id', postController.getOne);
  router.patch('/posts/:id', postController.update);
  router.delete('/posts/:id', postController.delete);

  router.post('/comments', commentController.create);
  router.get('/comments', commentController.getAll);
  router.get('/comments/:id', commentController.getOne);
  router.patch('/comments/:id', commentController.update);
  router.delete('/comments/:id', commentController.delete);

  return router;
}