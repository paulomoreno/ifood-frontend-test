
import React from "react";
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';

import { findInArrayOfObjects } from '../../store/filter/filterActions';

const FiltersBadges = ({ filtersForm, localSearchForm, filtersDefs }) => {
  const filters = [];

  if (filtersForm && filtersForm.values) {

    Object.keys(filtersForm.values).forEach((key) => {
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

  if (localSearchForm && localSearchForm.values && localSearchForm.values.name) {
    filters.push({
      key: 'name',
      name: 'Nome',
      value: localSearchForm.values.name,
    })
  }

  return (
    <div>
      {filters.map((filter, i) => (
        <Badge
          key={filter.key}
          variant={`info ${(i > 0 && 'ml-4')}`}>
          {filter.name}: {filter.value}
        </Badge>
      ))}
    </div>
  );

};

function mapStateToProps(state) {
  return {
    filtersForm: state.form.filtersForm,
    localSearchForm: state.form.localSearchForm,
    filtersDefs: state.filters.defs,
  }
}

export default connect(mapStateToProps)(FiltersBadges)