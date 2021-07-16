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
 Time Complex = O(N) -> N i sthe length of array
 Space Complex => O(1) No Extra Space has been used
 */
function sortedSquaredArray(array) {

    if(!array) {
        return;
    };


    for(let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    };



    return array.sort((a, b) => a - b);

};

console.log(sortedSquaredArray([-2, -1]))