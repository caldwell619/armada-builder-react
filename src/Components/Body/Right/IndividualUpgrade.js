import React from 'react';
import {cards} from '../../../data/cards.js'


class Upgrade extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        //finding the index of targeted ship
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });

        const newShips = [...this.props.shipInfo];

        const upgrades = newShips[shipIndex].upgrades;

        const currentPoints = this.props.points;

        if (currentPoints + card.points < 400) {
            upgrades.commander = card;
        }

        let counter = 0;
        newShips.forEach(ship => {
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                if (upgrade != null) {
                    counter += upgrade.points;
                }
            });
        });

        this.props.upgrade(newShips, counter);
    };


    render() {
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
                            if (card.ship) {
                                return card.ship.map(upgradeAvailability => {
                                    if (newShips[shipIndex] && newShips[shipIndex].type === upgradeAvailability) {
                                        console.log(card); // returns all cards I'm looking for
                                        // does not render anything
                                        return (
                                            <div className="ship-card span-1-of-3" key={card.id}>
                                                <img src={`/images/cards/upgrades/${upgradeType}/${card.image}`}
                                                     alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, card)}/>
                                            </div>
                                        )
                                    }
                                })
                            } else if (card.dual){
                                if (newShips[shipIndex]){
                                    if (newShips[shipIndex].upgrades["weapons-team"] && newShips[shipIndex].upgrades["offensive-retrofit"]){
                                        return (
                                            <div className="ship-card span-1-of-3" key={card.id}>
                                                <img src={`/images/cards/upgrades/${upgradeType}/${card.image}`}
                                                     alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, card)}/>
                                            </div>
                                        )
                                    }
                                }
                            } else if (!card.dual) {
                                return (
                                    <div className="ship-card span-1-of-3" key={card.id}>
                                        <img src={`/images/cards/upgrades/${upgradeType}/${card.image}`}
                                             alt="img"
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