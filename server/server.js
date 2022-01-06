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

//? routes
app.get('/', (req, res) => {
  res.send('application server working fine');
});
app.use('/api/users', userRoutes);
app.use('/api/users', testRoutes);
app.use('/account', passwordResetRoutes);

//?global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
