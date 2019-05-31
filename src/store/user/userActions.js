import { apiRequest, baseUrl, getErrorMessage } from '../../helpers/api';
import { toastr } from 'react-redux-toastr';

export const loading = () => {
  return {
    type: 'LOADING_USER'
  }
}

export const clearUser = () => {
  return dispatch => {
    dispatch(
      {
        type: 'USER',
        payload: null
      });
  }
}

export const getUser = () => {
  return dispatch => {
    dispatch(loading());
    
    apiRequest({
      method: 'get',
      url: `${baseUrl}/me`,
    }).then(resp => {
      dispatch([
        {
          type: 'USER',
          payload: resp.data
        },
        loading()
      ]);
    }).catch(error => {
      let errorMsg = getErrorMessage(error,'Error loading user information');
      console.error(errorMsg, error);
      toastr.error('Error', errorMsg);
      dispatch([
        { type: 'USER', payload: {} },
        loading()
      ])
    })
  }
}
