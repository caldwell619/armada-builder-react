import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class AddSquadron extends Component {
    render(){
        let faction = this.props.faction;
        console.log(faction);
        return (
            <div className="add-squadron-container">
                <Link to={`/builder/${faction}/squadrons`}><button id="squad-button"><span>+</span> Add Squadron</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        faction: state.faction
    }
}
export default connect(mapStateToProps)(AddSquadron);