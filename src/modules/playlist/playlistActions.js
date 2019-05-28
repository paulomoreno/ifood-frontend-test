import { apiRequest, baseUrl } from '../../helpers/api';
import { toastr } from 'react-redux-toastr';

export const loading = () => {
  return {
    type: 'LOADING_PLAYLISTS'
  }
}

export const getPlaylists = () => {
  return dispatch => {
    dispatch(loading());
    
    apiRequest({
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/featured-playlists',
    }).then(resp => {
      dispatch([
        {
          type: 'PLAYLISTS',
          payload: resp.data.playlists
        },
        loading()
      ]);
    }).catch(error => {
      toastr.error('Erro', 'Erro ao buscar dados do usuário. ')
      dispatch([
        { type: 'PLAYLISTS', payload: {} },
        loading()
      ]);
    });
  }
}
