import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import EmailEditor from 'react-email-editor';
import axios from 'axios';
import * as Yup from 'yup';
import FmkTextInput from '../../FmkTextInput';
import FmkSelect from '../../FmkSelect';

import { ROOT_API_EMAIL } from '../../../urls';

export default class EmailTemplateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: null,
      patterns: null,
      editor: null,
    };
  }

  saveDesign = (name, title, pattern) => {
    this.editor.saveDesign(template => {
      // this.setState({
      //   values: {
      //     name: name,
      //     title: title,
      //     pattern: pattern,
      //     template: template
      //   }
      // })
      this.props.initialValues.name = name;
      this.props.initialValues.title = title;
      this.props.initialValues.pattern = pattern;
      this.props.initialValues.template = template;
      axios({
        method: this.props.method,
        url: ROOT_API_EMAIL,
        // data: this.state.values,
        data: this.props.initialValues,
      });
    })
  }

  loadDesign = () => {
    setTimeout(() => {
      // console.log(this.editor)
      this.editor.loadDesign(this.props.initialValues.template);
    }, 0);
    // window.unlayer.loadDesign(this.props.initialValues.template)
    // console.log(this.props.initialValues.template);
    
  }
  
  async componentDidMount() {
    const patterns = await axios.get(`${ROOT_API_EMAIL}?options=true`);
    this.setState({ patterns: patterns.data.patterns });
  }

  render() {
    const { initialValues, method } = this.props;
    const { patterns } = this.state;
    if (!patterns) {
      return '';
    }
    console.log(initialValues)
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => { 
          this.saveDesign(values.name, values.title, values.pattern);
         }}
        render={formProps => (
          <Form>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <FmkTextInput title="Tên email" dataField="name" isValidate {...formProps} />
              </Grid>
              <Grid item xs={12}>
                <FmkTextInput title="Tiêu đề email" dataField="title" isValidate {...formProps} />
              </Grid>
              <Grid item xs={12}>
                <FmkSelect
                  title="Loại Email"
                  dataField="pattern"
                  items={patterns}
                  state
                  {...formProps}
                />
              </Grid>
              <Grid item xs={12}>
                <EmailEditor
                  ref={ editor => this.editor = editor }
                  // onDesignLoad={this.onLoadDesign}
                  onLoad={this.loadDesign}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" size="large" style={{ marginRight: 10 }}>Lưu mẫu email</Button>
                <Button variant="contained" color="secondary" size="large">Gửi email</Button>
              </Grid>
            </Grid>
          </Form>
        )}
      />
    );
  }
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Không được để trống'),
  title: Yup.string().required('Không được để trống'),  
});
