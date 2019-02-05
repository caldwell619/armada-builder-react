const mongoose = require('mongoose');
const { Schema } = mongoose;

// template for all user instances
const fleetSchema = new Schema({
    owner: String,
    ships: []
});

//creates users collection if not exists
mongoose.model("fleets", fleetSchema);