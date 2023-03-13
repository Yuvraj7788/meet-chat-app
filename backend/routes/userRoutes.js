const express = require('express');
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(express.json());
router.route("/").get(protect , allUsers);
router.route('/').post(registerUser); // request to get the list of registered user and all Users.
router.post('/login', authUser);


module.exports = router;