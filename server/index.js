const express = require('express');
const app = express();
require('./models/User');
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .catch(message => console.log(message));


app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

//set up cookies
app.use(passport.initialize());
app.use(passport.session());






//calling the function to handle routing
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Hacking the mainframe...");
    setTimeout(()=>{
        console.log("I need to capture the Avatar!")
    }, 2000)
});