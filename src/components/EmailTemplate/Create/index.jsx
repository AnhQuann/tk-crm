import React from 'react';
import Form from '../Form';

export default class EmailTemplateCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        name: '',
        title: '',
        pattern: 'ad',
        template: null,
      },
    };
  }

  render() {
    const { initialValues } = this.state;
    return (
      <div>
        <Form initialValues={initialValues} method="post" />
      </div>
    );
  }
}
