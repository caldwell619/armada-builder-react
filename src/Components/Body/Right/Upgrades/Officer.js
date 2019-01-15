import React from 'react';
import {upgradeCards} from '../../../../data/cards.js'

class Officer extends React.Component {
    render(){
        let officerCards = [];
        upgradeCards.forEach(card => {
            if (card.set === "officer"){
                if (!card.faction || card.faction === "imperial"){
                    officerCards.push(card);
                    console.log(officerCards);
                }
            }
        });
        return (
            <div>
                {officerCards.map((card) => {
                        return (
                            <div className="ship-card span-1-of-3" key={card.id}>
                                <img src={`/images/cards/upgrades/officer/${card.image}`} alt={card.title}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}

export default Officer;