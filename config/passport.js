const User          = require('../models/customer.model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs'); // !!!
const passport      = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;


passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect username.' });
      return;
    }
    console.log(foundUser)

    if (!bcrypt.compareSync(password, foundUser.passwordHash)) {
      next(null, false, { message: 'Incorrect password.' });
      return;
    }

    next(null, foundUser);
  });
}));


passport.use(
  new GoogleStrategy( {clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"},
    (accessToken, refreshToken, profile, done) => {
      console.log("Google account details:", profile);
      User.findOne({ googleID: profile.id }).then(user => {
          if (user) {
            console.log(user)
            done(null, user);
            return;
          }
          User.create({ 
            googleID: profile.id, 
            username: profile.displayName, 
            avatar: profile.photos[0].value,
            email: profile.emails[0].value
           })
            .then(newUser => {
              console.log(newUser)
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    } )
);