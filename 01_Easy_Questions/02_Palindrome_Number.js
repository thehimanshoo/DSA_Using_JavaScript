/*
    Given an integer x, return true if x is a palindrome and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

const isPalindrome = (x) => {
  // If x is negative or if it ends with 0 (but is not 0 itself), it's not a palindrome
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;
  // Reverse only the second half of the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10); // Add the last digit of x to reversedHalf
    x = Math.floor(x / 10); // Remove the last digit from x
  }

  // Check if the first half and second half are the same
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

// Example test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false

// Time Complexity O(log(n))
