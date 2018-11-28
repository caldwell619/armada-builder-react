import React from 'react';
import { Route} from 'react-router-dom';
import Ships from './Ships'
import Squadrons from './Squadrons'
import AssaultCards from './AssaultCards'
import DefenseCards from './DefenseCards'
import NavigationCards from './NavigationCards'

const right = ({faction}) => {
    return (
        <div className="card-display span-3-of-4">
            <Route path='/ships' render={() => <Ships faction={faction}/>}/>
            <Route path='/squadrons' render={() => <Squadrons faction={faction}/>}/>
            <Route path='/assault' component={AssaultCards}/>
            <Route path='/defense' component={DefenseCards}/>
            <Route path='/Navigation' component={NavigationCards}/>
        </div>
    )
};

export default right;