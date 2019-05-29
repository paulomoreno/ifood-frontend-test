import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';


import FormControl from 'react-bootstrap/FormControl';
import { Field } from 'redux-form' 
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validations } from '../helpers/validations';

import Loader from './Loader';

import { getFiltersDefs, updateFilterQuery } from '../modules/filter/filterActions';

const FieldInput = ({ input, label, meta, type, placeholder, min, max, values, inputType }) => {
  let tp = type;
  if (type === 'select-multi')  tp = 'select';
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={tp}
        placeholder={placeholder}
        controlId={input.name}
        name={input.name}
        type={inputType}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange}
        isInvalid={meta.error}
      >
      {values && values.map((opt,i) => (
        <option value={opt.value} selected={(i==0)}>{opt.name}</option>
      ))}
      </Form.Control>
      { meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </Form.Group>
  )
}



function Filters({ filters_defs, getFiltersDefs, updateFilterQuery, loading }) {
  useEffect(() => {
    getFiltersDefs();
  }, []);
  
  const handleChange = (values, dispatch, b, c) =>{
    console.log('2 form changed values: ',values);
    console.log('2 form changed values: ',dispatch);
    console.log('2 form changed values: ',b);
    console.log('2 form changed values: ',c);
  }

  return (
    <Form onChange={handleChange}>
      {loading && (
        <Loader/>
      )}

      {filters_defs && (
        <Form.Row>
          {filters_defs.map(filter => (
            <Col>
              <Field 
                label={filter.name} 
                name={filter.id}
                type={filter.type} 
                inputType={filter.inputType} 
                component={FieldInput}
                values={filter.values}
                validate={filter.validate}
              >
              </Field>
            </Col>
          ))}
        </Form.Row>
      )}
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.filters.loading,
    filters_defs: state.filters.defs,
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

