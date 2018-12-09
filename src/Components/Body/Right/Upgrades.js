import React from 'react';
import {Route} from 'react-router-dom';
import Commander from './Upgrades/Commanders'
import Title from './Upgrades/Title'
import Turbolasers from './Upgrades/Turbolasers'
import SupportTeam from './Upgrades/SupportTeam'

const Upgrades = () => {
    return (
        <div>
            <Route path="/ships/:id/upgrades/:type/commander" component={Commander}/>
            <Route path="/ships/:id/upgrades/title" component={Title}/>
            <Route path="/ships/:id/upgrades/turbolasers" component={Turbolasers}/>
            <Route path="/ships/:id/upgrades/support-team" component={SupportTeam}/>
        </div>

    )
};

export default Upgrades;