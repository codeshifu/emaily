const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// models
const User = require('mongoose').model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    }).catch(err => {
        done(err, null);
    });
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
    .then(user => {
        if (user) done(null, user);
        else {
            new User({googleId: profile.id}).save()
            .then(user => done(null, user))
            .catch(err => {
                done(err, null);
            })
        }
    })
    .catch(err => {
        console.log(err);
    })
}));
