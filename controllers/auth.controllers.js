const Customer = require('../models/customer.model')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10

//Creación de Avatar Random
const randomAvatar = () => {
   const avatarArr = [
      '/images/avatar1.jpg',
      '/images/avatar2.jpg',
      '/images/avatar3.jpg',
      '/images/avatar4.jpg',
      '/images/avatar5.jpg'
   ]
   return avatarArr[Math.floor(Math.random() * 5)]
}
//Registrar el customer en BBDD
exports.registerCustomer = (req, res) => {
   console.log(req.body)
   const { username, telNumber, email, password } = req.body
   if (!username || !email || !password) {
      return res.status(400).json({
         message: 'Necesitas completar todos los campos para crear tu cuenta'
      })
   }
   const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
   if (!regex.test(password)) {
      return res.status(500).json({
         message:
            'La contraseña debe tener al menos 6 caracteres y debe contener, por lo menos, una letra minúscula, una mayúscula y un número.'
      })
   }
   const regexEmail = /\S+@\S+\.\S+/
   if (!regexEmail.test(email)) {
      return res.status(500).json({
         message: 'Por favor, pon una dirección de correo válida'
      })
   }

   bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
         return Customer.create({
            username,
            email,
            telNumber,
            avatar: randomAvatar(),
            passwordHash: hashedPassword
         })
      })
      .then((userFromDB) => {
         req.session.currentUser = userFromDB
         console.log(userFromDB)
         res.status(200).json(userFromDB)
      })
      .catch((error) => {
         console.log(error)
      })
}
//Registrar el customer como Owner
exports.registerOwner = (req, res, next) => {
   const { username, telNumber, email, password } = req.body
   if (!username || !telNumber || !email || !password) {
      res.status(400).json({
         message: 'Necesitas completar todos los campos para crear tu cuenta'
      })
      return
   }
   const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
   if (!regex.test(password)) {
      res.status(500).json({
         message:
            'La contraseña debe tener al menos 6 caracteres y debe contener, por lo menos, una letra minúscula, una mayúscula y un número.'
      })
      return
   }
   const regexEmail = /\S+@\S+\.\S+/
   if (!regexEmail.test(email)) {
      res.status(500).json({
         message: 'Por favor, pon una dirección de correo válida'
      })
      return
   }
   bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
         return Customer.create({
            username,
            email,
            telNumber: telNumber,
            avatar: randomAvatar(),
            passwordHash: hashedPassword,
            owner: true
         })
      })
      .then((userFromDB) => {
         console.log('Customer creado: ', userFromDB.username)
         req.session.currentUser = userFromDB
         console.log(userFromDB)
         res.status(200).json(userFromDB)
      })
      .catch((error) => {
         if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).json({ message: error.message })
         } else if (error.code === 11000) {
            res.status(400).json({ message: 'El username ya existe...' })
         } else {
            next(error)
         }
      })
}

exports.login = async (req, res) => {
   try {
      const { username, password } = req.body
      if (!username || !password)
         return res.status(400).send('DNI and username are mandatory.')

      const user = await Customer.findOne({ username })

      if (!user)
         return res
            .status(404)
            .send('El usuario o la contraseña son incorrectos')

      const correctPassword = await bcrypt.compareSync(
         password,
         user.passwordHash
      )

      if (!correctPassword) return res.status(401).send('Contraseña incorrecta')

      return res.status(200).json(user)
   } catch (error) {
      console.log(error)
   }
}

//Info user
exports.infoUser = (req, res) => {
   console.log('user_id: ', req.user._id)
   // req.isAuthenticated() is defined by passport
   Customer.findById(req.user._id)
      .populate('ownProperties')
      .populate('bookings')
      .then((user) => {
         res.status(200).json(user)
         return
      })
      .catch((error) => next(error))
}
