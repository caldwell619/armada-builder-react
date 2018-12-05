import React from 'react';
import {cards} from '../../../data/cards.js'

const commander = () => {
    console.log(cards)
    return (
        <div>
            {cards.commander.map((card) => {
                if (card.faction === "imperial"){
                    return (
                        <div className="ship-card span-1-of-3" key={card.id}>
                            <img src={"/images/cards/upgrades/commander/imperial/" + card.image} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default commander;