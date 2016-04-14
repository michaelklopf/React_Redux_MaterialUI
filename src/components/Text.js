/*jshint esversion: 6 */
// src/components/Text.js
import React, {PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

export default React.createClass({
  displayName: 'Text',

  propTypes: {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string
  },

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label} />
      </div>
    );
  }
});
