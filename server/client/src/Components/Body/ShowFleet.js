import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Link } from 'react-router-dom';
import '../css/Profile.css';

class ShowFleet extends Component {

    componentDidMount() {
        this.props.fetchFleet();
    }

    render(){
        let selectedFleet = [];
        console.log(this.props.match.params.fleetId);

        // use filter here in refactor
        let propFleet = this.props.ships;
        let targetIndex = null;
        let targetFleet = null;
        if (propFleet !== null) {
             targetIndex = propFleet.findIndex(indFleet => {
                return indFleet._id === this.props.match.params.fleetId;
            });
             targetFleet = propFleet[targetIndex]
        }
        if (targetFleet !== null){
            console.log(targetFleet);
            return (
                <div className="content-container">
                    <Link to="/profile"><div className="row">Back</div></Link>
                    <div className="row fleet-name-display">
                        <h1>{targetFleet.fleetName}</h1>
                    </div>
                    <div className="row fleet-info-display">
                        {targetFleet.ships.map(ship => {
                            return (
                                <section className="display-ship row">
                                    <div className="col span-1-of-4 ship-col">
                                        <div>
                                            <h3>Ship:</h3>
                                            <div className='display-ship-name'>{ship.name}</div>
                                        </div>
                                    </div>
                                    <div className="col span-3-of-4 upgrade-col">
                                        <div>
                                        <h3>Upgrades:</h3>
                                        {Object.values(ship.upgrades).map(upgrade => {
                                            if (upgrade !== null){
                                                return (
                                                    <div className="display-upgrade">{upgrade.title}</div>
                                                )
                                            }
                                        })}
                                        </div>
                                    </div>
                                    <Link to={`profile/show/${targetFleet._id}/edit`}><button>Edit</button></Link>
                                </section>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        ships: state.fleets
    }
};
export default connect(mapStateToProps, actions)(ShowFleet);