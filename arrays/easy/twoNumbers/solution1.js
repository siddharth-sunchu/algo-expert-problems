/**
 * Two Number Sum
 * Inputs -  arrayay and integer
 * arrayay will have whole numbers and any two numbers should sum to the 
 * targetSum and return it into a arrayay or else return empty arrayay
 * arrayay = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 * Output - [-1, 11] - order doesn't matter
 */

const twoNumbersSum = (array, targetSum) => {


    // Create a hashMap to store all the values for the array
    // So the look up can be O(1)
    const hashMap = new Map();

    // Store the result in an array
    const result = [];

    // Run the forLoop to store the elements inside hashmap
    array.forEach((element, key) => {
        hashMap.set(element, key);
    });

    // Run through array
    for(let i = 0; i < array.length; i++) {
        // Subtract the targetSum with current index value
        const temp = targetSum - array[i];
        // Check if the temp value exist in hashMap which will provide us the sum for target
        // * Make sure the temp value is not the current index value
        if(hashMap.has(temp) && temp !== array[i]) {
            result.push(array[i], temp);
            break;
        }
    }
    return result;
};

console.log(twoNumbersSum([3, 5, -4, 8, 11, 1, -1, 6], 10))