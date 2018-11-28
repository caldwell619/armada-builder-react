import React from 'react';
import ShipSquad from './ShipSquad/ShipSquad'
import Objectives from './Objectives/Objectives'
import BottomButtons from './BottomButtons/BottomButtons'
import SelectedShips from './SelectedShips/SelectedShips'

const game = () => {
    return (
        <div>
            <SelectedShips/>
            <ShipSquad/>
            <Objectives/>
            <BottomButtons/>
        </div>

    )
};

export default game;