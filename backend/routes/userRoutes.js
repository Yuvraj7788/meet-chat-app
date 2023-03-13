const express = require('express');
<<<<<<< HEAD
const { registerUser, authUser } = require("../controllers/userControllers");
=======
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require('../middleware/authMiddleware');
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

const router = express.Router();

router.use(express.json());
<<<<<<< HEAD
router.route('/').post(registerUser);
=======
router.route("/").get(protect , allUsers);
router.route('/').post(registerUser); // request to get the list of registered user and all Users.
router.post('/login', authUser);

>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

module.exports = router;