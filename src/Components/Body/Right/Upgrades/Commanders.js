import React from 'react';
import {cards} from "../../../../data/cards";


class Commander extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        const upgradeCards = [...this.props.upgradeCards];

        let upgradeType = card.set;
        let upgrades = newShips[shipIndex].upgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            upgrades.commander = card;
            if (card.title === "Darth Vader"){
                upgradeCards.forEach(upgrade => {
                    if (card.title === upgrade.title){
                        console.log("meeting criteria:");
                        console.log(upgrade);
                        upgrade.equipped = true;
                        upgrade.available = false;
                    }
                })
            }
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

        this.props.upgrade(newShips, counter, upgradeCards, upgradeType);
    };

    render() {
        return (
            <div>
                {this.props.upgradeCards.map(commander => {
                    if (commander.set === "commander") {
                        if (commander.faction === "imperial") {
                            if (commander.points < 400 - this.props.points) {
                                if (this.props.commanderChosen === false && commander.available === true){
                                    console.log(commander);
                                    return (
                                            <div className="ship-card span-1-of-3" key={commander.id}>
                                                <img src={`/images/cards/upgrades/commander/${commander.image}`} alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, commander)}/>
                                            </div>
                                        )
                                }
                            }
                        }
                    }
                })}
            </div>
        )
    }
}

export default Commander;