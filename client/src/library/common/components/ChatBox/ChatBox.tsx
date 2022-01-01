// lib
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import socketIO from 'socket.io-client';
import ScrollableFeed from 'react-scrollable-feed';
import Message from 'library/common/components/ChatBox/Message/Message';

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
  /* overflow-y: scroll; */
`;
// const IncommingMessage = styled.div`
//   padding: 0.15rem;
//   margin: 0.5rem 0rem;
//   background: lightgrey;
//   max-width: 20%;
//   transform: translateX(350%);
// `;
// const OutGoingMessage = styled.div`
//   padding: 0.15rem;
//   background: lightgrey;
//   max-width: 20%;
// `;
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
const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

// ? TYPES
type MessageObjTypes = {
  message: string;
  user: string;
  classs: string;
  id: string;
};

const ChatBox = () => {
  // ?STATE
  const [name, setname] = useState('');
  const [id, setId] = useState('');
  const [messageToSend, setMessageToSend] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // ? SOCKET
    // !when circuit is established
    socket.on('connect', () => {
      console.log('connected to socket-server from client');
      setId(socket.id);
    });
    //! message from admin after successful circuit establishment
    socket.on('welcome', (data) => {
      // @ts-ignore
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    // !broadcast that , a new user has joined the chat to all other people except that new user
    socket.on('userJoined', (data) => {
      // @ts-ignore
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    //! broadcast that , a  user has left the chat to all other
    socket.on('userLeft', (data) => {
      // @ts-ignore
      setMessages([...messages, data]);
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
  // change state of message to send on change of input
  const updateMessage = (e: any) => {
    // @ts-ignore
    setMessageToSend(e.target.value);
  };
  // send message to socket server
  const sendMessage = () => {
    //! send message to socket server
    socket.emit('message', { message: messageToSend, id });
  };

  useEffect(() => {
    socket.on('message', (data) => {
      // @ts-ignore
      setMessages([...messages, data]);
      console.log(data.user);
      console.log(data.message);
      console.log(data.id);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

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
        <ScrollableFeed>
          {/* //todo: messageObj contains user,message,id  */}
          {messages.map((messageObj: MessageObjTypes, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                <Message
                  user={messageObj.id === id ? 'You' : messageObj.user}
                  message={messageObj.message}
                  classs={messageObj.id === id ? 'right' : 'left'}
                />
              </div>
            );
          })}
        </ScrollableFeed>
      </ChatBoxContent>

      <SendSection>
        <ChatField
          type="text"
          onChange={(e) => {
            updateMessage(e);
          }}
          onKeyPress={(e) => {
            // eslint-disable-next-line no-unused-expressions
            e.key === 'Enter' ? sendMessage() : null;
          }}
        />
        <SendMessage onClick={sendMessage}>send</SendMessage>
      </SendSection>
    </Chat>
  );
};

export default ChatBox;
