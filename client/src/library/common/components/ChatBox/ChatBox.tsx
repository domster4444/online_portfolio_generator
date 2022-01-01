// lib
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import socketIO from 'socket.io-client';
// import { css } from '@emotion/react';
// @ts-ignore
// import ScrollToBottom from 'react-scroll-to-bottom';

// const ROOT_CSS = css({
//   height: 600,
//   width: 400,
// });

const ENDPOINT = 'http://localhost:5000/';

const Chat = styled.section`
  max-width: 75vw;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0.5px rgba(0, 0, 0, 0.2);
`;
const ChatBoxContent = styled.main`
  padding: 0.25rem;
  max-height: 10rem;
  overflow-y: scroll;
`;
const IncommingMessage = styled.div`
  padding: 0.15rem;
  background: lightgrey;
  max-width: 20%;
  transform: translateX(350%);
`;
const OutGoingMessage = styled.div`
  padding: 0.15rem;
  background: lightgrey;
  max-width: 20%;
`;
const ChatField = styled.input`
  width: 85%;
  font-size: 2rem;
`;

const SendMessage = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
`;
const SendSection = styled.div`
  padding: 0.5rem 0rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const ChatBox = () => {
  // ?STATE
  const [name, setname] = useState('');

  const socket = socketIO(ENDPOINT, { transports: ['websocket'] });
  useEffect(() => {
    // ? SOCKET

    // !when circuit is established
    socket.on('connect', () => {
      console.log('connected to socket-server from client');
    });
    //! message from admin after successful circuit establishment
    socket.on('welcome', (data) => {
      console.log(data.user, data.message);
    });
    // !broadcast that , a new user has joined the chat to all other people except that new user
    socket.on('userJoined', (data) => {
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, []);
  const joinUser = () => {
    socket.emit('joined', { myUser: name });
  };

  return (
    <Chat>
      <mark>{name}</mark>
      <br />

      <input
        type="text"
        id="joinInput"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button type="button" onClick={joinUser}>
        JOIN
      </button>
      <header>
        <h1>Chat Box</h1>
      </header>
      <ChatBoxContent>
        <IncommingMessage>
          <div className="message__userName">
            <span>Kshitiz </span>
          </div>
          <div className="message__text">
            <p>Hello</p>
          </div>
        </IncommingMessage>

        <OutGoingMessage>
          <div className="message__userName">
            <span>Kshitiz </span>
          </div>
          <div className="message__text">
            <p>Hello</p>
          </div>
        </OutGoingMessage>
        <IncommingMessage>
          <div className="message__userName">
            <span>Kshitiz</span>
          </div>
          <div className="message__text">
            <p>Hello</p>
          </div>
        </IncommingMessage>

        <OutGoingMessage>
          <div className="message__userName">
            <span>Kshitiz </span>
          </div>
          <div className="message__text">
            <p>Hello</p>
          </div>
        </OutGoingMessage>
      </ChatBoxContent>

      <SendSection>
        <ChatField type="text" />
        <SendMessage>send</SendMessage>
      </SendSection>
    </Chat>
  );
};

export default ChatBox;
