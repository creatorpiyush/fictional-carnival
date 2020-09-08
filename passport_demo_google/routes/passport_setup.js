const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../keys/keys"); // * git ignored

const User = require("../model/model");

passport.serializeUser(function (user, done) {
  /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You don`t have to do it like this its just usually done like this
    */
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });

  /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
  //   done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.passportgoogle.clientID,
      clientSecret: keys.passportgoogle.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(null, profile);
      console.log(profile);
      //   });

      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          //! already have user
          console.log("User is:", currentUser);
          done(null, currentUser);
        } else {
          // * create user in db
          new User({
            username: profile.displayName,
            googleid: profile.id,
            email: profile.emails[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("new user created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
