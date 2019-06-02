
import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import FiltersForm from './FiltersForm';

import '../../stylesheets/filtersWrapper.css';

const FiltersWrapper = ({ idPrefix }) => {
  const titleId = `${idPrefix}-title`;
  return (
    <Container fluid role="form" aria-labelledby={titleId}>
      <h1 id={titleId}>Filters</h1>
      <FiltersForm idPrefix={idPrefix} />
    </Container>
  );
};

FiltersWrapper.propTypes = {
  idPrefix: PropTypes.string.isRequired,
};

export default FiltersWrapper;
