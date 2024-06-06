/**
 * Calculate the number
 * @param {string} type - Type of calculation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Result of the calculation
 * @author Pablo West
 */
const Utils = {
  calculateNumber(type, a, b) {
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
  },
};

module.exports = Utils;
