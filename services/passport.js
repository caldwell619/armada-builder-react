const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//access the users collection the db
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {done(null, user)})
        .catch(message => console.log(message))
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
        .then(user => {
            if (user) {
                done(null, user);
            } else {
                new User({
                    googleId: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    displayName: profile.displayName
                }).save()
                    .then(newUser => done(null, newUser))
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
        .catch(error => console.log(error))
}));