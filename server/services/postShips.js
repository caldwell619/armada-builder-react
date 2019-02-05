const mongoose = require('mongoose');
const Fleet = mongoose.model('fleets');

module.exports=  {
    postShips: (payload) => {
        Fleet.findOne()
            .then(() => {
                new Fleet({
                    owner: payload.owner,
                    ships: payload.ships
                }).save().catch(message => console.log(message))
            })
        },
    findShips: (payload) => {
        Fleet.findOne({owner: payload}).then(result => console.log(result))
            .catch(error => {console.log(error)});
    }
};