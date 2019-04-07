import React from 'react';
import BottomButtons from './BottomButtons';
import SelectedShips from './SelectedShips';
import AddPiece from "./AddPiece";
import * as PropTypes from "prop-types";

const Game = props => (
    <div className="functionality-buttons">
        <SelectedShips {...props}/>
        <AddPiece/>
        <BottomButtons saveFleet={props.saveFleet}/>
    </div>
);

Game.propTypes = {
    saveFleet: PropTypes.func,
};


export default Game;