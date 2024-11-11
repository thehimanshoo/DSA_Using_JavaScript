/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]

Constraints:
    0 <= rowIndex <= 33

*/

function getRow(rowIndex) {
    let row = [1]; // Initialize the first row as [1]
    
    for (let i = 1; i <= rowIndex; i++) {
        // Create a new row based on the previous row
        let newRow = [1]; // Start each row with 1
        
        for (let j = 1; j < i; j++) {
            // Each element is the sum of the two elements above it
            newRow.push(row[j - 1] + row[j]);
        }
        
        newRow.push(1); // End each row with 1
        row = newRow; // Move to the next row
    }
    
    return row;
}

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));