import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import FmkTextInput from '../../FmkTextInput';
import FmkSelect from '../../FmkSelect';


class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { courses, testState, testResultState, studyStatus } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <FmkTextInput title="Mã số đăng ký" dataField="code" disable {...this.props} />
          </Grid>

          <Grid item xs={6}>
            <FmkSelect
              title="Khóa đăng ký"
              dataField="courses[0].course"
              items={courses}
              course
              {...this.props}
            />
          </Grid>

          <Grid item xs={6}>
            <FmkSelect
              title="Tình trạng đầu vào + Phỏng vấn"
              dataField="courses[0].testState.state"
              items={testState}
              state
              {...this.props}
            />
          </Grid>
          <Grid item xs={6}>
            <FmkSelect
              title="Kết quả thi đầu vào + Phỏng vấn"
              dataField="courses[0].testResultState.state"
              items={testResultState}
              state
              {...this.props}
            />
          </Grid>
          <Grid item xs={12}>
            <FmkSelect
              title="Tình trạng nhập học"
              dataField="courses[0].studyStatus.status"
              items={studyStatus}
              state
              {...this.props}
            />
          </Grid>
          <Grid item xs={12}>
            <FmkTextInput title="Ghi chú của Sales" dataField="courses[0].comment.noteSales" {...this.props} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CourseForm;

CourseForm.defaultProps = {
  values: {},
  courses: [],
};

CourseForm.propTypes = {
  values: PropTypes.shape({}),
  courses: PropTypes.arrayOf(PropTypes.shape({})),
};
