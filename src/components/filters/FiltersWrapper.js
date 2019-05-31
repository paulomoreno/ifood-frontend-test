
import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { findInArrayOfObjects } from '../../store/filter/filterActions';

import FiltersForm from './FiltersForm';

import './filtersWrapper.css';

const FiltersWrapper = ({filtersForm, filtersDefs}) => {
  const [visible, setVisible] = useState(false);

  console.log(filtersDefs);


  const filters = [];

  if (filtersForm && filtersForm.values){

    Object.keys(filtersForm.values).forEach((key)=>{
      const obj = findInArrayOfObjects(filtersDefs, key)[0];
      let name = key;
      let value = filtersForm.values[key];
      if (name.length > 0) name = name.name;

      if (obj.validation && obj.validation.entityType === 'DATE_TIME')
        value = value.toLocaleString();

      filters.push({
        key,
        name: findInArrayOfObjects(filtersDefs, key)[0].name,
        value,
      })
    })
  }

  const handleClick = (e) => {
    setVisible(!visible);
  }

  return (
    <Container>
      <span onClick={handleClick}>Filters +</span>

      {filters.map(filter=>(
        <Badge variant="info">{filter.name}: {filter.value}</Badge>
      ))}

      <div className={`filters-slider ${visible && 'open'}`}>
        <FiltersForm/>
      </div>
        
    </Container>
  );

};

function mapStateToProps(state) {
  return {
    filtersForm: state.form.filtersForm,
    filtersDefs: state.filters.defs,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersWrapper)