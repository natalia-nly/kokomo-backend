const Customer = require("../models/customer.model");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const passport = require("passport");


//Creación de Avatar Random
const randomAvatar = () => {
  const avatarArr = [
    '/images/avatar1.jpg',
    '/images/avatar2.jpg',
    '/images/avatar3.jpg',
    '/images/avatar4.jpg',
    '/images/avatar5.jpg'
  ];
  return avatarArr[Math.floor(Math.random() * 5)];
};
//Registrar el customer en BBDD
exports.registerCustomer = (req, res, next) => {
  const {
    username,
    telephone,
    email,
    password
  } = req.body;
  if (!username || !telephone || !email || !password) {
    res.status(400).json({ message: 'Necesitas completar todos los campos para crear tu cuenta' });
    return;
  }
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).json({ message: 'La contraseña debe tener al menos 6 caracteres y debe contener, por lo menos, una letra minúscula, una mayúscula y un número.' });
    return;
  }
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    res.status(500).json({ message: 'Por favor, pon una dirección de correo válida' });
    return;
  }
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      return Customer.create({
        username,
        email,
        telNumber: telephone,
        avatar: randomAvatar(),
        passwordHash: hashedPassword,
      });
    })
    .then((userFromDB) => {
      console.log("Customer creado: ", userFromDB.username);
      req.session.currentUser = userFromDB;
      console.log(userFromDB);
      res.status(200).json(userFromDB);
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: error.message });
      } else if (error.code === 11000) {
        res.status(400).json({ message: 'El username ya existe...' });
      } else {
        next(error);
      }
    });
};
//Registrar el customer como Owner
exports.registerOwner = (req, res, next) => {
  const {
    username,
    telephone,
    email,
    password
  } = req.body;
  if (!username || !telephone || !email || !password) {
    res.status(400).json({ message: 'Necesitas completar todos los campos para crear tu cuenta' });
    return;
  }
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).json({ message: 'La contraseña debe tener al menos 6 caracteres y debe contener, por lo menos, una letra minúscula, una mayúscula y un número.' });
    return;
  }
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    res.status(500).json({ message: 'Por favor, pon una dirección de correo válida' });
    return;
  }
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hashedPassword) => {
      return Customer.create({
        username,
        email,
        telNumber: telephone,
        avatar: randomAvatar(),
        passwordHash: hashedPassword,
        owner: true,
      });
    })
    .then((userFromDB) => {
      console.log("Customer creado: ", userFromDB.username);
      req.session.currentUser = userFromDB;
      console.log(userFromDB);
      res.status(200).json(userFromDB);
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({ message: error.message });
      } else if (error.code === 11000) {
        res.status(400).json({ message: 'El username ya existe...' });
      } else {
        next(error);
      }
    });
};


//Logearse
exports.login = (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
          res.status(500).json({ message: 'Something went wrong authenticating user' });
          return;
      }

      if (!theUser) {
          // "failureDetails" contains the error messages
          // from our logic in "LocalStrategy" { message: '...' }.
          res.status(401).json(failureDetails);
          return;
      }

      // save user in session
      req.login(theUser, (err) => {
          if (err) {
              res.status(500).json({ message: 'Session save went bad.' });
              return;
          }

          // We are now logged in (that's why we can also send req.user)
          res.status(200).json(theUser);
      });
  })(req, res, next);
};

//LogOut
exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
};

//LoggedIn
exports.loggedIn = (req, res) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
};