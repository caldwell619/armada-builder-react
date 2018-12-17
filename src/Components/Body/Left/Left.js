import React from 'react';
import PropTypes from 'prop-types'
import FleetDisplay from './FleetDisplay';
import Game from './Game'

const left = (props) => {
    return (
        <div className="selector-container span-1-of-4">
            <FleetDisplay points={props.points}/>
            <Game commanderCards={props.commanderCards} shipInfo={props.shipInfo} delete={props.delete} toggle={props.toggle} upgradeDelete={props.upgradeDelete}/>
        </div>

    )
};

left.propTypes = {
    points: PropTypes.number,
    click: PropTypes.func,
    shipInfo: PropTypes.array
};
export default left;