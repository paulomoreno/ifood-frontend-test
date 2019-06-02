
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { findInArrayOfObjects } from '../../store/filter/filterActions';

const FiltersBadges = ({ filtersForm, localSearchForm, filtersDefs }) => {
  const filters = [];

  if (filtersForm && filtersForm.values) {
    Object.keys(filtersForm.values).forEach((key) => {
      const obj = findInArrayOfObjects(filtersDefs, key)[0];
      let value = filtersForm.values[key];

      if (obj.validation && obj.validation.entityType === 'DATE_TIME') {
        try {
          value = new Date(value).toLocaleString();
        } catch (e) {
          // continue regardless of error
        }
      }

      filters.push({
        key,
        name: findInArrayOfObjects(filtersDefs, key)[0].name,
        value,
      });
    });
  }

  if (localSearchForm && localSearchForm.values && localSearchForm.values.name) {
    filters.push({
      key: 'name',
      name: 'Nome',
      value: localSearchForm.values.name,
    });
  }

  return (
    <div>
      {filters.map((filter, i) => (
        <Badge
          key={filter.key}
          variant={`info ${(i > 0 && 'ml-4')}`}
        >
          {`${filter.name}: ${filter.value}`}
        </Badge>
      ))}
    </div>
  );
};

FiltersBadges.propTypes = {
  filtersForm: PropTypes.object,
  localSearchForm: PropTypes.object,
  filtersDefs: PropTypes.array,
};

FiltersBadges.defaultProps = {
  filtersForm: {},
  localSearchForm: {},
  filtersDefs: [],
};

function mapStateToProps(state) {
  return {
    filtersForm: state.form.filtersForm,
    localSearchForm: state.form.localSearchForm,
    filtersDefs: state.filters.defs,
  };
}

export default connect(mapStateToProps)(FiltersBadges);
