/*
                                                    Trapping Rain Water
                                                   ---------------------

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Explanation: The above elevation map (black section) is represented by 
array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water 
(blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105

*/

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Process the left pointer
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update leftMax
            } else {
                result += leftMax - height[left]; // Add trapped water
            }
            left++;
        } else {
            // Process the right pointer
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update rightMax
            } else {
                result += rightMax - height[right]; // Add trapped water
            }
            right--;
        }
    }

    return result;
}

// Example usage:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9