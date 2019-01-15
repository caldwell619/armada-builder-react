import React from 'react';
import {upgradeCards} from '../../../../data/cards.js'


class ExperimentalRetrofit extends React.Component {
    render(){

let selectedUpgradeCards = [];
        upgradeCards.forEach(card => {
            if (card.set === "experimental-retrofit"){
                selectedUpgradeCards.push(card);
            }
        });
        return (
            <div>
                {selectedUpgradeCards.map((card) => {
                        return (
                            <div className="ship-card span-1-of-3" key={card.id}>
                                <img src={`/images/cards/upgrades/experimental-retrofit/${card.image}`} alt={card.title}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}


export default ExperimentalRetrofit;