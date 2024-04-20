import axios from 'axios';

const URL_NEWS = import.meta.env.VITE_BE_ENDPOINT_NEWS;
const URL_PROFILE = import.meta.env.VITE_BE_ENDPOINT_PROFILE_LAWYERS;

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
      console.log(id)
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