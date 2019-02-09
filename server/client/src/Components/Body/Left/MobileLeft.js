import React, { Component } from 'react';
import FleetDisplay from './FleetDisplay';
import Game from './Game'
import '../../css/Left.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import '../../css/Header.css';

class MobileLeft extends Component{
    render(){
        let style = "";
        let menuIcon = "ion-navicon-round";
        if (this.props.leftMenu){
            style = "menu-show-mobile";
            menuIcon = "ion-close-round";
        } else {
            style = ""
        }

        return (
            <React.Fragment>
                <div className={"mobile-selector"}>
                    <div className={`toggle-selector-main mobile`} onClick={this.props.hideMenu}>
                        <span className={menuIcon}/>
                    </div>
                    <div className={`mobile-selector-container ${style} span-1-of-4 mobile`}>
                        <FleetDisplay points={this.props.points} faction={this.props.faction} nameChange={this.props.nameChange} name={this.props.name}/>
                        <Game commanderCards={this.props.commanderCards} faction={this.props.faction} shipInfo={this.props.shipInfo} delete={this.props.delete} toggle={this.props.toggle} upgradeDelete={this.props.upgradeDelete}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuShown: state.menuShown,
        leftMenu: state.leftMenu
    }
};
export default connect(mapStateToProps, actions)(MobileLeft);