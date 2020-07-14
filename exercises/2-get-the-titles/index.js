/**
 * takes the array and returns an array of titles
 * @param {array} arr - array of objects
 * @returns {array} - array of titles
 *
 */
const getTheTitles = (arr) => arr.map(val => val.title) 


module.exports = getTheTitles;
