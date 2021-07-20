/*  
 
Monotonic Array
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, 
non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Sample Output
true
 
 */



function isMonotonic(array) {

    if(array.length <= 1) {
        return true;
    };

    let increasing = true;
    let decreasing = true;

    let previous = array[0];

    for(let i = 1; i < array.length; i++) {

        let current = array[i];

        if(!increasing && !decreasing) {
            return false;
        }

        if(previous < current) {
            decreasing = false;
        } else if (previous > current) {
            increasing = false;
        }

        previous = current;

    };

    return increasing || decreasing;

};

// console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
console.log(isMonotonic([1, 2, 0]));
console.log(isMonotonic([1, 1, 1, 2, 3, 4, 1]));

exports.isMonotonic = isMonotonic;