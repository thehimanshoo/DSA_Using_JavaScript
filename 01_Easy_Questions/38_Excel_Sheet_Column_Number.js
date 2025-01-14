/*
                                                                Excel Sheet Column Numbers
                                                               ----------------------------

Given a string columnTitle that represents the column title as appears in an Excel sheet, 
return its corresponding column number. For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Constraints:
    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].

*/

function titleToNumber(columnTitle) {
    let result = 0;

    for (let char of columnTitle) {
        const value = char.charCodeAt(0) - 64; // Convert char to its position (A=1, B=2, ...)
        result = result * 26 + value; // Update result in base-26
    }

    return result;
}

// Examples
console.log(titleToNumber("A"));    // Output: 1
console.log(titleToNumber("AB"));   // Output: 28
console.log(titleToNumber("ZY"));   // Output: 701
console.log(titleToNumber("FXSHRXW")); // Output: 2147483647