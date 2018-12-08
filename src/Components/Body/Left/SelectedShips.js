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
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(ship => {
                        return (
                            <div className="chosen-ship-container" key={ship.id}>
                                <div key={ship.id} className="chosen-ship">
                                    <div className="span-4-of-12 ship-img">
                                        <img src={ship.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}
                                         onClick={this.toggleHandler.bind(this, ship.id)}>{ship.name}</div>
                                    <div className="delete ion-trash-a" onClick={this.deleteShip.bind(this, ship)}/>
                                </div>
                                <div className="upgrade-bar" key={ship.id + "-upgradeBar"}>
                                    {ship.availableUpgrades.map(upgradeType => {
                                        if (ship.upgradesShown) {
                                            return (
                                                <Link to={`/ships/${ship.id}/upgrades/${upgradeType}`}
                                                      key={upgradeType}>
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
                                    {ship.upgradeTest.map(individualUpgrade => {
                                        const equippedUpgrade = individualUpgrade[1];
                                        if (equippedUpgrade != null){
                                            return (
                                                <div className="assigned-upgrade">
                                                    <div className="col span 4-of-12 upgrade-img-container">
                                                        <img src={equippedUpgrade.imagePath} alt="upgrade" className="gitupgrade-img"/>
                                                    </div>
                                                    <div className="col span 7-of-12 upgrade-name">
                                                        {equippedUpgrade.name}
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