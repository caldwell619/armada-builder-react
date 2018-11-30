import React from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'

const left = (props) => {
    return (
        <div className="selector-container span-1-of-4">
            <FleetDisplay/>
            <Game click={props.click}/>
        </div>

    )
};

export default left;