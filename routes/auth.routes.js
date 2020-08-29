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
// LOG OUT
router.get("/logout", authController.logout);
// GET comprobar si está loggeado
router.get('/loggedin', authController.loggedIn);
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
    successRedirect: "http://localhost:3000/profile",
    failureRedirect: "http://localhost:3000/login", // hacia dónde debe ir si falla?
  })
);

module.exports = router;