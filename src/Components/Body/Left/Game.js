import React from 'react';
import ShipSquad from './ShipSquad'
import Objectives from './Objectives'
import BottomButtons from './BottomButtons'
import SelectedShips from './SelectedShips'

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