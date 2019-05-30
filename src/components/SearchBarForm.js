import React from "react";
import Form from 'react-bootstrap/Form';

import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const FieldInput = ({ input, label, meta }) => {
  return (

    <Form.Group controlId={input.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...input}
        type="text"
        meta={meta}
      >
      </Form.Control>
    </Form.Group>
  )
}

let SearchBarForm = () => (
  <Form inline>
    <Field
      label="Nome"
      name="name"
      id="name"
      inputType="input"
      component={FieldInput}
    />
  </Form>
);

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

SearchBarForm = reduxForm({
  form: 'localSearchForm'
})(SearchBarForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarForm)

