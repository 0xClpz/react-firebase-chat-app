import React from 'react';
import {Message} from "./Message";
import PropTypes from 'prop-types';

export const MessageList = ({messages}) =>
  <div className="message-list">
    {messages.map(message => <Message data={message} />)}
  </div>;

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    message: PropTypes.text,
    createdAt: PropTypes.number
  })).isRequired
};

MessageList.defaultProps = {
  messages: []
};
