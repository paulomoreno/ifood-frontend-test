import { toastr } from 'react-redux-toastr';
import axios from 'axios';

const FILTER_URL = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

export const loading = () => {
  return {
    type: 'LOADING_FILTERS'
  }
}

export const getFiltersDefs = () => {
  return dispatch => {
    dispatch(loading());

    axios(FILTER_URL).then(resp=>{
      dispatch([
        {
          type: 'LOAD_FILTERS_DEFS',
          payload: resp.data.filters
        },
        loading()
      ]);
    }).catch(error => {
      toastr.error('Erro', 'Erro ao carregar filtros.')
      dispatch([
        { type: 'LOAD_FILTERS_DEFS', payload: {} },
        loading()
      ]);
    });
  }
}
