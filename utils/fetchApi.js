import axios from 'axios';

export const baseUrl = 'https://unofficial-redfin.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'unofficial-redfin.p.rapidapi.com',
    }
  });

  return data;
};
