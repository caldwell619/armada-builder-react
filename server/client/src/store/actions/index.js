import axios from 'axios';
import { FETCH_USERS } from "./types";
import { FETCH_SHIPS } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/user");
    dispatch({type: FETCH_USERS, payload: res.data})
};

export const fetchFleet = () => async (dispatch) => {
    const res = await axios.get("/api/fleets");
    dispatch({type: FETCH_SHIPS, payload: res.data})
};