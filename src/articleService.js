import axios from 'axios';

const API_KEY = 'GBgU68xA_RONj6yAMGQMRka5rKlsmMfnz_kmUGbcEe8';
const API_URL = 'https://api.unsplash.com/search/photos';

export const fetchArticles = async (searchTopic, currentPage) => {
  const response = await axios.get(API_URL, {
    params: {
      client_id: API_KEY,
      query: searchTopic,
      per_page: 30,
      page: currentPage,
    },
  });
  return response.data.results;
};
