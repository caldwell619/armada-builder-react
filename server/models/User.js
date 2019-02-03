const mongoose = require('mongoose');
const { Schema } = mongoose;

// template for all user instances
const userSchema = new Schema({
    googleId: String
});

//creates users collection if not exists
mongoose.model("users", userSchema);