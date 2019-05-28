import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loader from './Loader';

import { getFiltersDefs } from '../modules/filter/filterActions';

const TYPE_SELECT = 'TYPE_SELECT';
const TYPE_NUMBER = 'TYPE_NUMBER';
const TYPE_DATETIME = 'TYPE_DATETIME';
const TYPE_INPUT = 'TYPE_INPUT';


const FilterSelect = ({ data }) => {
  return (
    <Form.Group controlId={`filtersForm.${data.id}`}>
      <Form.Label>{data.name}</Form.Label>
      <Form.Control as="select" name={data.id}>
        {data.values && data.values.map(opt => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </Form.Control>
    </Form.Group>
  )
}

const getFilterType = (data) => {
  if (data.values) return TYPE_SELECT;
  return TYPE_INPUT;
}

const Filter = ({ data }) => {
  switch (getFilterType(data)) {
    case TYPE_SELECT:
      return (
        <FilterSelect data={data} />
      );
    case TYPE_INPUT:
      return (
        <p data={data} />
      );
  }
}

function Filters({ filters_defs, getFiltersDefs, loading }) {
  useEffect(() => {
    getFiltersDefs();
  }, []);

  return (
    <Form>
      {loading && (
        <Loader/>
      )}
      {filters_defs && filters_defs.map(filter => (
        <Filter data={filter} />
      ))}
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
  return bindActionCreators({ getFiltersDefs }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

