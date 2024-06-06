/**
 * Basic test using Chai assertion library
 * @param {string} type - Type of operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns 0
 * @author Pablo West
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
