const router = require('express').Router();
const thoughtsRoute = require('./thoughtsRoute');
const usersRoute = require('./usersRoute');

router.use('/user', usersRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;