import React from 'react';
import {cards} from '../../../data/cards.js'

const defense = () => {
    return (
        <div className="cards-container">
            {cards.defense.map((s) => {
                return (
                    <div className="ship-card span-1-of-3">
                        <img key={s.id} src={"/images/cards/objectives/defense/" + s.image} alt="objective-assault-img"/>
                    </div>
                )
            })}
        </div>
    )
};

export default defense;