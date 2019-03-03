import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import FmkTextInput from '../../FmkTextInput';
import FmkSelect from '../../FmkSelect';
import { ROOT_API_COURSE, ROOT_API_REGISTRATION } from '../../../urls';

class OtherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { values, methods } = this.props;
    if (!methods) {
      return '';
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <FmkTextInput title="Mã giảm giá" dataField="inviteCode" {...this.props} />
        </Grid>

        <Grid item xs={6}>
          <FmkSelect
            title="Hình thức đăng ký"
            dataField="method"
            items={methods}
            method
            {...this.props}
          />
        </Grid>

        <Grid item xs={6}>
          <FmkTextInput title="utm_medium" dataField="utm_medium" {...this.props} />
        </Grid>

        <Grid item xs={6}>
          <FmkTextInput title="utm_source" dataField="utm_source" {...this.props} />
        </Grid>

        <Grid item xs={6}>
          <FmkTextInput title="utm_campaign" dataField="utm_campaign" {...this.props} />
        </Grid>
      </Grid>
    );
  }
}

export default OtherForm;

// OtherForm.defaultProps = {
//   values: {},
// };

// OtherForm.propTypes = {
//   values: PropTypes.shape({}),
// };
