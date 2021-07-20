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
 Space Complex => O(N) where N is length of new result array
 */
function sortedSquaredArray(array) {

    if(!array) {
        return;
    };

    let result = new Array(array.length).fill(0);
    let smallerIndex = 0;
    let largerIndex = array.length - 1;

    /*  
     We need loop in reverse way to do binary insert in result array
     Because if first element abs is greater than last element abs in sorted array than 
     they should swap the value 
     */
    for(let i = array.length - 1; i >= 0; i--) {

        let smallerValue = array[smallerIndex];
        let largeValue = array[largerIndex];

        if(Math.abs(smallerValue) > Math.abs(largeValue)) {
            result[i] = smallerValue * smallerValue;
            smallerIndex++;
        } else {
            result[i] = largeValue * largeValue;
            largerIndex--;
        }
    };

    return result;

};

console.log(sortedSquaredArray([-2, -1]))