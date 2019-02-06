import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                "ships": this.props.shipInfo
            })
        }).then(res => {
            console.log(res)
        }).catch(message => {
            console.log(message)
        })
    };
    render(){
        return (
            <div className="action-bar">
                <button id="save-button" onClick={this.postShips}>Save</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps)(BottomButtons);