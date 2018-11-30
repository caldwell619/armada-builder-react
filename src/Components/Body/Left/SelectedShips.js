import React from 'react';
import {cards} from '../../../data/cards.js'

const selectedShips = (props) => {
    let shipDiv = null;
    if (props.click) {
        shipDiv = (
            <div className="cards-container">
                {props.shipInfo.map(s => {
                    return (
                        <div>{s.name}</div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="selected-ships">
            {shipDiv}
        </div>
    )
};

export default selectedShips;