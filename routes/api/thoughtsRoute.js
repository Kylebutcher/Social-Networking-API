const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  postThought
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(postThought);

router.route('/:userId').get(getSingleThought);

module.exports = router;