import React, { Fragment, useState, useCallback } from 'react';
import { Row, Col, Card, Form, ListGroup } from 'react-bootstrap';

import EmployeeLabel from './EmployeeLabel';

const EmployeeList = () => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott", formerEmployee: true},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly", formerEmployee: false},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert", formerEmployee: false},
    {employeeID: 3, firstName: "Dwight", lastName: "Schrute", formerEmployee: false},
    {employeeID: 4, firstName: "Kevin", lastName: "Malone", formerEmployee: false},
    {employeeID: 5, firstName: "Stanley", lastName: "Hudson", formerEmployee: false},
    {employeeID: 6, firstName: "Angela", lastName: "Martin", formerEmployee: false},
    {employeeID: 7, firstName: "Phyllis", lastName: "Vance", formerEmployee: false},
    {employeeID: 8, firstName: "Meredith", lastName: "Palmer", formerEmployee: false},
    {employeeID: 9, firstName: "Creed", lastName: "Bratton", formerEmployee: false},
    {employeeID: 10, firstName: "Oscar", lastName: "Martinez", formerEmployee: false},
    {employeeID: 11, firstName: "Ryan", lastName: "Howard", formerEmployee: false},
    {employeeID: 12, firstName: "Kelly", lastName: "Kapoor", formerEmployee: false},
    {employeeID: 13, firstName: "Andy", lastName: "Bernard", formerEmployee: false},
    {employeeID: 14, firstName: "Toby", lastName: "Flenderson", formerEmployee: false},
    {employeeID: 15, firstName: "Darryl", lastName: "Philbin", formerEmployee: false},
    {employeeID: 16, firstName: "Erin", lastName: "Hannon", formerEmployee: false},
  ]);

  const [employeeFilter, setEmployeeFilter] = useState({
    filter: "",
    formerEmployees: false
  });

  const filterChangedHandle = useCallback(event => {
    const newFilter = {...employeeFilter}
    newFilter.filter = event.target.value;
    setEmployeeFilter(newFilter);
  }, [employeeFilter]);

  const formerEmployeesChangedHandle = useCallback(event => {
    const newFilter = {...employeeFilter}
    newFilter.formerEmployees = event.target.checked;
    setEmployeeFilter(newFilter);
  }, [employeeFilter]);

  return (
    <Fragment>
      <Row className='mb-3'>
        <Col>
          <Card>
            <Card.Body>
              <Form>

                <Form.Group controlId="employeeFilter">
                  <Form.Control type="text" placeholder="Filter" onChange={filterChangedHandle} value={employeeFilter.filter} />
                </Form.Group>

                <Form.Group controlId="formerEmployeeFilter" style={{marginBottom: 0}}>
                  <Form.Check type="checkbox" label="Former Employees" onClick={formerEmployeesChangedHandle} value={employeeFilter.filter} />
                </Form.Group>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup as="ul" style={{height: '300px', overflowY: 'auto'}}>
            {
              employees
              .filter(employee => {
                if (!employeeFilter.formerEmployees && employee.formerEmployee) return false;
                
                return employee.firstName.toLowerCase().includes(employeeFilter.filter.toLowerCase()) ||
                employee.lastName.toLowerCase().includes(employeeFilter.filter.toLowerCase()) ||
                employee.employeeID.toString().includes(employeeFilter.filter);
              })
              .map(employee => (
                <ListGroup.Item as="li" key={employee.employeeID}>
                  <EmployeeLabel employeeID={employee.employeeID} firstName={employee.firstName} lastName={employee.lastName}/>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </Fragment>
  );

};

EmployeeList.propTypes = {};

export default EmployeeList;