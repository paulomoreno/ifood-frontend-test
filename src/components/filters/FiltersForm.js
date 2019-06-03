import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import DatePicker from 'react-datepicker';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../Loader';
import { getFiltersDefs, updateFilterQuery } from '../../store/filter/filterActions';

import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ input }) => (
  <div>
    <DatePicker
      id={input.id}
      onChange={input.onChange}
      showTimeSelect
      timeIntervals={1}
      className="form-control"
      dateFormat="dd/MM/yyyy h:mm aa"
      selected={input.value ? new Date(input.value) : null}
    />
  </div>
);

CustomDatePicker.propTypes = {
  input: PropTypes.object.isRequired,
};

const FieldInput = ({
  input: propInput, label, meta, type, min, max, values, inputType, entityType, idPrefix,
}) => {
  let asType = type;
  if (type === 'select-multi') asType = 'select';
  if (entityType === 'DATE_TIME') asType = CustomDatePicker;

  const input = {
    ...propInput,
    id: `${idPrefix}-${propInput.name}`,
  };

  return (
    <Form.Group controlId={input.id} className="w-100">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={asType}
        name={input.name}
        type={inputType}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange}
        isInvalid={meta.error}
        meta={meta}
        input={input}
      >
        {values && values.map(opt => (
          <option key={`filter_option_${input.name}_${opt.value}`} value={opt.value}>{opt.name}</option>
        ))}
      </Form.Control>
      {meta.error && (
        <Badge variant="danger">{meta.error}</Badge>
      )}
    </Form.Group>
  );
};

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.array,
  inputType: PropTypes.string,
  entityType: PropTypes.string,
  idPrefix: PropTypes.string.isRequired,
};

FieldInput.defaultProps = {
  min: null,
  max: null,
  values: null,
  entityType: '',
  inputType: null,
};

let FiltersForm = ({
  filtersDefs, getFiltersDefsConnected, loading, idPrefix,
}) => {
  useEffect(() => {
    getFiltersDefsConnected();
  }, [getFiltersDefsConnected]);

  return (
    <Form className="ml-3 mr-3 filtersForm">
      {loading && (
        <Loader />
      )}
      {filtersDefs && filtersDefs.map(filter => (
        <Form.Row key={`filters_api_${filter.id}`}>
          <Field
            {...filter}
            label={filter.name}
            name={filter.id}
            idPrefix={idPrefix}
            inputType={filter.inputType}
            component={FieldInput}
          />
        </Form.Row>
      ))}
    </Form>
  );
};

FiltersForm.propTypes = {
  filtersDefs: PropTypes.array,
  getFiltersDefsConnected: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  idPrefix: PropTypes.string.isRequired,
};

FiltersForm.defaultProps = {
  filtersDefs: [],
  loading: true,
};

function mapStateToProps(state) {
  return {
    loading: state.filters.loading,
    filtersDefs: state.filters.defs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFiltersDefsConnected: getFiltersDefs }, dispatch);
}

FiltersForm = reduxForm({
  form: 'filtersForm',
  onChange: (values, dispatch) => {
    dispatch(updateFilterQuery(values));
  },
})(FiltersForm);

export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm);
