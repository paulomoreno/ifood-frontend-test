import axios from 'axios';
import { goToLogin } from './auth';
import { toastr } from 'react-redux-toastr';
import { store } from '../store/configureStore';
import { clearToken } from '../store/auth/authActions';

const _baseUrl = 'https://api.spotify.com/v1';

export const baseUrl = _baseUrl;

export const apiRequest = async (options = {}) => {

  if (!options.method) options.method = 'get';
  if (!options.url) options.url = baseUrl;

  let resp;

  // await new Promise(resolve=>setTimeout(resolve,5000));

  try {
    resp = await axios({
      method: options.method,
      url: options.url,
      headers: {
        Authorization: `Bearer ${store.getState().auth.access_token}`,
        ...options.headers
      },
      data: options.data,
      params: options.params,
    });
  } catch (error) {
    if (error.response && error.response.status === 401){
      toastr.confirm('Session expired. Do you want to login again?', {
        onOk: goToLogin,
        onCancel: clearSession,
      });
    }
    throw error;
  }

  return resp;
}

/**
 * Given an API error, and a default error message, 
 * tries to get the response error message. If not available
 * returns the default message.
 * @param {objet} error 
 * @param {string} defaultMsg 
 */
export const getErrorMessage = (error, defaultMsg) => {
  try{
    return error.response.data.error.message;
  }catch(e){
    return defaultMsg;
  }
}

const clearSession = () => {
  store.dispatch(clearToken());
}
