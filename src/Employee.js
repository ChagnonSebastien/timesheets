import React from 'react';

export default ({employeeID, firstName, lastName}) => (
    <div className="card">
        <p>{employeeID} - {firstName} {lastName}</p>
    </div>
);