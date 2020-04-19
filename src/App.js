import React, { useState, Fragment } from 'react';
import Employee from './Employee';
import EmployeeInfo from './EmployeeInfo';

import {Row, Col} from 'react-bootstrap';

const App = () => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert", phoneNumber: "123-456-7890", cellphoneNumber: "012-345-6789"},
  ]);

  return (
    <Fragment>
      <Row>
        {
          employees.map(employee => (
            <Col>
              <Employee id={employee.employeeID} firstName={employee.firstName} lastName={employee.lastName}/>
            </Col>
          ))
        }
      </Row>
      <Row>
        <Col>
          <EmployeeInfo {...employees[0]}/>
        </Col>
      </Row>
    </Fragment>
  )
};

App.propTypes = {}

export default App;