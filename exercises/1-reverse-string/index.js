/**
 * reverses a given string
 * @param {string} str - initial string
 * @returns {string} - reversed string
 */

const reverseString = (str) => {
return str.split('').reverse().join('')
}

module.exports = reverseString
