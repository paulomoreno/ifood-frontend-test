
import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import FiltersForm from './FiltersForm';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import './filtersWrapper.css';

const FiltersWrapper = () => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <Container fluid>
      <h1 onClick={toggleOpen}>Filters</h1>
      <FiltersForm />
    </Container>
  )
};

export default FiltersWrapper;