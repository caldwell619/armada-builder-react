import React from 'react';
import AddShip from './AddShip';
import AddSquadron from './AddSquadron';

const shipSquad = () => {

    return (
        <div className="button-container">
            <AddShip/>
            <AddSquadron/>
        </div>
    )
};

export default shipSquad;