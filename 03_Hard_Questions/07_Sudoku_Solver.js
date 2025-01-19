/*
                                                        Sudoku Solver
                                                       ---------------

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:
    Each of the digits 1-9 must occur exactly once in each row.
    Each of the digits 1-9 must occur exactly once in each column.
    Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Example 1:

Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]

Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]]

Explanation: The input board is shown above and the only valid solution is shown below:

Constraints:
    board.length == 9
    board[i].length == 9
    board[i][j] is a digit or '.'.
    It is guaranteed that the input board has only one solution.

*/

function solveSudoku(board) {
    solve(board);
}

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
                // Try placing numbers 1-9 in the empty cell
                for (let num = 1; num <= 9; num++) {
                    const char = num.toString();
                    if (isValid(board, row, col, char)) {
                        board[row][col] = char; // Place the number

                        // Recursively attempt to solve the rest of the board
                        if (solve(board)) {
                            return true; // If solved, return true
                        }

                        board[row][col] = '.'; // Backtrack
                    }
                }
                return false; // If no number works, backtrack
            }
        }
    }
    return true; // If no empty cells, the board is solved
}

function isValid(board, row, col, char) {
    // Check if the number is already in the row
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === char) return false;
    }

    // Check if the number is already in the column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === char) return false;
    }

    // Check if the number is already in the 3x3 sub-box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === char) return false;
        }
    }

    return true; // The number is valid
}

// Helper function to print the board
function printBoard(board) {
    for (let row of board) {
        console.log(row.join(' '));
    }
}

// Example usage:
const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

solveSudoku(board);
printBoard(board);