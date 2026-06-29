const express = require("express");
const router = express.Router();
const authController = require("../controller/passwordController");

router.post("/reset-password", authController.resetPassword);

module.exports = router;