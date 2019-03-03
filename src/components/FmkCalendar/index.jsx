import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  TextField,
  FormControl,
} from '@material-ui/core';

const convertDate = (ISODate) => {
  const date = new Date(ISODate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${dt}`;
};

const FmkCalendar = (props) => {
  const {
    dataField, title, values, handleChange,
  } = props;

  const fmkValue = _.get(values, dataField);

  return (
    <FormControl fullWidth>
      <TextField
        id="date"
        label={title}
        type="date"
        name={dataField}
        value={convertDate(fmkValue)}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormControl>
  );
};


export default FmkCalendar;

FmkCalendar.defaultProps = {
  dataField: '',
  title: '',
  values: {},
  handleChange: () => {},
};

FmkCalendar.propTypes = {
  dataField: PropTypes.string,
  title: PropTypes.string,
  values: PropTypes.shape({}),
  handleChange: PropTypes.func,
};
