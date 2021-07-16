/*
Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output
true
*/
// Using a scond index counter
// Input - Array and Sequence
// Array is nondistinct values
// Time Complexity O(N) and Space Complexity O(1)
function isValidSubsequence(array, sequence) {

    // First edge where the sequence is length is higher than original array
    if(sequence.length > array.length) {
        return false;
    }

    let secondIndex = 0;
    array.forEach((value) => {
        if(value === sequence[secondIndex]) {
            secondIndex++;
        }
    });

    return (secondIndex === sequence.length) ? true : false;

}

// console.log(isValidSubsequence([1,2,3,4], [4, 3]));

// console.log(isValidSubsequence([5,1,22,25, 6, -1, 8, 10], [1, 6, -1, 10]));

// console.log(isValidSubsequence([1,1,1,1,1,1], [1,1]));

// console.log(isValidSubsequence([1,1,1,1,1,1], [1,2]));

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8]));
  