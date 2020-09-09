const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../keys/keys"); // * git ignored

const User = require("../model/model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.passportgoogle.clientID,
      clientSecret: keys.passportgoogle.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);

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

// * github
const githubStrategy = require("passport-github2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new githubStrategy(
    {
      clientID: keys.passportgithub.clientID,
      clientSecret: keys.passportgithub.clientSecret,
      callbackURL: "/auth/github/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);

      User.findOne({ githubid: profile.id }).then((currentUser) => {
        if (currentUser) {
          //! already have user
          console.log("User is:", currentUser);
          done(null, currentUser);
        } else {
          // * create user in db
          new User({
            username: profile.displayName,
            githubid: profile.id,
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

// * facebook

const facebookStrategy = require("passport-facebook").Strategy;

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });

passport.use(
  new facebookStrategy(
    {
      clientID: keys.passportfacebook.clientID,
      clientSecret: keys.passportfacebook.clientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);

      // User.findOne({ facebookid: profile.id }).then((currentUser) => {
      //   if (currentUser) {
      //     //! already have user
      //     console.log("User is:", currentUser);
      //     done(null, currentUser);
      //   } else {
      //     // * create user in db
      //     new User({
      //       username: profile.displayName,
      //       facebookid: profile.id,
      //       email: profile.emails[0].value,
      //     })
      //       .save()
      //       .then((newUser) => {
      //         console.log("new user created" + newUser);
      //         done(null, newUser);
      //       });
      //   }
      // });
    }
  )
);
