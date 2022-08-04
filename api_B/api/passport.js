const  GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport=require("passport");
const GOOGLE_CLIENT_ID="561038064933-u536cckejmrtgrqi1g88pjioinb3jb7l.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    done(null,profile)
    }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})