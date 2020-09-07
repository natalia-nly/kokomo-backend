const express = require('express');
const router  = express.Router();
const propertyController = require('../controllers/property.controllers');
const uploadCloud = require('../config/cloudinary.js');

//Creación de un local
router.post('/create-property', uploadCloud.single('mainImage'), propertyController.registerProperty);
//Ver detalles de un local
router.get('/:propertyId', propertyController.viewProperty);
//Edición de un local
router.post('/edit/:propertyId', uploadCloud.single('main'), propertyController.saveProperty);
//Añadir a favoritos un local
router.post('/love/:propertyId', propertyController.loveProperty);
//Añadir comentarios a un local
router.post('/add-comment/:propertyId', propertyController.addComment);
//router.get('/owner/property/:id', index_controller.ownerViewLocal);

router.post('/upload', uploadCloud.single("mainImage"), (req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    res.json({ path: req.file.path });
    
    const data = {
      
    }
})

module.exports = router;