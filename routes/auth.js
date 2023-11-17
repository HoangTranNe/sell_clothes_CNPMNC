const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

router.get("/", authController.getAllUsers);
router.post("/register",authController.registerUser);
module.exports=router;
