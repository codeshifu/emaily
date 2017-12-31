const cookieSession = require('cookie-session');
const passport = require('passport');

module.exports = app => {
    app.use(cookieSession({
        maxAge: 60 * 60 * 24 * 30,
        keys: [process.env.COOKIE_SESSION]
    }))
    
    app.use(passport.initialize());
    app.use(passport.session());
}