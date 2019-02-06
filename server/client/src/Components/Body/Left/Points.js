import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Points extends Component {
    maxPointsHandler = (event) => {
        this.props.maxPoints(Number(event.target.value))
    }
    render(){
        let points = 400;
        if (this.props.maxPoints != null){
            points = this.props.maxPoints.maxPoints;
        }

        return (
            <div className="row big-points-container">
                <div className="points-container col span-1-of-2">
                    <div className="current-points">Current Points:</div>
                    <div className="points-display">{this.props.points}</div>
                </div>
                <div className="max-points col span-1-of-2">
                    <label htmlFor="fleet-total">Max Points:</label>
                    <input type="number" id="fleet-total" name="fleet-total" onChange={this.maxPointsHandler} value={points} placeholder="400"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        maxPoints: state.maxPoints
    }
}
export default connect(mapStateToProps, actions)(Points);
