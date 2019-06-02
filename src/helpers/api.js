import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { goToLogin } from './auth';
import { store } from '../store/configureStore';
import { clearToken } from '../store/auth/authActions';

const baseUrl = 'https://api.spotify.com/v1';

const clearSession = () => {
  store.dispatch(clearToken());
};

const apiRequest = async (options = {}) => {
  const method = (options.method) ? options.method : 'get';
  const url = (options.url) ? options.url : baseUrl;

  let resp;

  try {
    resp = await axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${store.getState().auth.access_token}`,
        ...options.headers,
      },
      data: options.data,
      params: options.params,
    });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toastr.confirm('Sessão expirada. Deseja entrar novamente?', {
        onOk: goToLogin,
        onCancel: clearSession,
      });
    }
    throw error;
  }

  return resp;
};

/**
 * Given an API error, and a default error message,
 * tries to get the response error message. If not available
 * returns the default message.
 * @param {objet} error
 * @param {string} defaultMsg
 */
const getErrorMessage = (error, defaultMsg) => {
  try {
    return error.response.data.error.message;
  } catch (e) {
    return defaultMsg;
  }
};

export {
  baseUrl,
  apiRequest,
  getErrorMessage,
};
