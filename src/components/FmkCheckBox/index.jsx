import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

const FmkCheckBox = (props) => {
  const {
    dataField,
    title,
    values,
    setFieldValue,
  } = props;
  const fmkValue = _.get(values, dataField);
  const fmkHandleChange = (event) => {
    setFieldValue(dataField, event.target.checked);
  };

  return (
    <FormControlLabel
      control={(
        <Checkbox
          name={dataField}
          value={dataField}
          checked={fmkValue}
          color="primary"
          onChange={fmkHandleChange}
        />
      )}
      label={title}
    />
  );
};


export default FmkCheckBox;

FmkCheckBox.defaultProps = {
  dataField: '',
  title: '',
  values: {},
  setFieldValue: () => {},
};

FmkCheckBox.propTypes = {
  dataField: PropTypes.string,
  title: PropTypes.string,
  values: PropTypes.shape({}),
  setFieldValue: PropTypes.func,
};
