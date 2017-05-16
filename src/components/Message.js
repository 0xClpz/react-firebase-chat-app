import React from 'react';
import moment from 'moment';

export const Message = ({data}) =>
  <div className="message-container">
    <div className="message-picture">
      <img src={data.picture} alt="User avatar"/>
    </div>
    <div className="message">
      <div className="message-text">
        <p><strong>{data.name}: </strong>{data.message}</p>
      </div>
      <div className="message-date">
        <p>{moment(data.createdAt).format('MMMM Do YYYY, h:mm')}</p>
      </div>
    </div>
  </div>;
