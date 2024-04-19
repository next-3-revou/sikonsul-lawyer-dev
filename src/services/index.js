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
      const token = localStorage.getItem('accessToken')
      console.log(token);
      const response = await axios.get(`${URL_PROFILE}/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXd5ZXJJZCI6MTksImlhdCI6MTcxMzU0NTQzNywiZXhwIjoxNzEzNTUxNDM3fQ.CTg_USde6HkQPWhTFoJIZ3XIyAvUZ2XQ0JMzQPI0j38`,
          'Content-Type': 'application/json',
        }
      });
      console.log(response,'response haikal');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw new Error(error.message);
    }
  };