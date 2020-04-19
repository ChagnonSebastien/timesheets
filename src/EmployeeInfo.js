import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap'

const EmployeeInfo = (props) => (
  <Card>
    <Card.Body>
      <p>Employee ID : {props.employeeID}</p>
      <p>Name : {props.firstName} {props.lastName}</p>
      <p>Home Phone : {props.phoneNumber}</p>
      <p>Cellphone : {props.cellphoneNumber}</p>
    </Card.Body>
  </Card>
);

EmployeeInfo.propTypes = {
  employeeID: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  cellphoneNumber: PropTypes.string
}

export default EmployeeInfo;