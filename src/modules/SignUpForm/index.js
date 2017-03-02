import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import Step2 from './components/Step2';

import styles from './SignUpForm.css';

class SignUpForm extends React.Component {/* eslint react/prefer-stateless-function: 0 */
  static contextTypes = { router: React.PropTypes.object }
  navigateToPage = () => {
    const currentLocation = this.props.location.pathname;
    let newPath;
    switch (currentLocation) {
      case '/step1':
        newPath = '/step2';
        break;
      case '/step2':
        newPath = '/step3';
        break;
      case '/step3':
        newPath = '/step4';
        break;
      case '/step4':
        newPath = '/step5';
        break;
      case '/step5':
        console.log('last card met');
        break;
      default:
        break;
    }
    if (newPath) {
      browserHistory.push(newPath);
    }
  };
  render() {
    return (
      <div className={styles.signupform}>
        <p>This is SignUpForm</p>
        {this.props.children}
        <button onClick={this.navigateToPage}>Next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

SignUpForm.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
