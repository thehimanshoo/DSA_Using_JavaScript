/*
                                            Longest Valid Parentheses
                                           ---------------------------

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0

Constraints:
    0 <= s.length <= 3 * 104
    s[i] is '(', or ')'.

*/

function longestValidParentheses(s) {
    let maxLen = 0;
    const stack = [];
    stack.push(-1); // Initialize stack with -1 to handle edge cases

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // Push the index of '(' onto the stack
            stack.push(i);
        } else {
            // Pop the top of the stack (matches the current ')')
            stack.pop();

            if (stack.length === 0) {
                // If the stack is empty, push the current index onto the stack
                stack.push(i);
            } else {
                // Calculate the length of the current valid substring
                const currentLen = i - stack[stack.length - 1];
                maxLen = Math.max(maxLen, currentLen);
            }
        }
    }

    return maxLen;
}

// Example usage:
console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("")); // Output: 0