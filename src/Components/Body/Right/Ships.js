import React from 'react';
import {cards} from '../../../data/cards.js'


const ship = (props) => {
    return (
        <div className="cards-container">
            {cards.ship.map(s => {
                if (s.faction === "imperial") {
                    return (
                        <div className="ship-card span-1-of-3" onClick={props.click}>
                            <img key={s.id} src={"/images/cards/ship/imperial/" + s.image} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default ship;
