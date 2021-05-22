// Input - Array and Sequence
// Array is nondistinct values
// Time Complexity O(N) and Space Complexity O(1)
function isValidSubsequence(array, sequence) {

    const arrayLength = array.length;
    const sequenceLength = sequence.length;

    if(sequenceLength > arrayLength) {
        return false;
    };

    let counter = 0;

    for(let i = 0; i < arrayLength; i++) {
        if(sequence[counter] === array[i]) {
            counter++;
        }
    };

    if(sequenceLength  === counter) {
        return true;
    } else {
        return false;
    }  
}

console.log(isValidSubsequence([1,2,3,4], [4, 3]));

console.log(isValidSubsequence([5,1,22,25, 6, -1, 8, 10], [1, 6, -1, 10]));

console.log(isValidSubsequence([1,1,1,1,1,1], [1,1]));

console.log(isValidSubsequence([1,1,1,1,1,1], [1,2]));
  