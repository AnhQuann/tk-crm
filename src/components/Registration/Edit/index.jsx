import React from 'react';
import axios from 'axios';
import Form from '../Form';
import { ROOT_API_REGISTRATION } from '../../../urls';


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
    };
  }

  async componentDidMount() {
    const _id = window.location.href.split('/').pop();
    const res = await axios.get(`${ROOT_API_REGISTRATION}/${_id}`);
    this.setState({ initialValues: res.data });
  }

  render() {
    const { initialValues } = this.state;
    if (!initialValues) {
      return '';
    }
    return (
      <Form
        initialValues={initialValues}
        method="put"
        message="Editing Student"
      />
    );
  }
}

export default Edit;
