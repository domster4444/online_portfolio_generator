// http for socket.io
const http = require('http');
const socketIO = require('socket.io');

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const globalErrorHandler = require('./middleware/errorMiddleware');
const passwordResetRoutes = require('./routes/passwordResetRoutes');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoute');
const connectDB = require('./config/db');
dotenv.config();
// connect to the database
connectDB(); //? connect db
const app = express();
app.use(cors());
app.use(express.json()); //? allow body parsing

//? root route
app.use('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

//? routes

app.use('/api/users', userRoutes);
app.use('/api/users', testRoutes);
app.use('/account', passwordResetRoutes);

//?global error handler
app.use(globalErrorHandler);

//?socket.io
const users = [{}];
const server = http.createServer(app);
const io = socketIO(server);
//todo :-------------when socketio circuit is on ;-)
io.on('connection', (socket) => {
  //!_____io.on = our circuit [for establishing circuit]
  //? == after circuit is established
  console.log('circuit established');
  //! message from admin after successful circuit establishment
  //? == send message to client through socket, when circuit is established
  socket.emit('welcome', { user: 'Admin', message: 'welcome to the chat' });
  socket.on('joined', ({ myUser }) => {
    //!____ socket.on= our different user
    //? == after a user joins
    users[socket.id] = myUser;
    console.log(`${myUser} has just joined the chat`);
    //?socket.broadcast func is written inside socket.on('joinned') because this broadcast must only be done when some user joins
    //!broadcast that , a new user has joined the chat to other people except that new user
    socket.broadcast.emit('userJoined', {
      user: 'Admin',
      message: `${users[socket.id]} has just joined the chat`,
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
