import { toastr } from 'react-redux-toastr';
import { apiRequest, baseUrl, getErrorMessage } from '../../helpers/api';

export const loading = () => ({
  type: 'LOADING_PLAYLISTS',
});

export const getPlaylists = () => (dispatch, getState) => {
  dispatch(loading());

  apiRequest({
    method: 'get',
    url: `${baseUrl}/browse/featured-playlists`,
    params: getState().filters.filters_query,
  }).then((resp) => {
    dispatch([
      {
        type: 'PLAYLISTS',
        payload: resp.data.playlists,
      },
      loading(),
    ]);
  }).catch((error) => {
    const errorMsg = getErrorMessage(error, 'Erro ao carregar lista de playlists');
    console.error(errorMsg, error);
    toastr.error('Error', errorMsg);
    dispatch([
      { type: 'PLAYLISTS', payload: {} },
      loading(),
    ]);
  });
};
