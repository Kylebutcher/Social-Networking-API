const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  createUser,
  addFriend,
  deleteFriend,
  deleteUser
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);

// need add and delete friend route
// update user route
// delete user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;