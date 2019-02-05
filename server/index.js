const express = require('express');
const app = express();
require('./models/User');
require('./models/Fleet');
require('./services/passport');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const mongoose = require('mongoose');

//connecting to the db
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .catch(message => console.log(message));

// setting up cookies - 30 days
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

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