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
Space - O(M) - non matching element array length
*/
function moveElementToEnd(array, toMove) {

    let removeCount = 0;
    let result = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if(element === toMove) {
            removeCount++;
        } else {
            result.push(element);
        }
        
    };

    return [...result, ...new Array(removeCount).fill(toMove)];

};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

exports.moveElementToEnd = moveElementToEnd;