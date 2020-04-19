import React, { Fragment, useState, useCallback } from 'react';
import { Row, Col, Card, Form, ListGroup } from 'react-bootstrap';

import EmployeeLabel from './EmployeeLabel';

const EmployeeList = () => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
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
      <Row>
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
          <ListGroup as="ul">
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