import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
import '../../css/Header.css';

class Right extends Component {

    toggleMenu = () => {
        this.props.menuDisplay();
        console.log("happened");
    };

    render() {

        let rotate = "";
        if (this.props.menuShown){
            rotate = "rotate";
        }
        return (
                <div className={"col span-1-of-2 menu-holder"}>
                    <div className="icon" onClick={this.toggleMenu}><i className={`ion-chevron-down ${rotate}`}/></div>
                </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ...state
    }
};

export default connect(mapStateToProps, actions)(Right);