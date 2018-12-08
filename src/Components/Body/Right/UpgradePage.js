import React from 'react';
import {cards} from '../../../data/cards.js'

window.test = null;

class UpgradePage extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];

        let individualShipUpgrades = newShips[shipIndex].equippedUpgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            const upgrade = {
                name: card.title,
                points: card.points,
                imagePath: `/images/cards/upgrades/${this.props.match.params.type}/imperial/${card.image}`,
                type: card.set,
                id: card.id
            };
            newShips[shipIndex].upgradeMap.set(this.props.match.params.type, upgrade);
            individualShipUpgrades[0] = upgrade;
        }

        this.props.upgradePoints();
        this.props.upgrade(newShips);
    };


    render() {
        const type = this.props.match.params.type;
        return (
            <div>
                {cards[type].map((card) => {
                    if (card.faction === "imperial" || !card.faction) {
                        if (card.points < 400 - this.props.points) {
                            //checking to see if it is a title card
                            if (card.ship) {
                                //targeting the individual ship
                                const shipIndex = this.props.shipInfo.findIndex(index => {
                                    return index.id === this.props.match.params.id
                                });
                                const newShips = [...this.props.shipInfo];
                                //if there is a type AND that is the same value as the ship being compared against
                                //need to change them to arrays
                                if (newShips[shipIndex] && newShips[shipIndex].type === card.ship) {
                                    //return divs matching the set of ships
                                    return (
                                        <div className="ship-card span-1-of-3" key={card.id}>
                                            <img
                                                src={`/images/cards/upgrades/${this.props.match.params.type}/imperial/${card.image}`}
                                                alt="upgrade-card"
                                                onClick={this.addUpgradeHandler.bind(this, card)}/>
                                        </div>
                                    )
                                }
                            }
                            //if its not a title card, do the normal behavior
                            else {
                                return (
                                    <div className="ship-card span-1-of-3" key={card.id}>
                                        <img
                                            src={`/images/cards/upgrades/${this.props.match.params.type}/imperial/${card.image}`}
                                            alt="upgrade-card"
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

export default UpgradePage;