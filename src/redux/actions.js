import axios from 'axios';
import {
  ADD_NEWS, 
  ADD_SPECIALIZATIONS,
  ADD_LAWYERS,
  ADD_PROFILE,
  CLEAR_PROFILE,
  CLEAR_TOKEN,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE} from './actionTypes';
import {clearData} from '../util/LocalStorage';


import { getProfile } from '../services/index'; // Import fungsi getProfile dari services


export const addProfile = (profileData) => {
  return {
    type: ADD_PROFILE,
    payload: profileData
  };
};

export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE
  };
};

export const clearToken = () => {
  return async (dispatch) => {
    try {
      clearData('accessToken');
      clearData('userId');
      dispatch({ type: CLEAR_TOKEN });
      dispatch({ type: CLEAR_PROFILE });
    } catch (error) {
      // Handle error
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const [newsRes, specialRes, lawyersRes] = await Promise.all([
        axios.get(URL_NEWS),
        axios.get(URL_SPECIAL),
        axios.get(URL_LIST_LAWYERS)
      ]);

      dispatch({ type: ADD_NEWS, payload: newsRes.data });
      dispatch({ type: ADD_SPECIALIZATIONS, payload: specialRes.data.data.specializations });
      dispatch({ type: ADD_LAWYERS, payload: lawyersRes.data.data.lawyers });
    } catch (error) {
      // Handle error
    }
  };
};


export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST
  };
};

export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: profile
  };
};

export const fetchProfileFailure = (error) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    payload: error
  };
};

export const fetchProfile = () => {
  const token = localStorage.getItem('accessToken');
  return async (dispatch) => {
    dispatch(fetchProfileRequest());
    try {
      const profileData = await getProfile(token);
      dispatch(fetchProfileSuccess(profileData));
    } catch (error) {
      dispatch(fetchProfileFailure(error.message));
    }
  };
};