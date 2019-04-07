import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const UpgradeIcon = ({faction, ship, upgradeType}) => {
    return (
        <Link to={`/builder/${faction}/${ship.id}/upgrades/${upgradeType}`}>
            <button>
                <img src={`/images/icons/${upgradeType}.png`}
                     alt="upgrade icon"/>
            </button>
        </Link>
    );
};

UpgradeIcon.propTypes = {
    faction: PropTypes.string,
    ship: PropTypes.object,
    upgradeType: PropTypes.string,
};

export default UpgradeIcon;
