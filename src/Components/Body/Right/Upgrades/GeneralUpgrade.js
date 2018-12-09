import React from 'react';
import {cards} from '../../../../data/cards.js'





class GeneralUpgrade extends React.Component {
    constructor(props){
        super();
    }

    addUpgradeHandler = (card) => {
        const type = this.props.match.params.type;

        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];

        let individualShipUpgrades = newShips[shipIndex].equippedUpgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            individualShipUpgrades[0] = {
                name: card.title,
                points: card.points,
                imagePath: `/images/cards/upgrades/${type}/imperial/${card.image}`,
                type: card.set,
                id: card.id
            }
        }

        this.props.upgradePoints();
        this.props.upgrade(newShips);
    };


    render (){
        const type = this.props.match.params.type;
        return (
            <div>
                {cards[type].map((card) => {
                    if (card.faction === "imperial" || !card.faction) {
                        const shipIndex = this.props.shipInfo.findIndex(index => {
                            return index.id === this.props.match.params.id
                        });
                        const newShips = [...this.props.shipInfo];

                        if (newShips[shipIndex] && newShips[shipIndex].type === card.ship || !card.ship) {
                            // console.log(ship.type);
                            // console.log(card.ship);

                            if (card.points < 400 - this.props.points) {
                                return (
                                    <div className="ship-card span-1-of-3" key={card.id}>
                                        <img src={`/images/cards/upgrades/${type}/imperial/${card.image}`} alt="img"
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

export default GeneralUpgrade;