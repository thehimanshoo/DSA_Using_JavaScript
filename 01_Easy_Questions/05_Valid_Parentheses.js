/*
                                                             Valid Parentheses
                                                            -------------------

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true


Example 2:
Input: s = "()[]{}"
Output: true


Example 3:
Input: s = "(]"
Output: false


Example 4:
Input: s = "([])"
Output: true

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


*/

const isValid = (s) => {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's a closing bracket
        if (char in pairs) {
            // Check if top of stack matches the corresponding opening bracket
            const topElement = stack.length ? stack.pop() : '#'; // Pop if exists, else use #
            if (topElement !== pairs[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push to stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
};

// Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([])"));      // true

