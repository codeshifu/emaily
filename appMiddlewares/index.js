const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const {cookieSecret} = require('../config/keys');
const passport = require('passport');

module.exports = app => {
    app.use(bodyParser.json());

    app.use(cookieSession({
        maxAge: 60 * 60 * 24 * 30,
        keys: [cookieSecret]
    }))

    app.use(passport.initialize());
    app.use(passport.session());
}