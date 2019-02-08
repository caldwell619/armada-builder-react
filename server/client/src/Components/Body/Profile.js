import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import { Link, Redirect } from 'react-router-dom';
import '../css/Profile.css'

class Profile extends Component {

    fetchUser = () => {
        let name = '';
        if (this.props.user != null) {
            name = this.props.user.firstName;
        }
        switch (this.props.auth) {
            case null:
                return;
            default:
                return (
                    <div className="container">
                        <div className="jumbotron">
                            <h1>Hello, {name}</h1>
                        </div>
                    </div>

                )
        }
    };

    deleteShip = (fleet) => {
        fetch("/api/delete-fleet", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fleetId": fleet._id
            })
        });
        this.forceUpdate();
    };
    fetchFleets = () => {
        switch (this.props.ships) {
            case null:
                return;
            default:
                return (
                    <div className="row">
                        <h2>Your Saved Fleets:</h2>
                        {this.props.ships.map(fleet => {
                            return (
                                <div className="col span-1-of-3">
                                    <div className="ind-fleet" key={fleet.id}>
                                        <h4>{fleet.fleetName}</h4>
                                        <div className="content-container">
                                            <Link to={`/profile/edit/${fleet._id}`}><button>Show</button></Link>
                                            <button onClick={this.deleteShip.bind(this, fleet)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
        }
    };


    render() {
        this.props.fetchFleet();
        let buildPrompt = null;
        if (this.props.ships !== null && this.props.ships.length === 0){
            buildPrompt = (
                <div>
                    <h1>You don't have any saved ships!</h1>
                    <p>Go <Link to={"/"}>here</Link> to get started!</p>
                </div>
                )

        }
        return (
            <div className={"content-container"}>
                {this.fetchUser()}
                {buildPrompt}
                {this.fetchFleets()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth,
        ships: state.fleets
    }
};

export default connect(mapStateToProps, actions)(Profile);
