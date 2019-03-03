import React, { Component } from 'react';
// import axios from 'axios';
import defaultValues from '../defaultValues';
import Form from '../Form';
// import { ROOT_API_REGISTRATION } from '../../../urls';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialValues: null
    };
  }

  // async componentDidMount() {
  //   const res = await axios.get(`${ROOT_API_REGISTRATION}?default=true`);
  //   console.log(res);

  //   await this.setState({ initialValues: res.data });
  // }

  render() {
    // const { initialValues } = this.state;
    return (
      <Form
        initialValues={defaultValues}
        method="post"
        message="Creating student"
      />
    );
  }
}

export default Create;
