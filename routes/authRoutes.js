const passport = require('passport');
const mongoose = require('mongoose');
const Fleet = mongoose.model('fleets');
const shipActions = require('../services/shipActions');

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = (app) => {
    app.use(bodyParser.json());

    app.get("/auth/google", passport.authenticate("google", {
        scope: ['email', 'profile']
    }));

    app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
        res.redirect("/")
    });

    app.get("/api/user", (req, res) => {
        res.send(req.user)
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/")
    });
    app.post("/api/post", urlencodedParser, (req, res) => {
        shipActions.postShips(req.body);
        res.send("done");
    });
    app.get("/api/fleets", (req, res) => {
        // find returns all -- findOne returns one
        Fleet.find({owner: req.user.googleId}).then(result => res.send(result))
            .catch(error => {
                console.log(error);
                res.send("error");
            });
    });
    app.delete("/api/delete-fleet", (req, res) => {
        shipActions.deleteFleet(req.body.fleetId);
        res.send("done");
    })
};
