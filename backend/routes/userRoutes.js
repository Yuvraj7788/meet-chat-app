const express = require('express');
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

router.use(express.json());
router.route('/').post(registerUser);

module.exports = router;