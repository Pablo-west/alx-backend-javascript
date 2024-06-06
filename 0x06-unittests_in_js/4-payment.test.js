const sendPaymentRequestToApi = require('./4-payment');
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
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrother = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    dummy.restore();
    bigBrother.log.restore();
  });
});
