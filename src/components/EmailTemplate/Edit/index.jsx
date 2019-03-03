import React from 'react';
import axios from 'axios';
import Form from '../Form';
import { ROOT_API_EMAIL } from '../../../urls';

export default class EmailTemplateEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: null,
    };
  }

  async componentDidMount() {
    const _id = window.location.href.split('/').pop();
    const res = await axios.get(`${ROOT_API_EMAIL}/${_id}`);
    this.setState({ initialValues: res.data });
  }

  render() {
    const { initialValues } = this.state;
    if (!initialValues) {
      return '';
    }
    return (
      <div>
        <Form initialValues={initialValues} method="put" />
      </div>
    );
  }
}
