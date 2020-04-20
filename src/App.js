import React, { Fragment } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

import EmployeeManagement from './EmployeeManagement';

const App = ({title}) => (
  <Fragment>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#employees">Employees</Nav.Link>
            <Nav.Link href="#timesheets">Timesheets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='mt-3'>
      <EmployeeManagement />
    </Container>
  </Fragment>
);

App.propTypes = {}

export default App;