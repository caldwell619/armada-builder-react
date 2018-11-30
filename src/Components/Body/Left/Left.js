import React from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'

const left = () => {
    return (
        <div className="selector-container span-1-of-4">
            <FleetDisplay/>
            <Game/>
        </div>

    )
};

export default left;