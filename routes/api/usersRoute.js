const router = require('express').Router();
const {
  getAllUsers,
  getUser_id,
  user,
} = require('../../controllers/usersController');

router.route('/').get(getAllUsers).post(user);

router.route('/:userId').get(getUser_id);

router.route('/').post(user);

module.exports = router;