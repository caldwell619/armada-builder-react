import React from 'react';
import {cards} from '../../../data/cards.js'

const ships = ({faction}) => {

    //accessing the title of the clicked on ship
    const funcTest = (s) => {
        console.log(s.title);
        console.log(s.points);
        };



    return (
        <div className="cards-container">
            {cards.ship.map(s => {
                if (s.faction === faction) {
                    return (
                        <div className="ship-card span-1-of-3" onClick={funcTest.bind(this, s)}>
                            <img key={s.id} src={"/images/cards/ship/" + faction + "/" + s.image} alt="img"/>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default ships;
