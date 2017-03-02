import React, { Component } from 'react';
import Input from '../../../../components/Input';
import styles from './Step1.css';

class Step1 extends Component { /* eslint react/prefer-stateless-function: 0 */
  render() {
    return (
      <div className={styles.step1}>
        <p>This is Step1</p>
        <form method="" action="">

          <Input
            hasLabel="true"
            htmlFor="emailInput"
            label="Email input"
            required="true"
            type="email"
          />

        </form>
      </div>
    );
  }

}

export default Step1;
