import React, { useState, Fragment } from 'react';
import Employee from './Employee';
import EmployeeInfo from './EmployeeInfo';

import {Row, Col, Navbar, Container, Nav, ListGroup} from 'react-bootstrap';

const App = ({title}) => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
  ]);

  return (
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
            <ListGroup as="ul">
              {
                employees.map(employee => (
                  <ListGroup.Item as="li">
                    <Employee employeeID={employee.employeeID} firstName={employee.firstName} lastName={employee.lastName}/>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </Col>
          <Col>
            <EmployeeInfo {...employees[0]}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
};

App.propTypes = {}

export default App;