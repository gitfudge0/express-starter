const router = require('express').Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send({
      hello: 'world',
    });
  });

  return router;
};
