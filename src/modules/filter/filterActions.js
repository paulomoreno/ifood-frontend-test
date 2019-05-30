import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { validations } from '../../helpers/validations';
import { getPlaylists } from '../playlist/playlistActions';
import moment from 'moment';

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

          if (v.entityType)
            def.entityType = v.entityType;

          if (v.pattern)
            def.pattern = v.pattern;
    
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
      toastr.error('Error', 'Error loading filters')
      dispatch([
        { type: 'LOAD_FILTERS_DEFS', payload: {} },
        loading()
      ]);
    });
  }
}


const findInArrayOfObjects = (array, id) => array.filter(obj => obj.id === id);

export const updateFilterQuery = () => {
  return (dispatch,getState) => {
    const state = getState();
    const form = state.form.filtersForm;
    const filtersDefs = state.filters.defs;
    const values = form.values;
    const localValues = {};

    // Remove all inputs with errors
    if (form.syncErrors) {
      Object.keys(form.syncErrors).forEach(key=>delete values[key]);
    }

    // Parse timestamp
    if (values.timestamp){
      try{
        const def = findInArrayOfObjects(filtersDefs, 'timestamp')[0];
        // The pattern used on our filters definitions is different than the
        // pattern used by moment
        let pattern = def.pattern
          .replace('yyyy','YYYY')
          .replace('dd','DD');
        values.timestamp = moment(values.timestamp).format(pattern);
      // Error parsing filter - delete and log
      }catch(e){
        console.error('Error while parsing timestamp value.',e);
        delete values.timestamp;
      }
    }

    // Local fiter (different reducer)
    if (values.name){
      localValues.name = values.name;
      delete values.name;
    }

    const updateFiltersQuery = {
      type: 'UPDATE_FILTERS_QUERY',
      payload: {
        values,
        localValues,
      }
    };

    if (Object.keys(values).length >  0)
      return dispatch([
        updateFiltersQuery,
        getPlaylists()
      ]);

    return dispatch([
      updateFiltersQuery,
    ]);
  }
}
