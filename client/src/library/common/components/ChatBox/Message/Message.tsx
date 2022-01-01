import React from 'react';
import styled from 'styled-components';
import './Message.css';

const MessageContainer = styled.div`
  /* background: #929292; */
`;
const Message = ({ user, message, classs }: any) => {
  if (user) {
    return (
      <MessageContainer className="MessageContainer">
        <div className={`MessageContainer__message--${classs}`}>
          <span>{user}</span>
          <br />

          <span>{message}</span>
        </div>
      </MessageContainer>
    );
  }
  return (
    <MessageContainer className="MessageContainer">
      <div className={`MessageContainer__message--${classs}`}>
        <span>{user}</span>
        <br />

        <span>{message}</span>
      </div>
    </MessageContainer>
  );
};

export default Message;
