const Utils = require('./utils');

/**
 * Send payment request to API
 * @param {number} totalAmount - Total amount
 * @param {number} totalShipping - Total shipping
 * @returns {undefined}
 * @author Pablo West 
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
