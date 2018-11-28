import React from 'react';
import {cards} from '../../../data/cards.js'

const display = ({faction}) => {
    return (
        <div>
            {cards.squadron.map((s) => {
                if (s.faction === faction) {
                    return (
                        <div className="ship-card span-1-of-3">
                            <img src={"/images/cards/squadron/" + faction + "/" + s.image} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default display;