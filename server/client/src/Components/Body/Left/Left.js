import React from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'

const Left = (props) => {
    return (
        <div className="selector-container span-1-of-4">
            <FleetDisplay points={props.points} faction={props.faction} nameChange={props.nameChange} name={props.name}/>
            <Game commanderCards={props.commanderCards} faction={props.faction} shipInfo={props.shipInfo} delete={props.delete} toggle={props.toggle} upgradeDelete={props.upgradeDelete}/>
        </div>
    )
};

export default Left;