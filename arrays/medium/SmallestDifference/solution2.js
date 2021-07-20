/*  
 
Smallest Difference
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) 
whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, 
the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
Sample Output
[28, 26]
 
 */

function smallestDifference(arrayOne, arrayTwo) {
    
    // Where we will store the result
    let result = [];

    let smallest = Infinity;
    let currentDiff = Infinity;

    function isPositive (number) {
        if(Math.abs(number) === 0) {
            return (Math.sign(number) === 0) ? true : false 
        }
        return (Math.sign(number) === 1) ? true : false 
    };

    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let oneIndex = 0;
    let twoIndex = 0;

    while (oneIndex < arrayOne.length && twoIndex < arrayTwo.length) {

        let itemOfArrayOne = arrayOne[oneIndex];
        let itemOfArrayTwo = arrayTwo[twoIndex];

        if(isPositive(itemOfArrayOne) && isPositive(itemOfArrayTwo)) {
            currentDiff = Math.abs(itemOfArrayOne - itemOfArrayTwo);
        } else if(!isPositive(itemOfArrayOne) && !isPositive(itemOfArrayTwo)) {
            currentDiff = Math.abs(Math.abs(itemOfArrayOne) - Math.abs(itemOfArrayTwo));
        } else {
            currentDiff = Math.abs(Math.abs(itemOfArrayOne) + Math.abs(itemOfArrayTwo));
        };

        if(smallest > currentDiff) {
                
            smallest = currentDiff;
            result[0] = itemOfArrayOne;
            result[1] = itemOfArrayTwo;
        }

        if(itemOfArrayOne < itemOfArrayTwo) {
            oneIndex++;
        } else if(itemOfArrayOne > itemOfArrayTwo) {
            twoIndex++;
        } else {
            return [itemOfArrayOne, itemOfArrayTwo];
        }



    }

    return result;

};

console.log(smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]))



exports.smallestDifference = smallestDifference;