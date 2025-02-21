// routes/postHandler.js
const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

  const response = {
    is_success: true,
    user_id: "Pankaj_09032004",
    email: "22BCS15191@cuchd.in",
    roll_number: "22BCS15191",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  };

  res.json(response);
});

module.exports = router;