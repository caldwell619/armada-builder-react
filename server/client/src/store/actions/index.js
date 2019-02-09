import axios from 'axios';
import {
    FETCH_USERS,
    FETCH_SHIPS,
    UPDATE_NAME,
    MAX_POINTS,
    FIND_FACTION,
    MENU_DISPLAY,
    HIDE_MENU,
    ADD_SHIP,
    CURRENT_POINTS,
} from "./types";


export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/user");
    dispatch({type: FETCH_USERS, payload: res.data})
};

export const fetchFleet = () => async (dispatch) => {
    const res = await axios.get("/api/fleets");
    dispatch({type: FETCH_SHIPS, payload: res.data})
};

// incoming data comes in first arg
export const updateName = name => dispatch => {
    dispatch({type: UPDATE_NAME, payload: name})
};

export const maxPoints = points => dispatch => {
    dispatch({type: MAX_POINTS, payload: points})
};

export const addShip = updatedSelectedShips => dispatch => {
    dispatch({type: ADD_SHIP, payload: updatedSelectedShips})
};

export const findFaction = faction => dispatch => {
    dispatch({type: FIND_FACTION, payload: faction})
};
export const menuDisplay = display => dispatch => {
    dispatch({type: MENU_DISPLAY, payload: display})
};
export const hideMenu = display => dispatch => {
    dispatch({type: HIDE_MENU, payload: display})
};
export const currentPoints = ship => dispatch => {
    dispatch({type: CURRENT_POINTS, payload: ship.points})
};