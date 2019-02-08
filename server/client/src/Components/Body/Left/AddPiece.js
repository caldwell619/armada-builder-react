import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../css/ActionButtons.css';


class AddPiece extends Component {
    constructor(){
        super();
        this.state = {
            showShips: false,
            showObj: false
        }
    }
    toggleShip = () => {
        this.setState({
            showShips: !this.state.showShips
        })
    };
    toggleObj = () => {
        this.setState({
            showObj: !this.state.showObj
        })
    };
    render() {
        let faction = this.props.faction;
        let shipShow = "";
        let objShow = "";
        let shipRotate = "";
        let objRotate = "";
        if (this.state.showShips){
            shipShow = "ship-show";
            shipRotate = "rotate";
        }
        if (this.state.showObj){
            objShow = "obj-show";
            objRotate = "rotate";
        }
        return (
            <React.Fragment>
                <div className="button-container">
                    <div className="ship-squad-add row">
                        <div className="drop-down-ship">
                            <div onClick={this.toggleShip}>Ships / Squadrons <span id={"ship-drop-down-chev"} className={`ion-chevron-down ${shipRotate}`}/>
                            </div>
                        </div>
                        <div className={`ship-squad-cont ${shipShow}`}>
                            <div className="add-piece-container col">
                                <Link to={`/builder/${faction}/ships`}>
                                    <button className="action-button">Add Ship</button>
                                </Link>
                            </div>
                            <div className="add-piece-container col">
                                <Link to={`/builder/${faction}/squadrons`}>
                                    <button className="action-button">Add Squadron</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="global-obj-cont">
                    <div className="drop-down-obj">
                        <div onClick={this.toggleObj}>Objectives <span id={"obj-drop-down-chev"} className={`ion-chevron-down ${objRotate}`}/></div>
                    </div>
                    <div className={`objective-selector-container ${objShow}`}>
                        <div className="add-piece-container col">
                            <Link to={`/builder/${faction}/objectives/assault`}>
                                <button className="action-button">Add Assault</button>
                            </Link>
                        </div>
                        <div className="add-piece-container col">
                            <Link to={`/builder/${faction}/objectives/navigation`}>
                                <button className="action-button">Add Navigation</button>
                            </Link>
                        </div>
                        <div className="add-piece-container col">
                            <Link to={`/builder/${faction}/objectives/defense`}>
                                <button className="action-button">Add Defense</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        faction: state.faction
    }
};
export default connect(mapStateToProps)(AddPiece);