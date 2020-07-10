/**
Implement a recursive factorial() function which will take a number and compute its factorial value. For example, factorial(5) would return 120 because 5 * 4 * 3 * 2* 1 is 120.
 */
function calcFactorial (factorial) {
    if (factorial == 0 || factorial == 1) {
        return 1
    } else {
        return factorial * calcFactorial(factorial - 1)
    }
}
console.log(calcFactorial(5))
const result1 = calcFactorial(5)

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
 console.assert(result1 === 120, "Expected 120")
