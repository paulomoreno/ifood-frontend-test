
import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import FiltersForm from './FiltersForm';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import './filtersWrapper.css';

const FiltersWrapper = ({idPrefix}) => {

  const titleId= `${idPrefix}-title`;

  return (
    <Container fluid role="form" aria-labelledby={titleId}>
      <h1 id={titleId}>Filters</h1>
      <FiltersForm idPrefix={idPrefix}/>
    </Container>
  )
};

export default FiltersWrapper;