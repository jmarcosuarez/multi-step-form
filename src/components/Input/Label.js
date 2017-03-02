import React from 'react';

const Label = ({ htmlFor, label }) =>
  <div>
    <label htmlFor={htmlFor}>{label}</label>
  </div>;

export default Label;
