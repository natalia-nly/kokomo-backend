const express = require('express');
const router  = express.Router();
const profileController = require('../controllers/profile.controllers');

// GET de la ruta profile del customer
router.get("/profile", profileController.profile);
//Editar el profile
router.get("/profile/edit", profileController.profileEdit);
//Editar la contraseña
router.post("/profile/editPassword", profileController.profilePasswordChange);
//Editar el teléfono
router.post("/editTelephone", profileController.profileTelephoneChange);
//Añadir owner
router.post("/add-owner", profileController.profileOwnerAdd);
//Ver los favoritos
router.get("/my-favourites", profileController.myFavourites);
//Borrar cuenta
router.get("/profile/delete", profileController.deleteAccount);
//Mandar mensaje
router.post("/send-message/:clientId", profileController.sendMessage);
//Borrar mensaje
router.post('/delete/:messageId', profileController.deleteMessage);

module.exports = router;