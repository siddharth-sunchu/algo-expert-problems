/*
Binary Search is searching technique which works on Divide and Conquer approach. 
It used to search any element in a sorted array.
As compared to linear, binary search is much faster with Time Complexity of O(logN) 
whereas linear search algorithm works in O(N) time complexity.
*/

// input - array 
// output - boolean
/* 
arr[] = {1, 3, 5, 7, 8, 9}
        x = 5
*/
const recusriveFunction = (arr, value) => {

    function binarySearch (array, start, end) {

        // Base Condition
        if(start > end) {
            return false;
        };

        // Get the middle index
        let middle = Math.floor((start + end) / 2);

        // Check if middle element matches the value
        if(array[middle] === value) {
            return true;
        }

        // Check if the value is greater than middle element
        // Than check in right half of the array
        if(value > array[middle]) {
            return binarySearch(array, middle + 1, end);
        } else {
            // Check in left half of the array because value is less than middle element
            return binarySearch(array, start, middle - 1);
        }

    };

    return binarySearch(arr, 0, arr.length - 1);

};

console.log('recusriveFunction => ', recusriveFunction([1, 3, 5, 7, 8, 9], 5));
console.log('recusriveFunction => ', recusriveFunction([1, 1, 1, 1, 2], 5));
console.log('recusriveFunction => ', recusriveFunction([1, 3, 5, 7, 8, 9], 6));


const iterativeApproach = (arr, value) => {

    // Start Index
    let start = 0;
    // End Index
    let end = arr.length - 1;

    // Run the loop
    while (start <= end) {

        // Get the middle index
        let middle = Math.floor((start+end)/2);

        if(arr[middle] === value) {
            return true;
        };

        if(arr[middle] > value) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }

    }

    return false;

};

console.log('iterativeApproach =>', iterativeApproach([1, 3, 5, 7, 8, 9], 5));
console.log('iterativeApproach => ', iterativeApproach([1, 1, 1, 1, 2], 5));
console.log('iterativeApproach => ', iterativeApproach([1, 3, 5, 7, 8, 9], 6));

