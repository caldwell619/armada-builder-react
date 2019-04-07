import React from 'react';
import PropTypes from 'prop-types';

const SelectedUpgrade = ({upgrade, deleteUpgrade}) => {
    return (
        <div className="assigned-upgrade">
            <div className="col span 4-of-12 upgrade-img-container">
                <img src={`/images/cards/upgrades/${upgrade.set}/${upgrade.image}`} alt="upgrade" className="upgrade-img"/>
            </div>
            <div className="col span 7-of-12 upgrade-name">
                {upgrade.title}
            </div>
            <div className="delete-upgrade far fa-trash-alt" onClick={() => deleteUpgrade()}/>
        </div>
    );
};

SelectedUpgrade.propTypes = {
    deleteUpgrade: PropTypes.func,
    upgrade: PropTypes.object,
};

export default SelectedUpgrade;
