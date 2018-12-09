import React from 'react';
import {cards} from '../../../data/cards.js'






class Upgrade extends React.Component {
    constructor(props){
        super();
    }

    addUpgradeHandler = (card) => {
        //determines which upgrade type to add - console.logging properly
        const upgradeType = this.props.match.params.type;

        //finding the index of targeted ship
        const shipIndex = this.props.shipInfo.findIndex(index => {
            //Router passes the id of the targeted ship, the compared against
            //returns true to the targeted ship, false for the ones not targeted
            //ID's generated with npm package uniqID - unique id for each instance in array
            return (index.id === this.props.match.params.id);
        });

        console.log(shipIndex); //evaluates properly to the target index position

        //mapping the state to a copy
        const newShips = [...this.props.shipInfo];

        //targeting the upgrades property inside of the correct index pos
        const upgrades = newShips[shipIndex].upgrades;

        console.log(upgrades); //returns only one index pos of the state with the upgrade equipped
        const currentPoints = this.props.points;
        //checking if adding the card will bust the max points allowed
        if (currentPoints + card.points < 400) {

            console.log(upgrades[upgradeType]); // returns one object, the value stored in the proper place
            /**
             * Issue starts here
             * - card -> represents object that the map below is, issue persists if object is explicitly written
             * assigns upgrade card object to the correct property type, but for every ship with the same name
             * The name of the ship is not being evaluated anywhere in this function
             **/
            //not intended
            upgrades[upgradeType] = card;
        }
        console.log(newShips);
        let counter = 0;
        newShips.forEach(ship => {
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                if (upgrade != null){
                    counter += upgrade.points;
                }
            });
        });

        this.props.upgrade(newShips, counter);
    };


    render (){
        const upgradeType = this.props.match.params.type;
        return (
            <div>
                {cards[upgradeType].map((card) => {
                    if (card.faction === "imperial" || !card.faction) {
                        if (card.points < 400 - this.props.points) {
                            const shipIndex = this.props.shipInfo.findIndex(index => {
                                return index.id === this.props.match.params.id
                            });
                            const newShips = [...this.props.shipInfo];
                            if (newShips[shipIndex] && newShips[shipIndex].type === card.ship || !card.ship){

                            return (
                                <div className="ship-card span-1-of-3" key={card.id}>
                                    <img src={`/images/cards/upgrades/${upgradeType}/imperial/${card.image}`} alt="img"
                                         onClick={this.addUpgradeHandler.bind(this, card)}/>
                                </div>
                            )
                            }
                        }
                    }
                })}
            </div>
        )
    }

}

export default Upgrade;