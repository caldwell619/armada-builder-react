import React from 'react';

// import {cards.js} from '../../../../data/cards.js.js'

class Upgrade extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (givenCard) => {

        //defining which ship to grab
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });
        const newShips = [...this.props.shipInfo];
        const upgrades = newShips[shipIndex].upgrades;
        const currentPoints = this.props.points;
        const stateGivenCards = [...this.props.upgradeCards];
        //equipping card
        upgrades.title = givenCard;

        //building array to map over and change equipped status

        //creates array of upgrade cards
        let equippedUpgrades = [];
        newShips.forEach(ship => {
            Object.values(ship.upgrades).forEach(upgrade => {
                if (upgrade) {
                    equippedUpgrades.push(upgrade);
                }
            });
        });

        let titleUpgrades = [];
        equippedUpgrades.forEach(upgrade => {
            if (upgrade.set === "title" && upgrade.unique === true) {
                    titleUpgrades.push(upgrade);
            }
        });

        //not working
        stateGivenCards.forEach(card => {
                titleUpgrades.forEach(equippedCard => {
                    if (equippedCard.title === card.title) {
                        card.equipped = true;
                    }
                    //sets false on cards that are being console logged in the above true condition
                    else {
                        card.equipped = false;
                    }
                })
        });

//adding up the points every time a ship is added
        let counter = 0;
        newShips.forEach(ship => {
                counter += ship.points;
                Object.values(ship.upgrades).forEach(upgrade => {
                    if (upgrade != null) {
                        counter+= upgrade.points;
                    }
                });
            });
        this.props.upgrade(newShips, counter, stateGivenCards);
    };

    render() {

        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        const targetShip = newShips[shipIndex];

        const titleCards = [];
        //building array to map over
        this.props.upgradeCards.forEach(card => {
            if (card.set === "title" && card.points < 400 - this.props.points) {
                card.ship.forEach(typeShipAccepted => {
                    if (targetShip && targetShip.type === typeShipAccepted && card.equipped === false) {
                        titleCards.push(card);
                    }
                })
            }
        });

        return (
            <div>
                {titleCards.map(card => {
                    return (
                        <div className="ship-card span-1-of-3" key={card.id}>
                            <img src={`/images/cards/upgrades/title/${card.image}`}
                                 alt={card.title}
                                 onClick={this.addUpgradeHandler.bind(this, card)}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Upgrade;