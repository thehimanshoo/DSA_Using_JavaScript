/*
                                                Regular Expression Matching
                                               -----------------------------

Given an input string s and a pattern p, implement regular expression matching with support 
for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
   
Constraints:
    1 <= s.length <= 20
    1 <= p.length <= 20

    s contains only lowercase English letters.
    p contains only lowercase English letters, '.', and '*'.
    It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/

function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // Creating a DP table of size (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // empty string and empty pattern match
    dp[0][0] = true;

    // Handling patterns like a*, a*b*, a*b*c* etc., that can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Filling the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                // If the current characters match or pattern has '.', check the previous state
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // If the pattern has '*', handle zero or more occurrences of the preceding character
                dp[i][j] = dp[i][j - 2]; // Zero occurrences
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrences
                }
            }
        }
    }

    // The final result is in dp[m][n]
    return dp[m][n];
}

// Example usage:
console.log(isMatch("aa", "a")); // Output: false
console.log(isMatch("aa", "a*")); // Output: true
console.log(isMatch("ab", ".*")); // Output: true
console.log(isMatch("aab", "c*a*b")); // Output: true
console.log(isMatch("mississippi", "mis*is*p*.")); // Output: false