import React from 'react';
import {upgradeCards} from '../../../../data/cards.js'

class OffensiveRetroFit extends React.Component {
    render(){
        let offensiveCards = [];
        upgradeCards.forEach(card => {
            if (card.set === "offensive-retrofit"){
                if (!card.faction || card.faction === "imperial"){
                    offensiveCards.push(card);
                }
            }
        });
        return (
            <div>
                {offensiveCards.map((card) => {
                        return (
                            <div className="ship-card span-1-of-3" key={card.id}>
                                <img src={`/images/cards/upgrades/offensive-retrofit/${card.image}`} alt={card.title}/>
                            </div>
                        )
                })}
            </div>
        )
    }
};

export default OffensiveRetroFit;