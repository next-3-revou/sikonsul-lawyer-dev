import axios from 'axios';

const API_URL = "api hosting"
const API_LAW = "https://newsapi.org/v2/top-headlines?country=id&apiKey=13f666ee796c4bd8b8feaebbac56fded"


export const getAllNews = async () => {
    try {
      const response = await axios.get(`${API_LAW}`, {
      });
      return response.data; 
    } catch (error) {
      console.error('Failed to get all information law :', error);
      throw new Error('Failed to get all information law');
    }
  };