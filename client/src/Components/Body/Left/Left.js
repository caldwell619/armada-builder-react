import React, { Component } from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'
import '../../../css/Left.css';
import * as PropTypes from "prop-types";
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Left extends Component {
    state = {
        redirect: false
    };

    postShips = () => {
        const { auth, fleetName, faction, selectedShips } = this.props;
        axios.post("/api/post", {
            owner: auth.googleId,
            fleetName: fleetName,
            faction: faction,
            ships: selectedShips
        }).then(() => {
            this.setState({redirect: true})
        }).catch(error => {
            console.log(error)
        });
    };

    render(){
        return this.state.redirect ? <Redirect to="/profile"/> : (
            <div className={`selector-container span-1-of-4 desktop`}>
                <FleetDisplay {...this.props}/>
                <Game {...this.props} saveFleet={this.postShips}/>
            </div>
        )
    }
}

Left.propTypes = {
    auth: PropTypes.object,
    points: PropTypes.number,
    faction: PropTypes.string,
    nameChange: PropTypes.func,
    name: PropTypes.string,
    commanderCards: PropTypes.array,
    selectedShips: PropTypes.array,
    delete: PropTypes.func,
    toggle: PropTypes.func,
    upgradeDelete: PropTypes.func,
};

const mapStateToProps = state => ({
   auth: state.auth
});
export default connect(mapStateToProps)(Left);