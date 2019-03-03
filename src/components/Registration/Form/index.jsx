import React, { Component } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import {
  Grid,
  Button,
  Tabs,
  Tab,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import Kid, { validationSchema as kidValidationSchema } from './Kid';
import Parent from './Parent';
import Other from './Other';
import Course from './Course';

import { ROOT_API_COURSE, ROOT_API_REGISTRATION } from '../../../urls';
import { nestFmkProps } from 'fmk-utils';

let notPassKid = false;
let notPassParrent = false;
export const validationSchema = Yup.object().shape({
  // kid: kidValidationSchema.test('', function(values) {
  //   if(!values.name.last || !values.name.first || !values.mail || !values.phone || !values.facebook) {
  //     notPassKid = true;
  //   } else { notPassKid = false; }
  // }),
  // parent: parentValidationSchema.test('', function(values) {
  //   if(!values.name.last || !values.name.first || !values.mail || !values.phone || !values.address) {
  //     notPassParrent = true;
  //   } else { notPassParrent = false; }
    
  // }),
  kid: kidValidationSchema,
  // parent: parentValidationSchema
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      courses: null,
      methods: null,
      testState: null,
      testResultState: null,
      touchedCourseTab: false,
      openSnackBar: false,
    }
  }

  async componentDidMount() {
    const coursesRes = await axios.get(ROOT_API_COURSE);
    const optionsRes = await axios.get(`${ROOT_API_REGISTRATION}?options=true`);
    
    await this.setState({
      courses: coursesRes.data,
      methods: optionsRes.data.methods,
      testState: optionsRes.data.testState,
      testResultState: optionsRes.data.testResultState,
      studyStatus: optionsRes.data.studyStatus,
    });
  }

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  handleBlurTab = () => {
    this.setState({ touchedCourseTab: true });
  };

  handleClickOpenSnackBar = () => {
    this.setState({ openSnackBar: true });
  };

  handleClickOpenSnackBar = () => {
    this.setState({ openSnackBar: false });
  };


  render() {
    const {
      value,
      methods,
      courses,
      testState,
      testResultState,
      studyStatus,
      touchedCourseTab,
      openSnackBar,
    } = this.state;
    const {
      initialValues,
      classes,
      method,
      message,
    } = this.props;
    
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            axios({
              method: method,
              url: ROOT_API_REGISTRATION,
              data: values
            });
          }}
          onReset={(value)}
          render={formProps => (
            <Form>
                <Tabs value={value} onChange={this.handleChangeTab} indicatorColor="primary" textColor="primary">
                  <Tab className={notPassKid ? classes.notYetFill : classes.Filled} label="Thông tin cá nhân" />
                  <Tab className={notPassParrent ? classes.notYetFill : classes.Filled} label="Thông tin phụ huynh" />
                  <Tab label="Thông tin khác" />
                  <Tab onBlur={this.handleBlurTab} className={touchedCourseTab ? classes.Filled : classes.notYetFill} label="Khóa học" />  
                </Tabs>
              {value === 0 && <Kid {...nestFmkProps(formProps, 'kid')} />}
              {value === 1 && <Parent {...nestFmkProps(formProps, 'parent')} />} 
              {value === 2 && <Other methods={methods} {...formProps} />} 
              {value === 3 && <Course courses={courses} testState={testState} testResultState={testResultState} studyStatus={studyStatus} {...formProps} />}
              <Grid container direction="row" justify="flex-start" alignItems="flex-end"
                style={{
                  marginTop: 20,
                }}
              >
                <Button variant="contained" onClick={this.handleClickOpenSnackBar} type="submit" color="primary" size="large" style={{marginRight: 10}}>Lưu</Button>
                <Button variant="contained" type="reset" color="secondary" size="large">Tạo lại</Button>
              </Grid>
            </Form>
          )}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleCloseSnackBar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>      
    );
  }
};

const styles = theme => ({
  notYetFill: {
    color: '#ff0050'
  },
  Filled: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
})

export default withStyles(styles)(RegistrationForm);