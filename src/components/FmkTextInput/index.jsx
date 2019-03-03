import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  InputLabel,
  Input,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

const FmkTextInput = (props) => {
  const {
    dataField,
    title,
    errors,
    values,
    touched,
    isValidate,
    isOnlyNumber,
    setFieldValue,
    setFieldTouched,
    disable
  } = props;
  const fmkError = _.get(errors, dataField);
  const fmkTouched = _.get(touched, dataField);
  const fmkValue = _.get(values, dataField);
  const fmkHandleChange = (newValue) => {
    setFieldValue(dataField, newValue);
  };
  const fmkHandleBlur = () => setFieldTouched(dataField);

  return (
    <FormControl fullWidth error={isValidate && fmkError && fmkTouched}>
      <InputLabel>{title}</InputLabel>
      <Input
        name={dataField}
        value={fmkValue}
        onChange={e => fmkHandleChange(e.target.value)}
        disabled={disable}
        onBlur={fmkHandleBlur}
        type={isOnlyNumber && 'number'}
      />
      {isValidate && fmkError && fmkTouched && (
        <FormHelperText>{fmkError}</FormHelperText>
      )}
    </FormControl>
  );
};


export default FmkTextInput;

// FmkTextInput.defaultProps = {
//   dataField: '',
//   title: '',
//   errors: {},
//   values: {},
//   touched: {},
//   isValidate: false,
//   isOnlyNumber: false,
//   setFieldValue: () => {},
//   setFieldTouched: () => {},
// };

// FmkTextInput.propTypes = {
//   dataField: PropTypes.string,
//   title: PropTypes.string,
//   errors: PropTypes.shape({}),
//   values: PropTypes.shape({}),
//   touched: PropTypes.shape({}),
//   isValidate: PropTypes.bool,
//   isOnlyNumber: PropTypes.bool,
//   setFieldValue: PropTypes.func,
//   setFieldTouched: PropTypes.func,
// };
