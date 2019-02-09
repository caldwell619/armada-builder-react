import { combineReducers } from 'redux';
import authReducer from './authReducer'
import fleetReducer from './fleetsReducer'
import updateNameReducer from './updateNameReducer';
import maxPointsReducer from './maxPointsReducer';
import addShipReducer from './addShipReducer';
import findFaction from './factionReducer';
import toggleHeaderReducer from './toggleHeaderReducer';
import toggleLeftMenuReducer from './toggleLeftMenuReducer';
import currentPointsReducer from './currentPointsReducer';
import findUpgradesReducer from './availableUpgradesReducer';

//defines global store state
export default combineReducers({
    auth: authReducer,
    fleets: fleetReducer,
    fleetName: updateNameReducer,
    maxAllowedPoints: maxPointsReducer,
    ships: addShipReducer,
    faction: findFaction,
    headerMenuShown: toggleHeaderReducer,
    leftMenuShown: toggleLeftMenuReducer,
    currentPoints: currentPointsReducer,
    availableUpgrades: findUpgradesReducer

})