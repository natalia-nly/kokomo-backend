const Customer = require("../models/customer.model");
const bcrypt = require("bcryptjs");
const saltRounds = 10;


//Formulario edición del profile
exports.profileEdit = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    Customer.findById(sessionUser._id).then(user => {
        res.status(200).json(user)
    }).catch(error => next(error));
};

//Editar la contraseña
exports.profilePasswordChange = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    const {
        id,
        oldPassword,
        newPassword
    } = req.body;
    if (bcrypt.compareSync(oldPassword, sessionUser.passwordHash)) {
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!regex.test(newPassword)) {
            res.status(500).render("auth/signup", {
                errorMessage: "La contraseña debe tener al menos 6 caracteres y debe contener, por lo menos, una letra minúscula, una mayúscula y un número.",
            });
            return;
        }
        bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(newPassword, salt))
        .then((hashedPassword) => {
          return Customer.findByIdAndUpdate(
            id,
            {passwordHash: hashedPassword},
            {
                new: true
            }
          ).then(resultado => {
            res.render('customer/edit', {
                user: sessionUser,
                title: 'Editar mi perfil | KOKOMO',
                infoMessage: '¡Contraseña cambiada! ✌️'
            });
        });
        }).catch(error => next(error));
    } else {
        res.render('customer/edit', {
            user: req.session.currentUser,
            title: 'Editar mi perfil | KOKOMO',
            errorMessage: 'Tu contraseña actual no es correcta'
        });
    }
};
//Editar el teléfono
exports.profileTelephoneChange = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;

    console.log("BODY DEL TELEPHONE: ", req.body)
    Customer.findByIdAndUpdate(req.user._id, {
            telNumber: req.body.telNumber
        }, {
            new: true
        })
        .then(resultado => {
            res.status(200).json(sessionUser)
        }).catch(error => next(error));
};
//Añadir etiqueta owner
exports.profileOwnerAdd = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user; 
    Customer.findByIdAndUpdate(sessionUser._id, {owner:true}, {
        new: true
      })
      .then(resultado => {
          res.status(200).json(sessionUser)
      }).catch(error => next(error));
  };
//Ver favoritos
exports.myFavourites = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    Customer.findById(sessionUser._id).populate('favourites').then(user => {
      console.log(user.favourites);
      res.render('customer/favourites', {
        user,
        title: 'Mis favoritos | KOKOMO'
      });
    }).catch(error => next(error));
  };
//Borrar cuenta
exports.deleteAccount = (req, res, next) => {
    const sessionUser = req.session.currentUser || req.user;
    Customer.findByIdAndDelete(sessionUser)
      .then(user => {
        res.redirect('/');
      }).catch(error => next(error));
  };

  //Enviar mensaje
exports.sendMessage = (req, res) => {
    const sessionUser = req.user;
    const newMessage = {
        fromUser: sessionUser.username,
        refUser: sessionUser._id,
        avatar: req.body.avatar,
        topic: req.body.topic,
        message: req.body.message,
    };
    console.log(newMessage)
    console.log(req.params)
    Customer.findByIdAndUpdate(req.params.clientId, {
        $push: {
            messages: newMessage
        }
    }, {new: true}).then((customerUpdated) => {
        console.log(customerUpdated);
        res.status(200).json(customerUpdated);
    });
};

//Borrar un mensaje
exports.deleteMessage= (req, res) => {
    console.log('Este es el mensaje a borrar:',req.params.messageId)
    const messageId = req.params.messageId;
    const sessionUser =  req.user;
    Customer.findByIdAndUpdate({
      _id: sessionUser._id,
    }, {
      $pull: {
        messages: {_id:{$eq:messageId}}},
      
    }).then(customer=> {
        console.log('yess:', customer)
        res.status(200).json(customer)
      }).
    
    catch((error) => {
        console.log("Error: ", error);
      });
  };