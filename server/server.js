const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const globalErrorHandler = require('./middleware/errorMiddleware');
const passwordResetRoutes = require('./routes/passwordResetRoutes');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoute');
const connectDB = require('./config/db');
const { cloudinary } = require('./utils/cloudnary');
dotenv.config();
// connect to the database
connectDB(); //? connect db
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' })); //? allow body parsing
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//? routes
app.get('/', (req, res) => {
  res.send('application server working fine');
});

//!___ Cloudinary route

// configure routes
app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(
      fileStr,
      (err, result) => {
        if (err) {
          res.status(500).json({
            message: 'Error uploading file',
            error: err,
          });
        } else {
          //! -------SERVER GETS "IMAGE ID OBJ" FROM CLOUDINARY . store that to access later
          console.log(
            'cloudinary image object as response after upload to cloudinary'
          );
          console.log(result);
          //! ------SERVER GETS "IMAGE ID OBJ" FROM CLOUDINARY . store that to access later
          res.status(200).json({
            message: 'File uploaded successfully',
            result,
          });
        }
      }
    );
  } catch (err) {
    console.error('your error' + err);
  }
});
//!___ Cloudinary route

app.use('/api/users', userRoutes);
app.use('/api/users', testRoutes);
app.use('/account', passwordResetRoutes);

//?global error handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
