import React, { Component } from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'
import '../../css/Left.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import '../../css/Header.css';

class Left extends Component{

    render(){
        let style = null;
        if (this.props.menuShown){
            style = "menu-shown"
        } else {
            style = null;
        }

        return (
            <div className={`selector-container ${style} span-1-of-4`}>
                <FleetDisplay points={this.props.points} faction={this.props.faction} nameChange={this.props.nameChange} name={this.props.name}/>
                <Game commanderCards={this.props.commanderCards} faction={this.props.faction} shipInfo={this.props.shipInfo} delete={this.props.delete} toggle={this.props.toggle} upgradeDelete={this.props.upgradeDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(Left);