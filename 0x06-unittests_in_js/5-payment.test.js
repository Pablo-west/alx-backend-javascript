const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');
const sinon = require('sinon');

/**
 * Send payment request to API
 * @param {number} totalAmount - Total amount
 * @param {number} totalShipping - Total shipping
 * @returns {undefined}
 * @author Pablo West
 * 
 */
describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});