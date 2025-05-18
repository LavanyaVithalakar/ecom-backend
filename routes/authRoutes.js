const express = require("express");
const {
  registerUser,
  login,
  logout,
} = require("../controllers/authController");
const authRoutes = express.Router();
authRoutes.post("/RegisterPage", registerUser);
authRoutes.post("/Login", login);
authRoutes.get("/Logout", logout);
module.exports = authRoutes;
