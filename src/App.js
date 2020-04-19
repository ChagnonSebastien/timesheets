import React, { useState } from 'react';
import Employee from './Employee';

export default () => {

  const [employees] = useState([
    {employeeID: 0, firstName: "Michael", lastName: "Scott"},
    {employeeID: 1, firstName: "Pam", lastName: "Beesly"},
    {employeeID: 2, firstName: "Jim", lastName: "Halpert"},
  ]);

  return (
    <div class="row">
      {
        employees.map(employee => (
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <Employee id={employee.employeeID} firstName={employee.firstName} lastName={employee.lastName}/>
          </div>
        ))
      }
    </div>
  )
};