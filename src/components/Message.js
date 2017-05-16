import React from 'react';

export const Message = ({data}) =>
  <div className="message-container">
    <div className="message-picture">
      <img src={data.picture} alt="User avatar"/>
    </div>
    <div className="message-text">
      <p>{data.message}</p>
    </div>
    <div className="message-date">
      <p>{data.createdAt}</p>
    </div>
  </div>;
