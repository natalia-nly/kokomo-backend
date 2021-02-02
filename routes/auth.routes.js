const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const passport = require("passport");

//POST de los datos de signup, validación de los campos y redirección al perfil de usuario
router.post("/signup", authController.registerCustomer);
//POST Sign up para owners
router.post("/signup-local", authController.registerOwner);
//POST de la ruta login
router.post("/login", authController.login);
// GET ver toda la info del user
router.get('/info-user', authController.infoUser);
// LOGIN SOCIAL
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONT_URL + "/",
    failureRedirect: process.env.FRONT_URL + "/login", // hacia dónde debe ir si falla?
  })
);

module.exports = router;