const express = require('express');
const router  = express.Router();
const searchController = require('../controllers/search.controllers');
const axios = require('axios')
const unidecode = require('unidecode')

//Búsqueda de resultados
router.post('/getAvailability', searchController.searchResults);
//Consulta de disponibilidad en un Local
router.post('/getAvailability/:propertyId', searchController.bookingDay);
//Consulta de locales por Categoría
router.get('/category/:name', searchController.viewCategory);
router.get('/maps', (req, res, next) => {
    console.log(req.query.search)
    const search = unidecode(req.query.search)
    const path = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    const queryParams = "inputtype=textquery&fields=formatted_address,name,geometry,place_id"
    axios.get(path + "?" + queryParams + "&key=" + process.env.GOOGLE_API_KEY + "&input=" + search)
    .then(response => {
      res.json(response.data)
    })
  
  })

module.exports = router;