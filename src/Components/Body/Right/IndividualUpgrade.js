import React from 'react';


const Upgrade = (props) => {
    return (
        <div className="ship-card span-1-of-3" key={props.card.id}>
            <img src={`/images/cards/upgrades/weapons-team/${props.card.image}`} alt="img"/>
        </div>

    )
};

export default Upgrade;