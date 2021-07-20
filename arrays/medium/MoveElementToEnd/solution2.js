/*  
 
Move Element To End
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
Sample Output
[1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

 
 */

/*
Time - O(N)
Space - O(1) - non matching element array length
*/
function moveElementToEnd(array, toMove) {

    let firstPointer = 0;
    let secondPointer = array.length - 1;
    
    while(firstPointer < secondPointer) {

        while(firstPointer < secondPointer && array[secondPointer] === toMove) {
            secondPointer--;
        }

        if(array[firstPointer] === toMove) {
            swap(firstPointer, secondPointer, array);
        };

        firstPointer++;

    }

    return array;



};

function swap (first, second, array) {
    let temp = array[second];
    array[second] = array[first];
    array[first] = temp;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

exports.moveElementToEnd = moveElementToEnd;