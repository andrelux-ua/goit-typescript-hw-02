import axios from 'axios';
import { FetchArticlesResponse } from './types/types';

const API_KEY = 'DVm_zl0Yf6hZhtOCo58MpDfAa_JAYQ6Of1gguAwP8g8';

const API_URL = 'https://api.unsplash.com/search/photos';

export const fetchArticles = async (
  searchTopic: string,
  currentPage: number
): Promise<FetchArticlesResponse> => {
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
