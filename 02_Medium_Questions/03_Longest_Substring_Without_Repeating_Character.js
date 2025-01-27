/*
                                    Longest Substring Without Repeating Character
                                   -----------------------------------------------

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

function lengthOfLongestSubstring(s) {
    let maxLength = 0; // To store the maximum length
    let charSet = new Set(); // To store unique characters
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < s.length; right++) {
        // If character is already in the set, remove from the left
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        // Add the current character and calculate max length
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3