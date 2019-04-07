import React from 'react';
import PropTypes from 'prop-types';
import UpgradeIcon from "./UpgradeIcon";
import SelectedUpgrade from "./SelectedUpgrade";

const ChosenShip = ({ ship, toggleHandler, deleteShip, deleteUpgrade, faction}) => {
    return (
        <div className="chosen-ship-container">
            <div key={ship.id} className="chosen-ship">
                <div className="span-4-of-12 ship-img">
                    <img src={ship.imagePath} alt={ship.title}/>
                </div>
                <div className={"span-7-of-12 ship-name"}
                     onClick={() => toggleHandler(ship.id)}>{ship.name}</div>
                <div className="delete far fa-trash-alt" onClick={() => deleteShip(ship)}/>
            </div>
            <div className="upgrade-bar" key={`${ship.id}-upgradeBar`}>
                {Object.keys(ship.upgrades).map(upgradeType => (
                    ship.upgradesShown ? <UpgradeIcon upgradeType={upgradeType} {...faction} ship={ship}/> : null
                ))}
            </div>
            <div className="equipped-upgrades">
                {Object.values(ship.upgrades).map(upgrade => {
                    return upgrade ? <SelectedUpgrade upgrade={upgrade} deleteUpgrade={deleteUpgrade(upgrade)}/> : null
                })}
                })}
            </div>
        </div>
    );
};

ChosenShip.propTypes = {
    ship: PropTypes.object,
    toggleHandler: PropTypes.func,
    deleteShip: PropTypes.func,
    deleteUpgrade: PropTypes.func,
};

export default ChosenShip;
