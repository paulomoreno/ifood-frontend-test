import React from "react";
import Form from 'react-bootstrap/Form';
import MdSearch from 'react-ionicons/lib/MdSearch'

import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';

import './searchBarButton.css';

const FieldInput = ({ input, label, meta }) => {
  return (
    <Form.Group 
      className="customSearchInput"
      controlId={input.name}
    >
      <Form.Control
        {...input}
        type="text"
        placeholder="Buscar por nome"
        meta={meta}
      />
      <Form.Label>
        <MdSearch
          fontSize="2rem"
          color="#fff"
        />
      </Form.Label>
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


SearchBarForm = reduxForm({
  form: 'localSearchForm'
})(SearchBarForm);

export default SearchBarForm;

