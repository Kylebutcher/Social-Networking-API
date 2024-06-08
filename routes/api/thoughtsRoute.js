const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
// /api/thoughts
router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').put(updateThought).delete(deleteThought);

// router.route('/:thoughtId')
//add update thoughts and delete thoughts and create reaction and delete reaction

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;