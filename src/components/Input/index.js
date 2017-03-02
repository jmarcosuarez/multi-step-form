import React from 'react';
import Label from './Label';

const Input = ({ htmlFor, hasLabel, label, max, min, placeholder, required, step, type }) =>
  <fieldset>
    <Label
      hasLabel={hasLabel}
      htmlFor={htmlFor}
      label={label}
    />
    <input
      id={htmlFor}
      max={max || null}
      min={min || null}
      name={name || null}
      placeholder={placeholder || null}
      required={required || null}
      step={step || null}
      type={type || 'text'}
    />
  </fieldset>;

export default Input;
