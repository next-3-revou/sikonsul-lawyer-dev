import axios from 'axios';

const URL_NEWS = import.meta.env.VITE_BE_ENDPOINT_NEWS;
const URL_PROFILE = import.meta.env.VITE_BE_ENDPOINT_PROFILE_LAWYERS;
const URL_LIST_SPECIALIZELAWYER = import.meta.env.VITE_BE_ENDPOINT_LAWYERS

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

  export const getProfile = async (id) => {
    try {
      const token = localStorage.getItem('accessToken')
      const tokens = token.replace(/^"(.*)"$/, '$1');
      const response = await axios.get(`${URL_PROFILE}/${id}`, {
        headers: {
          Authorization: `Bearer ${tokens}`,
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw new Error(error.message);
    }
  };

  
  export const fetchLawyerSpecialize = async(id) => {
    try {
      const specializelawyer = await axios.get(`${URL_LIST_SPECIALIZELAWYER}/${id}`);
      return specializelawyer.data.data.lawyers; 
    } catch (error) {
        console.log(error)
    }
};