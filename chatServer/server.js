// http for socket.io
const http = require('http');
const socketIO = require('socket.io');

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); //? allow body parsing

app.get('/', (req, res) => {
  res.send('hell its working');
});
//?socket.io
const users = [{}];
const server = http.createServer(app);
const io = socketIO(server);
app.get('/', (req, res) => {
  res.send('chat server working fine');
});
//todo :-------------when socketio circuit is on ;-)
io.on('connection', (socket) => {
  //!_____io.on = our circuit [for establishing circuit]
  //? == after circuit is established
  console.log('circuit established --serverTerminalMsg');

  //! message from admin after successful circuit establishment
  //? == send message to client through socket, when user Has Joined The Chat Room
  socket.emit('welcome', {
    user: 'Admin',
    message: `welcome to the chat`,
  });

  socket.on('joined', ({ myUser }) => {
    //!____ socket.on= our different user
    //? == after a user joins
    users[socket.id] = myUser;
    console.log(`${myUser} has just joined the chat in --serverTerminalMsg`);
    //?socket.broadcast func is written inside socket.on('joinned') because this broadcast must only be done when some user joins

    //!broadcast that , a new user has joined the chat to other people except that new user
    socket.broadcast.emit('userJoined', {
      user: 'Admin',
      message: `${users[socket.id]} has just joined the chat`,
    });
  });
  //! on message get from client
  socket.on('message', ({ message, id }) => {
    io.emit('message', { user: users[id], message, id });
  });

  //! user disconnects
  socket.on('disconnect', () => {
    //!broadcast that , a new user has left the chat to other people
    socket.broadcast.emit('userLeft', {
      user: 'Admin',
      message: `${users[socket.id]} has left the chat`,
    });
    console.log(`${users[socket.id]} just left the chat`);
  });
});

const PORT = 5005;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
