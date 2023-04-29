import axios from 'axios';

export const baseUrl = 'https://unofficial-redfin.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'fbf0a3fa32msh4b3c24e10266376p1a8810jsnb275a077bdb6',
      'X-RapidAPI-Host': 'unofficial-redfin.p.rapidapi.com',
    }
  });

  return data;
};
