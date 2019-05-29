import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { validations } from '../../helpers/validations';
import { getPlaylists } from '../playlist/playlistActions';

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
      const defs = resp.data.filters;

      const parsedFilterDefs = defs.map(def=>{
        def.type = (def.values) ? 'select-multi' : 'input';
        def.validate = [];
    
        if (def.validation){
          const v = def.validation;
    
          if (v.primitiveType === 'INTEGER'){
            def.validate.push(validations.number);
            def.inputType = 'number';
          }
    
          if (v.min)
            def.validate.push(validations.minValue(v.min));
    
          if (v.max)
            def.validate.push(validations.maxValue(v.max));
    
        }
        return def;
      });

      dispatch([
        {
          type: 'LOAD_FILTERS_DEFS',
          payload: parsedFilterDefs
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

export const updateFilterQuery = () => {
  return (dispatch,getState) => {
    const form = getState().form.filtersForm;
    const values = form.values;

    // Remove all inputs with errors
    if (form.syncErrors) {
      Object.keys(form.syncErrors).forEach(key=>delete values[key]);
    }

    console.log('will update with values: (AFTER)', values);

    dispatch([
      {
        type: 'UPDATE_FILTERS_QUERY',
        payload: values
      },
      getPlaylists()
    ]);
  }
}
