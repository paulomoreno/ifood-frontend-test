import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFilters } from '../modules/filter/filterActions';



const Filter = ({ data }) => {
  return (
    <div>
      <p>id: {data.id}</p>
      <p>name: {data.name}</p>
      <p>values: {data.values}</p>
      <p>validation: {data.validation}</p>
    </div>
  )

}

function Filters({ filters, getFilters }) {
  useEffect(() => {
    getFilters();
  }, []);

  return (
    <div>
      {filters && filters.map(filter => (
        <Filter data={filter}/>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.filters.loading,
    filters: state.filters.list,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFilters }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

