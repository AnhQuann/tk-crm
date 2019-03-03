import React from 'react';
import { withRouter } from 'react-router';
import {
  TKDataTable,
  TKTableToolbar,
  TKDataDropdown,
  createProvideDataPage,
  createDeleteOne,
  createProvideInputOptions,
} from 'tk-admin';
import { ROOT_API_EMAIL } from '../../urls';

const provideEmail = createProvideDataPage(ROOT_API_EMAIL);
const provideResourceOptions = createProvideInputOptions(`${ROOT_API_EMAIL}?options=true`, 'patterns.label', 'patterns.value');
const deleteOne = createDeleteOne(ROOT_API_EMAIL);

class EmailTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <TKDataTable
          headers={[
            {
              title: 'Tên email',
              dataField: 'name',
            },
            {
              title: 'Tiêu đề email',
              dataField: 'title',
            },
            {
              title: 'Loại email',
              dataField: 'pattern',
            },
          ]}
          provide={provideEmail}
          renderToolbar={props => (
            <TKTableToolbar
              filterConfigs={[{
                filterField: 'pattern',
                provide: provideResourceOptions,
                render: prop => <TKDataDropdown title="Email Type" {...prop} />,
              }]}
              onCreate={() => history.push('/email/create')}
              {...props}
            />
          )}
          onRowClick={item => history.push(`/email/edit/${item._id}`)}
          deleteOne={deleteOne}
        />
      </div>
    );
  }
}

const EditWithRouter = withRouter(EmailTemplate);

export default EditWithRouter;
