import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RootScreen extends PureComponent {
  render() {
    const { string } = this.props;
    return <div>{string}</div>;
  }
}

RootScreen.propTypes = {
  string: PropTypes.string
};

RootScreen.defaultProps = {
  string: 'This is root screen'
};

export default RootScreen;
