import { apiRequest, baseUrl } from '../../helpers/api';
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
      url: baseUrl,
    }).then(resp => {
      dispatch([
        {
          type: 'USER',
          payload: resp.data
        },
        loading()
      ]);
    }).catch(error => {
      toastr.error('Erro', 'Erro ao buscar dados do usuário. ')
      dispatch([
        { type: 'USER', payload: {} },
        loading()
      ])
    })
  }
}
