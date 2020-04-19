import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const Employee = (props) => (
  <Card>
      <Card.Body>
        {props.employeeID} - {props.firstName} {props.lastName}
      </Card.Body>
  </Card>
);

Employee.propTypes = {
  employeeID: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Employee;