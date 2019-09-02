import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Root extends PureComponent {
  render() {
    const { string } = this.props;
    return <div style={{ display: 'flex', height: '100vh' }}>{string}</div>;
  }
}

Root.propTypes = {
  string: PropTypes.string
};

Root.defaultProps = {
  string: 'This is root screen'
};

export default Root;
