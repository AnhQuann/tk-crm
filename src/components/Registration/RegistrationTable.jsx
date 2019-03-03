import React from 'react';
import { withRouter } from 'react-router';
import {
  TableCell,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {
  TKDataTable,
  createProvideDataPage,
  createProvideInputOptions,
  TKDataDropdown,
  TKTableToolbar,
  createDeleteOne,
} from 'tk-admin';
import { ROOT_API_COURSE, ROOT_API_REGISTRATION } from '../../urls';

const provideRegistration = createProvideDataPage(ROOT_API_REGISTRATION);
const provideResourceOptions = createProvideInputOptions(ROOT_API_COURSE, 'name', '_id');
const deleteOne = createDeleteOne(ROOT_API_REGISTRATION);

const ISODateToShortDate = (str) => {
  const date = new Date(str);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  if (dt < 10) {
    dt = `0${dt}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  return `${dt} - ${month} - ${year}`;
};

const checkRegex = (str) => {
  const rule = /.+www.facebook.com\/[^/]+$/;
  return rule.test(str);
};

class RegistrationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openDialog = () => {
    console.log("hihi");
  }

  render() {
    const { history } = this.props;
    return (
      <TKDataTable
        headers={[
          {
            title: 'Tên',
            dataField: 'kid.fullName',
            sortable: true,
          },
          {
            title: 'Lớp vào học',
            dataField: 'courses',
            renderDataCell: (props) => {
              const courses = [];
              props.value.forEach((item) => {
                if (item.studyStatus.status === 'studying' || item.studyStatus.status === 'quit') {
                  courses.push({
                    name: item.course.encodeName,
                    color: '#9e9e9e',
                  });
                } else if (item.studyStatus.status === 'defer') {
                  courses.push({
                    name: item.course.encodeName,
                    color: '#ffeb3b',
                  });
                } else if (item.studyStatus.status === 'notStartedYet') {
                  if (item.testResultState.state === 'km-menu-filterbar-testresultstatus-notyet') {
                    courses.push({
                      name: item.course.encodeName,
                      color: '#f44336',
                    });
                  } else if (item.testResultState.state === 'km-menu-filterbar-testresultstatus-testpass') {
                    courses.push({
                      name: item.course.encodeName,
                      color: '#8bc34a',
                    });
                  } else if (item.testResultState.state === 'km-menu-filterbar-testresultstatus-testfail') {
                    courses.push({
                      name: item.course.encodeName,
                      color: '#ffeb3b',
                    });
                  }
                }
              });
              return (
                <TableCell key={props.key}>
                  {courses.map((course, index) => <Button onClick={(event) => {
                    event.stopPropagation();
                    // <Dialog open="true">
                    //   <DialogTitle>Hello</DialogTitle>
                    // </Dialog>
                  }} id={index} variant="contained" size="small" style={{ backgroundColor: course.color, marginRight: 5 }}>{course.name} </Button>)}
                </TableCell>
              );
            },
          },
          {
            title: 'Thời gian',
            dataField: 'courses',
            sortable: true,
            renderDataCell: (props) => {
              const time = [];
              props.value.map(item => time.push(item.time));
              const maxTime = time
                .reduce((prev, current) => (prev.date > current.date ? prev : current));
              return (
                <TableCell key={props.key}>
                  {ISODateToShortDate(maxTime)}
                </TableCell>
              );
            },
          },
          {
            title: 'Số điện thoại',
            dataField: 'kid.phone',
            sortable: true,
          },
          {
            title: 'Link Facebook',
            dataField: 'kid.facebook',
            sortable: true,
            renderDataCell: props => (
              <TableCell key={props.key}>
                <Typography>
                  <Link href={checkRegex(props.value) ? props.value : '#'}>Link facebook</Link>
                </Typography>
              </TableCell>
            ),
          },
        ]}
        provide={provideRegistration}
        renderToolbar={props => (
          <TKTableToolbar
            filterConfigs={[{
              filterField: 'course',
              provide: provideResourceOptions,
              render: prop => <TKDataDropdown title="Course" {...prop} />,
            }]}
            {...props}
          />
        )}
        onRowClick={item => history.push(`/registration/edit/${item._id}`)}
        deleteOne={deleteOne}
      />
    );
  }
}

const EditWithRouter = withRouter(RegistrationTable);

export default EditWithRouter;
