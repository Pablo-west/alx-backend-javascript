const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

/**
 * This function is a mock of an API call to get a payment token
 * @param {boolean} success - Indicates if the call should be successful
 * @returns {Promise} - The response from the API
 * @example getPaymentTokenFromAPI(true).then(console.log).catch(console.log);
 * @example getPaymentTokenFromAPI(false).then(console.log).catch(console.log);
 * @author Pablo West
 */
describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});