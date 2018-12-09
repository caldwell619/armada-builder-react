import React from 'react';
import {cards} from '../../../../data/cards.js'






class Commander extends React.Component {
    constructor(props){
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        console.log(newShips[shipIndex]);

        let upgrades = newShips[shipIndex].upgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            upgrades.commander = card;
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