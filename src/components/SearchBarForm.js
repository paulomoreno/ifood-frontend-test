import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MdSearch from 'react-ionicons/lib/MdSearch';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import '../stylesheets/searchBarButton.css';

const FieldInput = ({ input, meta }) => (
  <InputGroup>
    <Form.Group
      className="customSearchInput"
      controlId={`navForm-${input.name}`}
    >
      <Form.Label className="mr-2">Busca: </Form.Label>
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
);

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

const SearchBarForm = () => (
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

export default reduxForm({
  form: 'localSearchForm',
})(SearchBarForm);
