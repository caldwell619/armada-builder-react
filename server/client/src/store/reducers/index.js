import { combineReducers } from 'redux';
import authReducer from './authReducer'
import fleetReducer from './fleetsReducer'
import updateNameReducer from './updateNameReducer';
import maxPointsReducer from './maxPointsReducer';

export default combineReducers({
    auth: authReducer,
    fleets: fleetReducer,
    fleetName: updateNameReducer,
    maxPoints: maxPointsReducer
})