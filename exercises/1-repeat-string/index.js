/**
 * repeats string the given amount of times
 * throws "ERROR" if times is a negative number
 * @param {string} str - the given string
 * @param {number} times - the amount of times the string should be repeated
 * @return {string} - repeated string
 */
const repeatString = (str, times) => {
    if (times < 0) {
        return "ERROR";
    }
    let repeatedString = '';
    while (times > 0) {
    repeatedString += str;
    times--;
    }
    return repeatedString;
}

module.exports = repeatString
