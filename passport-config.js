const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;

function initialize(passport, getUserByUsername, getUserById) {
  const authenticateUser = async (username, password, done) => {
    const user = getUserByUsername(username.trim());
    if (user == null) {
      return done(null, false, { message: 'No user found with that username' });
    }

    try {
      if (await bcrypt.compare(password.trim(), user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => { 
    done(null, 'myId');
   });
}

module.exports = initialize;