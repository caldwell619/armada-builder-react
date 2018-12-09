import React from 'react';
import {Link} from "react-router-dom";

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }

    deleteShip = (s) => {
        this.props.delete(s.id);
    };

    toggleHandler = (id) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === id
        });
        const newShips = [...this.props.shipInfo];
        newShips[shipIndex].upgradesShown = !newShips[shipIndex].upgradesShown;
        this.props.toggle(newShips);
    };

    render() {
        console.log(this.props.shipInfo);
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(ship => {
                        return (
                            <div className="chosen-ship-container">
                                <div key={ship.id} className="chosen-ship">
                                    <div className="span-4-of-12 ship-img">
                                        <img src={ship.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}
                                         onClick={this.toggleHandler.bind(this, ship.id)}>{ship.name}</div>
                                    <div className="delete ion-trash-a" onClick={this.deleteShip.bind(this, ship)}/>
                                </div>
                                <div className="upgrade-bar" key={ship.id + "-upgradeBar"}>
                                    {Object.keys(ship.upgrades).map(upgradeType => {
                                        if (ship.upgradesShown) {
                                            return (
                                                <Link to={`/ships/${ship.id}/upgrades/${upgradeType}`}>
                                                    <button>
                                                        <img src={"/images/icons/" + upgradeType + ".png"}
                                                             alt="upgrade icon"/>
                                                    </button>
                                                </Link>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="equipped-upgrades">
                                    {Object.values(ship.upgrades).map(upgrade => {
                                        if (upgrade != null){
                                            return (
                                                <div className="assigned-upgrade">
                                                    <div className="col span 4-of-12 upgrade-img-container">
                                                        <img src={`/images/cards/upgrades/commander/imperial/${upgrade.image}`} alt="upgrade" className="upgrade-img"/>
                                                    </div>
                                                    <div className="col span 7-of-12 upgrade-name">
                                                        {upgrade.title}
                                                    </div>
                                                    <div className="delete-upgrade ion-trash-a"/>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }


};

export default selectedShips;