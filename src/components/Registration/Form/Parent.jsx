import React from 'react';
import { Grid } from '@material-ui/core';
import * as Yup from 'yup';
import FmkTextInput from '../../FmkTextInput';
import FmkCheckBox from '../../FmkCheckBox';

class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <FmkTextInput title="Họ" dataField="name.last" isValidate {...this.props} />
          </Grid>

          <Grid item xs={6}>
            <FmkTextInput title="Tên" dataField="name.first" isValidate {...this.props} />
          </Grid>

          <Grid item xs={12}>
            <FmkTextInput title="Địa chỉ Email" dataField="mail" isValidate {...this.props} />
          </Grid>

          <Grid item xs={12}>
            <FmkTextInput title="Số điện thoại" dataField="phone" isValidate {...this.props} />
          </Grid>

          <Grid item xs={12}>
            <FmkTextInput title="Nghề nghiệp, nơi công tác" dataField="institude" isValidate {...this.props} />
          </Grid>

          <Grid item xs={12}>
            <FmkTextInput title="Địa chỉ nhà" dataField="address" isValidate {...this.props} />
          </Grid>

          {/* <Grid item xs={4}>
            <p>Techkids có thể liên hệ với học sinh hay phụ huynh để trao đổi?</p>
          </Grid> */}

          {/* <Grid item xs={2}>
            <FmkCheckBox dataField="contactStudent" title="Học viên" {...this.props} />
          </Grid>

          <Grid item xs={2}>
            <FmkCheckBox dataField="contactParent" title="Phụ huynh" {...this.props} />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// export const validationSchema = Yup.object().shape({
//   name: Yup.object().shape({
//     last: Yup.string().required('Không được để trống'),
//     first: Yup.string().required('Không được để trống'),
//   }),
//   phone: Yup.string()
//     .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
//     .required('Không được để trống'),
//   mail: Yup.string()
//     .email('Email không đúng định dạng')
//     .required('Không được để trống'),
//   address: Yup.string().required('Không được để trống'),
// });

export default ParentForm;
