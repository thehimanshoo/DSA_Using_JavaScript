/*
                                                        Wildcard Matching
                                                       -------------------

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

    '?' Matches any single character.
    '*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).


Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Constraints:

    0 <= s.length, p.length <= 2000
    s contains only lowercase English letters.
    p contains only lowercase English letters, '?' or '*'.

*/

function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // Create a DP table with (m+1) x (n+1) dimensions
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Base case: empty string and empty pattern match
    dp[0][0] = true;

    // Handle patterns starting with '*'
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match any sequence or an empty sequence
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // Current characters match
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    // The result is in dp[m][n]
    return dp[m][n];
}

// Example usage:
console.log(isMatch("aa", "a")); // Output: false
console.log(isMatch("aa", "*")); // Output: true
console.log(isMatch("cb", "?a")); // Output: false
console.log(isMatch("adceb", "*a*b")); // Output: true
console.log(isMatch("acdcb", "a*c?b")); // Output: false