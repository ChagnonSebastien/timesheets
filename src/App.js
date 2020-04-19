import React, { useState, Fragment } from 'react';
import Employee from './Employee';

import {Row, Col} from 'react-bootstrap';

const App = () => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott"},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly"},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert"},
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
    </Fragment>
  )
};

App.propTypes = {}

export default App;