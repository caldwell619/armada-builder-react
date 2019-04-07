import React from 'react';
import { connect } from 'react-redux';
import '../../../css/ActionButtons.css';
import * as PropTypes from "prop-types";

const BottomButtons = props => {

    let text = "";
    switch (props.auth) {
        case null:
            text = "";
            break;
        case false:
            text = (
                <p>Login or sign up to save fleets</p>
            );
            break;
        default:
            let button = null;
            props.fleetName !== "" ?
                button = (
                        <button id="save-button" className="save-button" onClick={props.saveFleet}>Save</button>
                ) :
                button = (
                    <div className="save-button-global-cont">
                        <div className="save-text">
                            <p>Please name your fleet before saving</p>
                        </div>
                        <div className="save-button-cont">
                            <button id="disabled-save-button" className="save-button" disabled={true}>Save</button>
                        </div>
                    </div>
                );
            text = button;
    }
    return (
        <div className="button-action-bar">
            {text}
        </div>
    );
};




const mapStateToProps = state => {
    return {
        auth: state.auth,
        fleetName: state.fleetName,
        faction: state.faction
    }
};

BottomButtons.propTypes = {
    saveFleet: PropTypes.func,
    auth: PropTypes.object,
    fleetName: PropTypes.string,
    faction: PropTypes.any,
};

export default connect(mapStateToProps)(BottomButtons);