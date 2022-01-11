const PostController = require('../controllers/post.controller');
const postController = new PostController();

module.exports = (router) => {
  router.post('/posts', postController.create);
  router.get('/posts', postController.getAll);

  return router;
}