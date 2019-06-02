import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { validations } from '../../helpers/validations';
import { getPlaylists } from '../playlist/playlistActions';
import moment from 'moment';

const FILTER_URL = 'https://www.mocky.io/v2/5a25fade2e0000213aa90776';

export const loading = () => {
  return {
    type: 'LOADING_FILTERS'
  }
}

const parseFilters = (filters) => filters.map(def => {
  def.type =  'input';
  def.validate = [];

  if (def.values){
    def.type = 'select-multi';
    // Add default empty option on all selects
    def.values.unshift({
      key: '',
      value: '',
    });
  }

  if (def.validation) {
    const v = def.validation;

    if (v.primitiveType === 'INTEGER') {
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

export const getFiltersDefs = () => {
  return dispatch => {
    dispatch(loading());

    axios(FILTER_URL).then(resp => {
      const defs = resp.data.filters;

      dispatch([
        {
          type: 'LOAD_FILTERS_DEFS',
          payload: parseFilters(defs)
        },
        loading()
      ]);
    }).catch(error => {
      toastr.error('Error', 'Erro ao carregar filtros')
      dispatch([
        { type: 'LOAD_FILTERS_DEFS', payload: {} },
        loading()
      ]);
    });
  }
}


export const findInArrayOfObjects = (array, id) => array.filter(obj => obj.id === id);

export const updateFilterQuery = () => {
  return (dispatch, getState) => {
    const state = getState();
    const form = state.form.filtersForm;
    const filtersDefs = state.filters.defs;
    const values = (form.values) ? form.values : {};

    // Remove all inputs with errors
    if (form.syncErrors) {
      Object.keys(form.syncErrors).forEach(key => delete values[key]);
    }

    // Parse timestamp
    if (values.timestamp) {
      try {
        const def = findInArrayOfObjects(filtersDefs, 'timestamp')[0];
        // The pattern used on our filters definitions is different than the
        // pattern used by moment
        let pattern = def.pattern
          .replace('yyyy', 'YYYY')
          .replace('dd', 'DD');
        values.timestamp = moment(values.timestamp).format(pattern);
        // Error parsing filter - delete and log
      } catch (e) {
        console.error('Error while parsing timestamp value.', e);
        delete values.timestamp;
      }
    }

    return dispatch([
      {
        type: 'UPDATE_FILTERS_QUERY',
        payload: values,
      },
      getPlaylists()
    ]);
  }
}
