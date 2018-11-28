import React from 'react';
import AddShip from './AddShip/AddShip';
import AddSquadron from './AddSquadron/AddSquadron';

const shipSquad = () => {
    return (
        <div className="button-container">
            <AddShip/>
            <AddSquadron/>
        </div>
    )
};

export default shipSquad;