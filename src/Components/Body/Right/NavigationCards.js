import React from 'react';
import {cards} from '../../../data/cards.js'

const navigation = () => {
    return (
        <div className="cards-container">
            {cards.navigation.map((s) => {
                return (
                    <div className="ship-card span-1-of-3">
                        <img key={s.id} src={"/images/cards/objectives/navigation/" + s.image} alt="objective-assault-img"/>
                    </div>
                )
            })}
        </div>
    )
};

export default navigation;