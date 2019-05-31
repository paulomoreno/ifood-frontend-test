import { apiRequest, baseUrl, getErrorMessage } from '../../helpers/api';
import { toastr } from 'react-redux-toastr';

export const loading = () => {
  return {
    type: 'LOADING_PLAYLISTS'
  }
}

export const getPlaylists = () => {
  return (dispatch,getState) => {
    console.log('will get playlists', getState().filters.filters_query)
    dispatch(loading());
    
    apiRequest({
      method: 'get',
      url: `${baseUrl}/browse/featured-playlists`,
      params: getState().filters.filters_query
    }).then(resp => {
      dispatch([
        {
          type: 'PLAYLISTS',
          payload: resp.data.playlists
        },
        loading()
      ]);
    }).catch(error => {
      let errorMsg = getErrorMessage(error,'Error loading list of playlists');
      console.error(errorMsg, error);
      toastr.error('Error', errorMsg);
      dispatch([
        { type: 'PLAYLISTS', payload: {} },
        loading()
      ]);
    });
  }
}
