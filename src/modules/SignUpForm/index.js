import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Step1 from './components/Step1';

import styles from './SignUpForm.css';

class List extends React.Component {

  componentDidUpdate() {
  }

  render() {
    return (
      <div className={styles.signupform}>
        <p>This is SignUpForm</p>
        {this.props.children || <Step1 />}
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

List.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
