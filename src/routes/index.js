const Post = require('../controllers/post.controller');

module.exports = (router) => {
  router.post('/', Post);

  return router;
}