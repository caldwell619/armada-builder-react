import React from 'react';
import {cards} from '../../../data/cards.js'






class Upgrade extends React.Component {
    constructor(props){
        super();
    }

    addUpgradeHandler = (card) => {
        const upgradeType = this.props.match.params.type;
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        console.log(newShips[shipIndex]);

        let upgrades = newShips[shipIndex].upgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            upgrades[upgradeType] = card;
        }
        let counter = 0;
        newShips.forEach(ship => {
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                console.log(upgrade);
                if (upgrade != null){
                    counter += upgrade.points;
                }
            });
        });

        this.props.upgrade(newShips, counter);
    };


    render (){
        console.log(this.props.match.params.type);
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