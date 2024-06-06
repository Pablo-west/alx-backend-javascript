const express = require('express');

const PORT = 7865;
const app = express();

/**
 * Basic integration testing
 * @returns {string} - Welcome message
 * @example GET / should return Welcome to the payment system
 * @example GET /cart should return Welcome to the payment system
 * @example GET /profile should return Welcome to the payment system
 * @example GET /items should return Welcome to the payment system
 * @example GET /test should return Welcome to the payment system
 * @example GET /test/another should return Welcome to the payment system
 * @author Pablo West 
 */
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
