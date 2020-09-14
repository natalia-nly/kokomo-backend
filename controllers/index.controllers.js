// const Property = require("../models/property.model");
// const Customer = require("../models/customer.model");

// //HOME
// exports.allProperties = (req, res, next) => {
//   const sessionUser = req.session.currentUser || req.user;
//   // Si hay usuario cogemos también los locales favoritos para marcarlos
//   if (sessionUser) {
//     const p1 = Customer.findById(sessionUser._id);
//     const p2 = Property.find();

//     Promise.all([p1, p2])
//       .then((results) => {
//         const favourites = results[0].favourites;
//         const properties = results[1];
        

//         let finalResult = [properties, favourites]
//         console.log("RESULTADO: ", finalResult)

//         res.status(200).json(finalResult);

//         return;
//       })
//       .catch((error) => {
//         console.log("Error while getting the properties from the DB: ", error);
//       });
//   } else {
//     // si no hay usuario cargamos solamente los locales
//     Property.find()
//       .then((properties) => {
//         console.log("ENTRANDO DESDE SOLO PROPERTIES")
//         let finalResult = [properties, []]
//         res.status(200).json(finalResult);
//       })
//       .catch((error) => {
//         console.log("Error while getting the properties from the DB: ", error);
//       });
//   }
// };













