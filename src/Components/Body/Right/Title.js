import React from 'react';
import {cards} from '../../../data/cards.js'

class Title extends React.Component {
    constructor(props) {
        super();

    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        const upgrade = {
            name: card.title,
            points: card.points,
            imagePath: `/images/cards/upgrades/title/imperial/${card.image}`,
            type: card.set,
            id: card.id,
            ship: card.ship
        };
        // newShips[shipIndex].upgradeMap.set("title", upgrade);
        newShips[shipIndex].equippedUpgrades[9] = upgrade;
        this.props.upgrade(newShips);
        this.props.upgradePoints()
    };

    render() {
        return (
            <div>
                {cards.title.map((card) => {
                    if (card.faction === "imperial") {
                        // this.props.shipInfo.map(ship => {
                        const shipIndex = this.props.shipInfo.findIndex(index => {
                            return index.id === this.props.match.params.id
                        });
                        const newShips = [...this.props.shipInfo];
                        if (card.ship === "multi"){
                            console.log("yes");
                        }
                        if (newShips[shipIndex] && newShips[shipIndex].type === card.ship) {
                            // console.log(ship.type);
                            // console.log(card.ship);
                            if (card.points < 400 - this.props.points) {
                            return (
                                <div className="ship-card span-1-of-3" key={card.id}>
                                    <img src={`/images/cards/upgrades/title/imperial/${card.image}`} alt="img"
                                         onClick={this.addUpgradeHandler.bind(this, card)}/>
                                </div>
                            )
                            }
                        }
                    }
                })}
            </div>
        );
    }
}

export default Title;