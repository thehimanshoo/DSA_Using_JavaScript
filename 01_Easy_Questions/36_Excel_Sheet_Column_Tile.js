/*
                                                        Excel Sheet Column Tile
                                                       -------------------------

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...


Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"

Constraints:
    1 <= columnNumber <= 231 - 1

*/

function convertToTitle(columnNumber) {
    let result = "";
    while (columnNumber > 0) {
        columnNumber--; // Adjust for 1-based indexing
        const char = String.fromCharCode((columnNumber % 26) + 65);
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
}

// Examples
console.log(convertToTitle(1));    // Output: "A"
console.log(convertToTitle(28));   // Output: "AB"
console.log(convertToTitle(701));  // Output: "ZY"
console.log(convertToTitle(2147483647)); // Output: "FXSHRXW"