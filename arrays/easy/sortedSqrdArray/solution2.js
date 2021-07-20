/*

Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted 
in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output
[1, 4, 9, 25, 36, 64, 81]


*/

/*  
 This solution doesn't work for all the test cases
 I was trying to do in O(1) Space complex by chaging or swapping the elements
 */
/*  
 Time Complex = O(N) -> N i sthe length of array
 Space Complex => O(1) No Extra Space is used
 */
 function sortedSquaredArray(array) {

    if(!array) {
        return;
    };

    let smallerIndex = 0;
    let largerIndex = array.length - 1;

    /*  
     We need loop in reverse way to do binary insert in result array
     Because if first element abs is greater than last element abs in sorted array than 
     they should swap the value.
     We can use the same array and swap the elements
     */
    // for(let i = array.length - 1; i >= 0; i--) {

    //     let smallerValue = array[smallerIndex];
    //     let largeValue = array[largerIndex];

    //     if(Math.abs(smallerValue) > Math.abs(largeValue)) {
    //         let temp = array[i];
    //         array[i] = smallerValue * smallerValue;
    //         array[smallerIndex] = temp;
    //         smallerIndex++;
    //     } else {
    //         array[i] = largeValue * largeValue;
    //         largerIndex--;
    //     }
    // };

    // for(let i = 0; i < array.length; i++) {

    //     let smallerValue = array[smallerIndex];
    //     let largeValue = array[largerIndex];

    //     if(Math.abs(smallerValue) > Math.abs(largeValue)) {
    //         let temp = array[i];
    //         array[i] = smallerValue * smallerValue;
    //         array[smallerIndex] = temp;
    //         console.log(array)
    //         smallerIndex++;
    //     } else {
    //         array[i] = largeValue * largeValue;
    //         largerIndex--;
    //     }
    // };

    // return array;

};

console.log(sortedSquaredArray([-2, -1]));
// console.log(sortedSquaredArray([-3, -2, -1]))