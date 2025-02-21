// routes/getHandler.js
const express = require('express');
const router = express.Router();

router.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

module.exports = router;