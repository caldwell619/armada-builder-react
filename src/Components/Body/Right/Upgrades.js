import React from 'react';
import {Route} from 'react-router-dom';
import Commander from './Commanders'
import Title from './Title'
import Turbolasers from './Turbolasers'
import SupportTeam from './SupportTeam'

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