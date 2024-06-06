/**
 * This function is a mock of an API call to get a payment token
 * @param {boolean} success - Indicates if the call should be successful
 * @returns {Promise} - The response from the API
 * @example getPaymentTokenFromAPI(true).then(console.log).catch(console.log);
 * @example getPaymentTokenFromAPI(false).then(console.log).catch(console.log);
 * @author Pablo West
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;