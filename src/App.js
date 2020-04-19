import React from 'react';
import Employee from './Employee';

export default () => (
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <Employee id={0} firstName={"Michael"} lastName={"Scott"}/>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <Employee id={1} firstName={"Pam"} lastName={"Beesly"}/>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <Employee id={2} firstName={"Jim"} lastName={"Halpert"}/>
    </div>
  </div>
);