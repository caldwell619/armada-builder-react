import React from 'react';
import {cards} from '../../../data/cards.js'

const assault = () => {
    return (
        <div className="cards-container">
            {cards.assault.map((s) => {
                return (
                    <div className="squad-card span-1-of-3">
                        <img key={s.id} src={"/images/cards/objectives/assault/" + s.image} alt="objective-assault-img"/>
                    </div>
                )
            })}
        </div>
    )
};

export default assault;