import React from 'react';
import EmployeeInfo from './EmployeeInfo';
import EmployeeList from './EmployeeList';

import {Row, Col} from 'react-bootstrap';

const EmployeeManagement = () => (
  <Row>
    <Col xs={12} sm={12} md={5} lg={4} xl={3}>
      <EmployeeList />
    </Col>
    <Col>
      <EmployeeInfo />
    </Col>
  </Row>
);

EmployeeManagement.propTypes = {}

export default EmployeeManagement;