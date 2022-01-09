const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const { generateToken } = require('../utils/generateToken');
const { registrationValidation } = require('../validation/validate');
const { loginValidation } = require('../validation/validate');
const router = express.Router();
router.post(
  '/register',
  asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password, url } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      const err = new Error('User already registered');
      err.status = 400;
      next(err);
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      url,
    });
    res.json({ message: 'New user created' });
  })
);
router.post(
  '/login',
  asyncHandler(async (req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) {
      const err = new Error(error.details[0].message);
      err.status = 400;
      next(err);
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        firstName: user.firstName,
        token: generateToken(user._id),
      });
    } else {
      const err = new Error('Invalid email or password');
      err.status = 401;
      next(err);
    }
  })
);
module.exports = router;
