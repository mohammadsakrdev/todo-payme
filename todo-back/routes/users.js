const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//Login
router.post("/auth", userController.auth);

//Registeration
router.post("/register", userController.register);

module.exports = router;
