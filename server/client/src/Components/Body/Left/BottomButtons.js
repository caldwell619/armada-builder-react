import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/ActionButtons.css';

class BottomButtons extends Component{
    postShips = () => {
            fetch("/api/post", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "owner": this.props.auth.googleId,
                    "fleetName": this.props.fleetName,
                    "faction": this.props.faction,
                    "ships": this.props.shipInfo
                })
            }).catch(message => {
                console.log(message)
            })
        };

    render(){
        let button = null;
        if (this.props.fleetName !== ""){
            button = (
                <Link to={"/profile"} onClick={this.postShips}><button id="save-button" className="save-button">Save</button></Link>
            )
        } else {
            button = (
                <div className="save-button-global-cont">
                    <div className="save-text">
                        <p>Please name your fleet before saving</p>
                    </div>
                    <div className="save-button-cont">
                        <button id="disabled-save-button" className="save-button" disabled={true}>Save</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="button-action-bar">
                {button}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
        fleetName: state.fleetName,
        faction: state.faction
    }
};
export default connect(mapStateToProps)(BottomButtons);