import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import '../css/Profile.css'

class Profile extends Component {
    componentDidMount() {
        this.props.fetchFleet();
    }

    user = () => {
        let name = '';
        if (this.props.user != null) {
            name = this.props.user.firstName;
        }
        switch (this.props.auth) {
            case null:
                return;
            default:
                return (
                    <h1>Hello, {name}</h1>
                    // you are logged in here
                )
        }
    };
    fleets = () => {
        switch (this.props.ships) {
            case null:
                return;
            default:
                return (
                    <div>
                        {this.props.ships.map(fleet => {
                            // add fleet name to db schema
                            return (
                                <div className="ind-fleet" key={fleet.id}>
                                    Fleets!
                                </div>
                            )
                        })}
                    </div>
                )
        }
    };

    render() {
        return (
            <div>
                {this.user()}
                {this.fleets()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.auth,
        ships: state.fleets
    }
};

export default connect(mapStateToProps, actions)(Profile);
