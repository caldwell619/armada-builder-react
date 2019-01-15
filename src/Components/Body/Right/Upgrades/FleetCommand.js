import React from 'react';
import {upgradeCards} from '../../../../data/cards.js'


class FleetCommand extends React.Component {
    render(){

        let selectedUpgradeCards = [];
        upgradeCards.forEach(card => {
            if (card.set === "fleet-command"){
                selectedUpgradeCards.push(card);
            }
        });
        console.log("hello");
        return (
            <div>
                {selectedUpgradeCards.map((card) => {
                    return (
                        <div className="ship-card span-1-of-3" key={card.id}>
                            <img src={`/images/cards/upgrades/fleet-command/${card.image}`} alt={card.title}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default FleetCommand;