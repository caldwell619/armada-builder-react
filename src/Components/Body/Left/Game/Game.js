import React from 'react';
import ShipSquad from './ShipSquad/ShipSquad'
import Objectives from './Objectives/Objectives'
import BottomButtons from './BottomButtons/BottomButtons'

const game = () => {
    return (
        <div>
            <ShipSquad/>
            <Objectives/>
            <BottomButtons/>
        </div>

    )
};

export default game;