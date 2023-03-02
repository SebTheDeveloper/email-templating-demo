const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const flash = require('express-flash');
const session = require('express-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const users = require('./src/js/users');
const initAuth = require('./src/js/auth');
const auth = initAuth();

const initializePassport = require('./passport-config');
initializePassport(
  passport,
  username => users.find(user => user.username === username),
  id => users.find(user => user.id === id)
);

const port = process.env.PORT || 3000;
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/email', require('./routes/emailRoutes'));

app.get('/', auth.checkAuthenticated, (req, res) => {
  res.send('work in progress');
});
app.get('/login', auth.checkNotAuthenticated, (req, res) => {
  res.render('login', { layout: false });
});

app.post('/login', auth.checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/email',
  failureRedirect: '/login',
  failureFlash: true
}));


app.listen(port, () => console.log(`Server started on port ${port}`));
