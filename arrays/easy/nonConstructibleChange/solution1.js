/*  
 
Non-Constructible Change
Given an array of positive integers representing the values of coins in your possession,
 write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. 
 The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. 
If you're given no coins, the minimum amount of change that you can't create is 1.

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
20

 
 */


function nonConstructibleChange(coins) {

    if(coins.length == 0) {
        return 1;
    };

    coins.sort((a, b) => {
        return a - b;
    });

    // console.log('coins', coins);

    // To keep a track of minimum change can be created
    let currentChangeCreated = 0;

    // loop through coins array so we can easily track the change can be created
    for (const coin of coins) {

        // Current coin is greater than last change created plus 1
        // then we know we cannnot created current change plus 1
        // example -> [1, 1, 4] => curent = 2 and coin = 4 {current + 1 < coin} that means we cannot create 3 here.
        if(coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }

        // Keep tracking the current change by adding current coin value
        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;



};

console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]))

exports.nonConstructibleChange = nonConstructibleChange;