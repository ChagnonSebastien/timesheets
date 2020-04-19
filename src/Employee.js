import React from 'react';
import PropTypes from 'prop-types';

const Employee = (props) => (
    <div className="card">
        <p>{props.employeeID} - {props.firstName} {props.lastName}</p>
    </div>
);

Employee.propTypes = {
    employeeID: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default Employee;