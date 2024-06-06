const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

/**
 * Send payment request to API
 * @param {number} totalAmount - Total amount
 * @param {number} totalShipping - Total shipping
 * @returns {undefined}
 * @author Pablo West
 */
describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
