/**
 * Two Number Sum
 * Inputs -  arrayay and integer
 * arrayay will have whole numbers and any two numbers should sum to the 
 * targetSum and return it into a arrayay or else return empty arrayay
 * arrayay = [3, 5, -4, 8, 11, 1, -1, 6]
 * Sorted = [-4, -1, 1, 3, 5, 6, 8, 11]
 * targetSum = 10
 * Output - [-1, 11] - order doesn't matter
 */

// Time Complexity - O(N Log (N))
// Space Complexity - O(1)
const twoNumbersSum = (array, targetSum) => {

    // Sort the array so we can save up the memory or space Complexity
    array.sort((a, b) => a - b);

    const left = 0;
    const right = array.length - 1;

    const result = [];

    // Always compare two index (pointers) and move
    while (left < right) {
        const currentSum = array[left] + array[right];
        if(currentSum === targetSum) {
            result.push(array[left], array[right]);
            break;
        } else if (currentSum < array[right]) {
            left++
        } else if (currentSum > array[right]) {
            right--;
        }
    }

    return result;
};

console.log(twoNumbersSum([3, 5, -4, 8, 11, 1, -1, 6], 10))