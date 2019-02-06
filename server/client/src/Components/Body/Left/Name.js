import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { UPDATE_NAME } from "../../../store/actions/types";

class Name extends Component {
    inputValueHandler = (event) => {
        this.props.updateName(event.target.value);
    };


    render() {
        let name = '';
        if (this.props.fleetName != null){
            name = this.props.fleetName.fleetName;
        }
        console.log(this.props.fleetName);
        return (
            <div className="row logo-container">
                <div className="row img-container">
                    <img src={`/images/home-page/${this.props.faction}-logo.png`} alt="logo"/>
                </div>
                <input type="text" name="fleet-name" onChange={this.inputValueHandler} value={name} placeholder="Name your Fleet" id="fleet-name"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fleetName: state.fleetName
    }
};
export default connect(mapStateToProps, actions)(Name);