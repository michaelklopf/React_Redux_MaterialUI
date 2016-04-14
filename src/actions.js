/*jshint esversion: 6 */
// src/actions.js
// action creators, that return callbacks for dispatching an action
import * as c from './constants';

export function update(name, value) {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name,
    value
  });
}

export function reset() {
  return dispatch => dispatch({
    type: c.FORM_RESET
  });
}
