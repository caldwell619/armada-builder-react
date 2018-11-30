import React from 'react';
import ShipSquad from './ShipSquad'
import Objectives from './Objectives'
import BottomButtons from './BottomButtons'
import SelectedShips from './SelectedShips'

const game = (props) => {
    return (
        <div>
            <SelectedShips click={props.click} shipInfo={props.shipInfo}/>
            <ShipSquad/>
            <Objectives/>
            <BottomButtons/>
        </div>

    )
};

export default game;