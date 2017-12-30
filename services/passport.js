require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
				clientID: process.env.CLIENT_ID,
				clientSecret: process.env.SECRET,
				callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
				console.log(`AccessToken: ${accessToken}`);
				console.log(`Profile:`, profile);
}));
