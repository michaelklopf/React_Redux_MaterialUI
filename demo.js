/*jshint esversion: 6 */
// demo.js
import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Text} from './src/index';

ReactDOM.render((
  <Form>
    <Text
      name="name"
      placeholder="Type your name here"
      label="Your name" />
  </Form>
), document.getElementById('container'));
