/**
 * returns a specific member of the fibonacci sequence, the sum of the two preceding numbers
 * @param {number} n - index of element from Fibonacci array
 * @returns {number} - element with index n from Fibonacci array
 */
const fibonacci = (n) => {
    if (n < 0) {
        return "OOPS";
    }
    let arr = [0, 1];
    for (let i = 2; i <= n; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];

}

module.exports = fibonacci
