import React from 'react';
import PropTypes from 'prop-types'
import FleetDisplay from './FleetDisplay';
import Game from './Game'

const Left = (props) => {
    return (
        <div className="selector-container span-1-of-4">
            <FleetDisplay points={props.points} faction={props.faction} nameChange={props.nameChange}/>
            <Game commanderCards={props.commanderCards} faction={props.faction} shipInfo={props.shipInfo} delete={props.delete} toggle={props.toggle} upgradeDelete={props.upgradeDelete}/>
        </div>
    )
};

export default Left;