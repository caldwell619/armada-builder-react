import React from 'react';
import {cards} from '../../../data/cards.js'




class Commander extends React.Component {
    constructor(props){
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
                imagePath: `/images/cards/upgrades/commander/imperial/${card.image}`,
                type: card.set,
                id: card.id
            };
            newShips[shipIndex].upgradeMap.set("commander", upgrade);
            individualShipUpgrades[0] = upgrade;
        }

        this.props.upgradePoints();
        this.props.upgrade(newShips);
    };


    render (){
        return (
            <div>
                {cards.commander.map((card) => {
                    if (card.faction === "imperial") {
                        if (card.points < 400 - this.props.points){
                            return (
                                <div className="ship-card span-1-of-3" key={card.id}>
                                    <img src={"/images/cards/upgrades/commander/imperial/" + card.image} alt="img"
                                         onClick={this.addUpgradeHandler.bind(this, card)}/>
                                </div>
                            )
                        }
                    }
                })}
            </div>
        )
    }

}

export default Commander;