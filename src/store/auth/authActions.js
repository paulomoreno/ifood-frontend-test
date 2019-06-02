import {ACCESS_TOKEN_KEY, parseUrlHash} from '../../helpers/auth'

export const clearToken = () => {
  return dispatch => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    dispatch({
      type: 'CLEAR_TOKEN'
    });
  }
}

export const getToken = () => {
  return dispatch => {
    const hash = parseUrlHash(window.location.hash);

    window.location.hash = "";

    if (hash.access_token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, hash.access_token);
    }

    const currentToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    dispatch({
      type: 'GET_TOKEN',
      payload: currentToken
    });
  }
}
