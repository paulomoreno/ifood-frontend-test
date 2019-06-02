import { toastr } from 'react-redux-toastr';
import { apiRequest, baseUrl, getErrorMessage } from '../../helpers/api';

export const loading = () => ({
  type: 'LOADING_USER',
});

export const clearUser = () => (dispatch) => {
  dispatch(
    {
      type: 'USER',
      payload: null,
    },
  );
};

export const getUser = () => (dispatch) => {
  dispatch(loading());

  apiRequest({
    method: 'get',
    url: `${baseUrl}/me`,
  }).then((resp) => {
    dispatch([
      {
        type: 'USER',
        payload: resp.data,
      },
      loading(),
    ]);
  }).catch((error) => {
    const errorMsg = getErrorMessage(error, 'Erro ao carregar as informações do usuário');
    console.error(errorMsg, error);
    toastr.error('Error', errorMsg);
    dispatch([
      { type: 'USER', payload: {} },
      loading(),
    ]);
  });
};
