import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import * as PropTypes from "prop-types";

const Name = ({chosenFaction, updateName, fleetName}) => (
    <div className="row logo-container">
        <div className="row img-container">
            <img src={`/images/home-page/${chosenFaction}-logo.png`} alt="logo"/>
        </div>
        <div className="name-cont">
            <input type="text" name="fleet-name" onChange={event => updateName(event.target.value)} value={fleetName} placeholder="Name your Fleet" id="fleet-name"/>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        fleetName: state.fleetName,
        chosenFaction: state.faction
    }
};

Name.propTypes = {
    fleetName: PropTypes.string,
    chosenFaction: PropTypes.any,
    updateName: PropTypes.func,
};

export default connect(mapStateToProps, actions)(Name);