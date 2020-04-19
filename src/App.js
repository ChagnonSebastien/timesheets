import React, { Fragment } from 'react';
import EmployeeInfo from './EmployeeInfo';
import EmployeeList from './EmployeeList';

import {Row, Col, Navbar, Container, Nav} from 'react-bootstrap';

const App = ({title}) => (
  <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#employees">Employees</Nav.Link>
          <Nav.Link href="#timesheets">Timesheets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row>
        <Col xs={12} sm={12} md={5} lg={4} xl={3}>
          <EmployeeList />
        </Col>
        <Col>
          <EmployeeInfo />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

App.propTypes = {}

export default App;