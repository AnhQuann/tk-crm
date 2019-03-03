import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from '@material-ui/core';

const renderCourseItem = (items) => {
  return items.map((item, index) => 
    <MenuItem key={index} value={item._id}>{item.name}</MenuItem>);
};

const renderMethods = (items) => {
  return items.map((item, index) => 
    <MenuItem key={index} value={item}>{item}</MenuItem>);
};

const renderState = (items) => {
  return items.map((item, index) => 
    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>);
};

const FmkSelect = (props) => {
  const {
    dataField,
    title,
    values,
    handleChange,
    items,
    method,
    course,
    state
  } = props;

  const fmkValue = _.get(values, dataField);

  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select
        value={fmkValue}
        name={dataField}
        onChange={handleChange}
      >
        {course && renderCourseItem(items)}
        {method && renderMethods(items)}
        {state && renderState(items)}
      </Select>
    </FormControl>
  );
};


export default FmkSelect;

// FmkSelect.defaultProps = {
//   dataField: '',
//   title: '',
//   errors: {},
//   values: {},
//   touched: {},
//   handleChange: () => {},
//   items: {},
//   setFieldTouched: () => {},
//   manyKey: false,
// };

// FmkSelect.propTypes = {
//   dataField: PropTypes.string,
//   title: PropTypes.string,
//   errors: PropTypes.shape({}),
//   values: PropTypes.shape({}),
//   touched: PropTypes.shape({}),
//   handleChange: PropTypes.func,
//   items: PropTypes.shape({}),
//   setFieldTouched: PropTypes.func,
//   manyKey: PropTypes.bool,
// };
