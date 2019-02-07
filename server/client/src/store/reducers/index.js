import { combineReducers } from 'redux';
import authReducer from './authReducer'
import fleetReducer from './fleetsReducer'
import updateNameReducer from './updateNameReducer';
import maxPointsReducer from './maxPointsReducer';
import addShipReducer from './addShipReducer';
import findFaction from './factionReducer';
import showMenu from './menuReducer';

export default combineReducers({
    auth: authReducer,
    fleets: fleetReducer,
    fleetName: updateNameReducer,
    maxAllowedPoints: maxPointsReducer,
    ships: addShipReducer,
    faction: findFaction,
    menuShown: showMenu
})