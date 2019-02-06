import axios from 'axios';
import {FETCH_USERS, FETCH_SHIPS, UPDATE_NAME, MAX_POINTS} from "./types";


export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/user");
    dispatch({type: FETCH_USERS, payload: res.data})
};

export const fetchFleet = () => async (dispatch) => {
    const res = await axios.get("/api/fleets");
    dispatch({type: FETCH_SHIPS, payload: res.data})
};

// incoming data comes in first arg
export const updateName = (name) => dispatch => {
    dispatch({type: UPDATE_NAME, payload: name})
};

export const maxPoints = (points) => dispatch => {
    dispatch({type: MAX_POINTS, payload: points})
};