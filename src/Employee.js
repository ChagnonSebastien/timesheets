import React from 'react';
import PropTypes from 'prop-types';

const Employee = (props) => (
  <div style={{display: 'flex'}}>
    <div style={{float: 'left', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle'}}>
        {props.employeeID}&nbsp;-&nbsp;
    </div>
    <div>
      {props.firstName} {props.lastName}
    </div>
  </div>
);

Employee.propTypes = {
  employeeID: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Employee;