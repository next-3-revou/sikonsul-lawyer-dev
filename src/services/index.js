import axios from 'axios';
import { ADD_PROFILE } from '../redux/actionTypes';

// const API_URL = "api hosting"
// const API_LAW = "https://newsapi.org/v2/top-headlines?country=id&apiKey=13f666ee796c4bd8b8feaebbac56fded"
const URL_NEWS = import.meta.env.VITE_BE_ENDPOINT_NEWS
const URL_PROFILE = import.meta.env.VITE_BE_ENDPOINT_PROFILE_LAWYERS

export const getAllNews = async () => {
    try {
      const response = await axios.get(`${URL_NEWS}`, {
      });
      return response.data; 
    } catch (error) {
      console.error('Failed to get all information law :', error);
      throw new Error('Failed to get all information law');
    }
  };

  export const getProfile = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      console.log(token)
      const response = await axios.get(`${URL_PROFILE}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };