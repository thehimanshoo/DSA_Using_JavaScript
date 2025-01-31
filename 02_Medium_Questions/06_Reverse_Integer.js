/*
                                                Reverse Integer
                                               -----------------

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:
    -231 <= x <= 231 - 1

*/

function reverseInteger(x) {
    // Handle the sign
    const isNegative = x < 0;
    x = Math.abs(x);

    // Reverse the digits
    const reversedStr = x.toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);

    // Check if the reversed number is within the 32-bit signed integer range
    if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
        return 0;
    }

    // Apply the original sign
    return isNegative ? -reversedNum : reversedNum;
}

// Test cases
console.log(reverseInteger(123));    // Output: 321
console.log(reverseInteger(-123));   // Output: -321
console.log(reverseInteger(120));    // Output: 21
console.log(reverseInteger(1534236469)); // Output: 0 (since 9646324351 is out of range)