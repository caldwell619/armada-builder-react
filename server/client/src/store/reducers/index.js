import { combineReducers } from 'redux';
import authReducer from './authReducer'
import fleetReducer from './fleetsReducer'

export default combineReducers({
    auth: authReducer,
    fleets: fleetReducer
})