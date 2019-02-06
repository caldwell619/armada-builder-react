import React from 'react';
import ShipSquad from './ShipSquad';
import Objectives from './Objectives';
import BottomButtons from './BottomButtons';
import SelectedShips from './SelectedShips';

const game = (props) => {
    return (
        <div className="functionality-buttons">
            <SelectedShips commanderCards={props.commanderCards} upgradeDelete={props.upgradeDelete} shipInfo={props.shipInfo} faction={props.faction} delete={props.delete} toggle={props.toggle}/>
            <ShipSquad/>
            <Objectives/>
            <BottomButtons shipInfo={props.shipInfo}/>
        </div>
    )
};

export default game;