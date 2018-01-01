const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// models
const User = require('mongoose').model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async(accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});
    if (existingUser) 
        return done(null, existingUser);
    const newUser = await User({googleId: profile.id}).save();
    return done(null, newUser);
}));
