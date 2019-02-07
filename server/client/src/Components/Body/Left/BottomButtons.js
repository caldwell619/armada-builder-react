import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Left from "./Left";

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
                <Link to={"/profile"} onClick={this.postShips}><button id="save-button" >Save</button></Link>
            )
        } else {
            button = (
                <div>
                    <p>Please name your fleet before saving</p>
                    <button id="save-button" >Save</button>
                </div>
            )
        }
        return (
            <div className="action-bar">
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