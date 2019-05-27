import axios from 'axios';
import { getAccessToken, goToLogin } from './auth';

const _baseUrl = 'https://api.spotify.com/v1/me';

export const baseUrl = _baseUrl;

export const apiRequest = async (options = {}) => {

  if (!options.method) options.method = 'get';
  if (!options.url) options.url = baseUrl;

  
  let resp;
  
  resp = await axios({
    method: options.method,
    url:options.url,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      ...options.headers
    },
    data: options.data,
  });

  return resp;
}

