import React from 'react';
import {cards} from '../../../data/cards.js'

const display = ({faction}) => {
    return (
        <div>
            {cards.squadron.map((s) => {
                if (s.faction === "imperial") {
                    return (
                        <div className="squad-card span-1-of-3">
                            <img src={"/images/cards/squadron/imperial/" + s.image} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default display;