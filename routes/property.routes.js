const express = require('express')
const router = express.Router()
const propertyController = require('../controllers/property.controllers')
const uploadCloud = require('../config/cloudinary.js')
const uploadControllers = require('../controllers/upload.controllers')

// GET home page
router.get('/', propertyController.allProperties)
//Creación de un local
router.post('/new', propertyController.registerProperty)
//Ver detalles de un local
router.get('/:propertyId', propertyController.viewProperty)
//Edición de un local
router.put(
   '/:propertyId',
   uploadCloud.array('file', 50),
   propertyController.updateProperty
)
//Borrar un local
router.delete('/:propertyId', propertyController.deleteProperty)
//Añadir a favoritos un local
router.get('/love/:propertyId', propertyController.loveProperty)
//Añadir comentarios a un local
router.post('/add-comment/:propertyId', propertyController.addComment)

router.post(
   '/upload',
   uploadCloud.array('file', 50),
   uploadControllers.uploadFiles
)

module.exports = router
