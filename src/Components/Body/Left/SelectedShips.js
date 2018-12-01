import React from 'react';
import {cards} from '../../../data/cards.js'

const selectedShips = (props) => {
    return (
        <div className="selected-ships">
            <div className="cards-container">
                {props.shipInfo.map(s => {
                    return (
                        <div>
                            <div>{s.name}</div>
                            <div>{s.points}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
};

export default selectedShips;