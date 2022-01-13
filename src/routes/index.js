const PostController = require('../controllers/post.controller');
const postController = new PostController();

module.exports = (router) => {
  router.post('/posts', postController.create);
  router.get('/posts', postController.getAll);
  router.get('/posts/:id', postController.getOne);
  router.patch('/posts/:id', postController.update);
  router.delete('/posts/:id', postController.delete);

  return router;
}