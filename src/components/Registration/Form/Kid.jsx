import React from 'react';
import * as Yup from 'yup';
import { Grid } from '@material-ui/core';
import FmkTextInput from '../../FmkTextInput';
import FmkCalendar from '../../FmkCalendar';

class KidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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

        <Grid item xs={6}>
          <FmkCalendar title="Ngày sinh" dataField="dob" {...this.props} />
        </Grid>

        <Grid item xs={6}>
          <FmkTextInput title="Link Facebook" dataField="facebook" {...this.props} />
        </Grid>

        <Grid item xs={12}>
          <FmkTextInput title="Nơi học tập, công tác" dataField="institude" {...this.props} />
        </Grid>

        <Grid item xs={12}>
          <FmkTextInput title="Thành tích học tập, làm việc nổi bật (nếu có)" dataField="experience" {...this.props} />
        </Grid>
      </Grid>
    );
  }
}

export default KidForm;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  name: Yup.object().shape({
    first: Yup.string().required('Không được để trống').nullable(),
    last: Yup.string().required('Không được để trống'),
  }),
  mail: Yup.string()
    .email('Email không đúng định dạng')
    .required('Không được để trống'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .required('Không được để trống'),
});
