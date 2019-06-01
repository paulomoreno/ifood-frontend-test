
import React from "react";

import Container from 'react-bootstrap/Container';
import FiltersForm from './FiltersForm';

import './filtersWrapper.css';

const FiltersWrapper = () => (
  <Container fluid>
    <h1>Filters</h1>
    <FiltersForm />
  </Container>
);

export default FiltersWrapper;