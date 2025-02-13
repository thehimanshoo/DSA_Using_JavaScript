/*
                                            Substring with Concatination of All Words
                                           --------------------------------------------

You are given a string s and an array of strings words. All the strings of words are of the same length.
A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", 
and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because 
it is not the concatenation of any permutation of words. Return an array of the starting 
indices of all the concatenated substrings in s. You can return the answer in any order.

Example 1:
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] 
which is a permutation of words.The substring starting at 9 is "foobar".  
It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

Explanation:
There is no concatenated substring.

Example 3:
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

Constraints:
    1 <= s.length <= 104
    1 <= words.length <= 5000
    1 <= words[i].length <= 30
    s and words[i] consist of lowercase English letters.

*/

function findSubstring(s, words) {
    if (!s || !words || words.length === 0) return [];

    const wordLength = words[0].length; // Length of each word
    const totalLength = wordLength * words.length; // Total length of the concatenated substring
    const result = [];

    // Create a frequency map for words
    const wordsMap = new Map();
    for (const word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    }

    // Iterate through s using a sliding window of size totalLength
    for (let i = 0; i <= s.length - totalLength; i++) {
        const windowMap = new Map(); // Frequency map for the current window
        let isValid = true;

        // Check each word in the current window
        for (let j = 0; j < words.length; j++) {
            const start = i + j * wordLength;
            const end = start + wordLength;
            const currentWord = s.slice(start, end);

            // If the current word is not in wordsMap, the window is invalid
            if (!wordsMap.has(currentWord)) {
                isValid = false;
                break;
            }

            // Update the frequency of the current word in windowMap
            windowMap.set(currentWord, (windowMap.get(currentWord) || 0) + 1);

            // If the frequency exceeds the count in wordsMap, the window is invalid
            if (windowMap.get(currentWord) > wordsMap.get(currentWord)) {
                isValid = false;
                break;
            }
        }

        // If the window is valid, add the starting index to the result
        if (isValid) {
            result.push(i);
        }
    }

    return result;
}

// Example usage:
const s1 = "barfoothefoobarman";
const words1 = ["foo", "bar"];
console.log(findSubstring(s1, words1)); // Output: [0, 9]

const s2 = "wordgoodgoodgoodbestword";
const words2 = ["word", "good", "best", "word"];
console.log(findSubstring(s2, words2)); // Output: []

const s3 = "barfoofoobarthefoobarman";
const words3 = ["bar", "foo", "the"];
console.log(findSubstring(s3, words3)); // Output: [6, 9, 12]