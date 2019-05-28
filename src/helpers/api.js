import axios from 'axios';
import { goToLogin } from './auth';
import { toastr } from 'react-redux-toastr';
import { store } from '../configureStore';
import { clearToken } from '../modules/auth/authActions';

const _baseUrl = 'https://api.spotify.com/v1/me';

export const baseUrl = _baseUrl;

export const apiRequest = async (options = {}) => {

  if (!options.method) options.method = 'get';
  if (!options.url) options.url = baseUrl;

  let resp;

  try {
    resp = await axios({
      method: options.method,
      url: options.url,
      headers: {
        Authorization: `Bearer ${store.getState().auth.access_token}`,
        ...options.headers
      },
      data: options.data,
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

const clearSession = () => {
  store.dispatch(clearToken());
}
