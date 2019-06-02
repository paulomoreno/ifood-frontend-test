import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MdSearch from 'react-ionicons/lib/MdSearch';

import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';

import './searchBarButton.css';

const FieldInput = ({ input, label, meta }) => {
  return (
    <InputGroup>
      <Form.Group
        className="customSearchInput"
        controlId={`navForm-${input.name}`}
      >
        <Form.Label className="mr-2" >Busca: </Form.Label>
        <Form.Control
          {...input}
          type="text"
          meta={meta}
        />
      </Form.Group>
      <InputGroup.Append>
        <MdSearch
          fontSize="2rem"
          color="#fff"
        />
      </InputGroup.Append>
    </InputGroup>
  )
}

let SearchBarForm = () => (
  <Form inline className="justify-content-center mr-md-5">
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

