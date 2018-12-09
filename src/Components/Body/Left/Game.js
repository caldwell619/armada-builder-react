import React from 'react';
import PropTypes from 'prop-types';
import ShipSquad from './ShipSquad';
import Objectives from './Objectives';
import BottomButtons from './BottomButtons';
import SelectedShips from './SelectedShips';

const game = (props) => {
    return (
        <div className="functionality-buttons">
            <SelectedShips shipInfo={props.shipInfo} delete ={props.delete} toggle={props.toggle}/>
            <ShipSquad/>
            <Objectives/>
            <BottomButtons/>
        </div>
    )
};

game.propTypes = {
    click: PropTypes.func,
    shipInfo: PropTypes.array
}
export default game;