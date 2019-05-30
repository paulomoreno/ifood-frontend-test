import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


import FormControl from 'react-bootstrap/FormControl';
import { Field } from 'redux-form' 
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validations } from '../helpers/validations';

import Loader from './Loader';

import { getFiltersDefs, updateFilterQuery } from '../modules/filter/filterActions';



const renderDatePicker = ({input, meta: {touched, error}}) => {
  console.log(input)
  return (
  
  <div>
        <DatePicker 
          selected={input.value}
          onChange={input.onChange}
          showTimeSelect
          timeIntervals={1}
          shouldCloseOnSelect={false}
          selected={input.value ? new Date(input.value) : null} 
        />
  </div>
)};

const FieldInput = ({ input, label, meta, type, min, max, values, inputType, entityType }) => {
  let _as = type;
  if (type === 'select-multi')
    _as = 'select';
  if (entityType === 'DATE_TIME')
    _as = renderDatePicker;

  return (
    <Form.Group controlId={input.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={_as}
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
      {values && values.map((opt,i) => (
        <option key={`filter_option_${input.name}_${i}`} value={opt.value}>{opt.name}</option>
      ))}
      </Form.Control>
      { meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </Form.Group>
  )
}

function Filters({ filtersDefs, getFiltersDefs, updateFilterQuery, loading }) {
  useEffect(() => {
    getFiltersDefs();
  }, []);

  return (
    <Form>
      {loading && (
        <Loader/>
      )}

      {filtersDefs && (
        <Form.Row>
          {filtersDefs.map((filter,i) => (
            <Col key={`filters_api_${i}`}>
              <Field 
                {...filter}
                label={filter.name} 
                name={filter.id}
                inputType={filter.inputType} 
                component={FieldInput}
              >
              </Field>
            </Col>
          ))}
          <Col key={`filters_api_${filtersDefs.length}`}>
            <Field 
              label="Nome" 
              name="name"
              id="name"
              inputType="input" 
              component={FieldInput}
            >
            </Field>
          </Col>
        </Form.Row>
      )}
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.filters.loading,
    filtersDefs: state.filters.defs,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFiltersDefs, updateFilterQuery }, dispatch)
}

Filters = reduxForm({ 
  form: 'filtersForm',
  onChange: (values, dispatch)=>{
    console.log('form changed values: ',values);
  },
  onChange: (values, dispatch, props)=>{
    dispatch(updateFilterQuery(values));
  }
})(Filters);

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

