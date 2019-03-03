import React from 'react';
import { Formik, Form } from 'formik';
import { Grid } from '@material-ui/core';
import FmkSelect from '../../FmkSelect';
import FmkTextInput from '../../FmkTextInput';

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Formik>
        <Form>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <FmkSelect
                title="Khóa học"
                dataField=":|"
                items={['Full stack development', 'Code for Everyone']}
                manyKey={false}
                {...this.props}
              />
            </Grid>
            <Grid item xs={6}>
              <FmkTextInput title="Tiền học" dataField="money" isOnlyNumber isValidate {...this.props} />
            </Grid>

          </Grid>
        </Form>
      </Formik>
    );
  }
}

export default CourseForm;
