import React from 'react';
import {cards} from '../../../data/cards.js'

const turbolasers = () => {
    return (
        <div>
            {cards.turbolasers.map((card) => {
                return (
                    <div className="ship-card span-1-of-3" key={card.id}>
                        <img src={`/images/cards/upgrades/turbolasers/${card.image}.png`} alt="img"/>
                    </div>
                )
            })}
        </div>
    )
};

export default turbolasers;