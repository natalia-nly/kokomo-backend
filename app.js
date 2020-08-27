require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');



const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// require database configuration
require('./config/db.config');

const app = express();

//Session
const createSession = require('./config/session.config');
createSession(app);
const passport      = require('passport');
require('./config/passport');

// USE passport.initialize() and passport.session() HERE:
app.use(passport.initialize());
app.use(passport.session());

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Kokomo';

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001'],
  })
);


//ROUTES
const auth = require('./routes/auth.routes');
const booking = require('./routes/booking.routes');
const property = require('./routes/property.routes');
const profile = require('./routes/profile.routes');
const search = require('./routes/search.routes');


app.use('/api/auth', auth);
app.use('/api/booking', booking);
app.use('/api/property', property);
app.use('/api/profile', profile);
app.use('/api/search', search);

module.exports = app;
