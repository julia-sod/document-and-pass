/**
 * checks if a given string is a palindrome
 * @param {string} str - initial string
 * @returns {boolean} - true or false
 *
 */
const palindromes = (str) => {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
};

module.exports = palindromes;
