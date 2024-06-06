const express = require('express');

const PORT = 7865;
const app = express();

/**
 * Regex integration testing
 * @returns {string} - Welcome message
 * @example GET / should return Welcome to the payment system
 * @example GET /cart/:id should return Payment methods for cart :id
 * @example GET /cart/:id should return 404 for negative number values in :id
 * @example GET /cart/:id should return 404 for non-numeric values in :id
 * @author Pablo West
 */
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;