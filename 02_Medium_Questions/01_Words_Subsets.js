/*
                                                Word Subsets
                                               --------------

You are given two string arrays words1 and words2.
A string b is a subset of string a if every letter in b occurs in a including multiplicity.
For example, "wrr" is a subset of "warrior" but is not a subset of "world".
A string a from words1 is universal if for every string b in words2, b is a subset of a.
Return an array of all the universal strings in words1. You may return the answer in any order.


Example 1:
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]

Example 2:
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]

Constraints:
    1 <= words1.length, words2.length <= 104
    1 <= words1[i].length, words2[i].length <= 10
    words1[i] and words2[i] consist only of lowercase English letters.
    All the strings of words1 are unique.

*/

function wordSubsets(words1, words2) {
    // Helper function to count character frequencies in a word
    const countCharFrequency = (word) => {
        const count = new Array(26).fill(0);
        for (const char of word) {
            count[char.charCodeAt(0) - 97]++;
        }
        return count;
    };

    // Create a frequency array to store maximum requirements for words2
    const maxFreq = new Array(26).fill(0);
    for (const word of words2) {
        const wordFreq = countCharFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], wordFreq[i]);
        }
    }

    // Filter words1 to find universal strings
    const result = [];
    for (const word of words1) {
        const wordFreq = countCharFrequency(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (wordFreq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) result.push(word);
    }

    return result;
}

// Example usage:
const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
const words2 = ["e", "o"];
console.log(wordSubsets(words1, words2)); // Output: ["facebook", "google", "leetcode"]
