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
  FETCH_PROFILE_FAILURE,
  ADD_TOKEN} from './actionTypes';
import {clearData} from '../util/LocalStorage';



import { getProfile } from '../services/index'; // Import fungsi getProfile dari services


const URL_NEWS = import.meta.env.VITE_BE_ENDPOINT_NEWS
const URL_SPECIAL = import.meta.env.VITE_BE_ENDPOINT_SPECIAL
const URL_LIST_LAWYERS = import.meta.env.VITE_BE_ENDPOINT_LIST_LAWYERS

export const addToken = (tokenData)=>{
  return {
    type:ADD_TOKEN,
    payload:tokenData.token
  }
}

export const addProfile = (profileData) => {
  return {
    type: ADD_PROFILE,
    payload:profileData
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

export const fetchSpesialize = ()=>{

}

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const newsRes = await axios.get(URL_NEWS);
      dispatch({ type: ADD_NEWS, payload: newsRes.data});
      const specialRes = await axios.get(URL_SPECIAL);
      dispatch({ type: ADD_SPECIALIZATIONS, payload: specialRes.data.data.specializations });
      const lawyersRes = await axios.get(URL_LIST_LAWYERS);
      dispatch({ type: ADD_LAWYERS, payload: lawyersRes.data.data.lawyers });
    } catch (error) {
      // Handle error
    }
  }
}



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

export const fetchProfile = (lawyerId) => {
  return async (dispatch) => {
    dispatch(fetchProfileRequest());
    try {
      const profileData = await getProfile(lawyerId);
      dispatch(fetchProfileSuccess(profileData));
    } catch (error) {
      dispatch(fetchProfileFailure(error.message));
    }
  };
};