import React from 'react';
import {cards} from '../../../data/cards.js'

const title = () => {
    return (
        <div>
            {cards.title.map((card) => {
                if (card.faction === "imperial"){
                    return (
                        <div className="squad-card span-1-of-3" key={card.id}>
                            <img src={`/images/cards/upgrades/title/imperial/${card.image}`} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default title;