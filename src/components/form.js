import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({messageValue, update, sendMessage}) =>
  <div className="form">
    <input
      onChange={update}
      name="message"
      value={messageValue}
      type="text"
      placeholder="message" />
    <button onClick={sendMessage}>Send message</button>
  </div>;

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
