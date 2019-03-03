import React from 'react';
import { Create, Book, Email } from '@material-ui/icons';
import { TKDrawer, TKAppbar } from 'tk-admin';
import RegistrationTable from './components/Registration/RegistrationTable';
import RegistrationCreate from './components/Registration/Create';
import RegistrationEdit from './components/Registration/Edit';
import EmailTemplate from './components/EmailTemplate';
import EmailTemplateCreate from './components/EmailTemplate/Create';
import EmailTemplateEdit from './components/EmailTemplate/Edit';

const panels = [
  {
    view: () => (<RegistrationEdit />),
    link: '/registration/edit',
    noMenu: true,
  },
  {
    icon: <Create />,
    title: 'Tạo đơn đăng ký',
    view: () => (<RegistrationCreate />),
    link: '/registration/create',
  },
  {
    icon: <Book />,
    title: 'Tất cả đơn đăng ký',
    view: () => (<RegistrationTable />),
    link: '/registration',
  },
  {
    view: () => (<EmailTemplateEdit />),
    link: '/email/edit',
    noMenu: true,
  },
  {
    view: () => (<EmailTemplateCreate />),
    link: '/email/create',
    noMenu: true,
  },
  {
    icon: <Email />,
    title: 'Mẫu email',
    view: () => (<EmailTemplate />),
    link: '/email',
  },
];

const styles = {
  colorAppbar: 'secondary',
  colorTitle: '#fff',
};

export default () => (
  <div>
    <TKDrawer
      style={styles}
      panels={panels}
      renderAppbar={() => (
        <TKAppbar
          title="CRM"
        />
      )}
    />
  </div>
);
