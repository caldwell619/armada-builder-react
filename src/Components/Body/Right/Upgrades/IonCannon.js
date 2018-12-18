import React from 'react';
import {cards} from '../../../../data/cards.js'



class ionCannon extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        //finding the index of targeted ship
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });
        const newShips = [...this.props.shipInfo];

        const currentPoints = this.props.points;

        let upgradeCards = [...this.props.upgradeCards];


        if (currentPoints + card.points < 400) {
            // newShips[shipIndex].upgrades[""]
            let counter = 0;
            newShips.forEach(ship => {
                counter += ship.points;
                Object.values(ship.upgrades).forEach(upgrade => {
                    if (upgrade != null) {
                        counter += upgrade.points;
                    }
                });
            });
            //sending back the new values
            this.props.upgrade(newShips, counter, upgradeCards);
        }
    };

    render(){
        return (
            <div>
                {cards["ion-cannon"].map(card => {
                    return (
                        <div className="ship-card span-1-of-3" key={card.id}>
                            <img src={"/images/cards/upgrades/ion-cannons" + card.image} alt="img"/>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default ionCannon;