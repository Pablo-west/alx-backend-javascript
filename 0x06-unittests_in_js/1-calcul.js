/**
 * combining descriptions
 * @param {string} type first argument of the function
 * @param {number} a second argument of the function
 * @param {number} b third argument of the function
 * @returns {number} the sum of a and b
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