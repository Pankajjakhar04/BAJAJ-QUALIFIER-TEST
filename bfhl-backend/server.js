// server.js
const express = require('express');
const app = express();
const getHandler = require('./routes/getHandler');
const postHandler = require('./routes/postHandler');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(getHandler);
app.use(postHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});