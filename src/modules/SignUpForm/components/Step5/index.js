import React, { Component } from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import styles from './Step5.css';

class Step5 extends Component {/* eslint react/prefer-stateless-function: 0 */
  render() {
    return (
      <div className={styles.step5}>
        <p>This is Step5</p>
        <form method="" action="">

          <Input
            hasLabel="true"
            htmlFor="textInput"
            label="Text input"
            required="true"
            type="text"
          />

          <Input
            hasLabel="true"
            htmlFor="emailInput"
            label="Email input"
            required="true"
            type="email"
          />

          <Input
            hasLabel="true"
            htmlFor="numberInput"
            label="Number input"
            required="true"
            type="number"
            min="0.5"
            max="100"
            step="0.5"
          />

          <Input
            hasLabel="true"
            htmlFor="passwordInput"
            label="Password input"
            required="true"
            type="password"
          />

          <Button
            type="submit"
            value="submit"
            text="Send form"
          />

        </form>
      </div>
    );
  }

}

export default Step5;
