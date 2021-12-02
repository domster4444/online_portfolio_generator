const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
router.get(
  '/text',
  asyncHandler(async (req, res, next) => {
    // send response to client with json message and status code
    res.status(200).json({
      message: 'Hello World',
    });
  })
);

module.exports = router;
