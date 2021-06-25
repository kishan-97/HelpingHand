const Local_strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    let user = await getUserByEmail(email);
    if (user === null) {
      console.log("Invalid Email");
      return done(null, false, { message: "No User With Such Email" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        console.log("Login Succesful");
        return done(null, user);
      } else {
        console.log("Pasword Incorrect");
        return done(null, false, { message: "Incorrect Password" });
      }
    } catch (e) {
      console.log(e);
    }
  };
  passport.use(
    new Local_strategy({ usernameField: "email" }, authenticateUser)
  );
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initialize;
