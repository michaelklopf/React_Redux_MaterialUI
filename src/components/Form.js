/*jshint esversion: 6 */
// src/components/Form.js
// The root component for fields nested inside
// The component will store the data from its children
import React, {PropTypes} from 'react';

export default React.createClass({
  displayName: 'Form',

  propTypes: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
  },

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
});