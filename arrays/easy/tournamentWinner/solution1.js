/*  
 
Tournament Winner
There's an algorithms tournament taking place in which teams of programmers compete against each other to solve 
algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. 
Only two teams compete against each other at a time, and for each competition, one team is designated the home team, 
while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. 
A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, 
write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. 
The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters 
representing the name of the team. The results array contains information about the winner of each corresponding competition 
in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means 
that the home team in the corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. 
It's also guaranteed that the tournament will always have at least two teams.

Sample Input
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
results = [0, 0, 1]
Sample Output
"Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points 
// C# -  3 points
// Python -  6 points
 
 */

// o(N) two pass solution
function tournamentWinner(competitions, results) {

    // [Home, Away]
    // 0 => Away, 1 => Home

    // Where I will store the score for the the each team
    const teamHashMap = new Map();

    competitions.forEach((eachMatchDetails, index) => {

        const homeTeamResult =  (results[index] === 1) ? true : false;
        const homeTeam = eachMatchDetails[0];
        const awayTeam = eachMatchDetails[1];

        const teamWon = (homeTeamResult) ? homeTeam : awayTeam;

        if(!teamHashMap.has(teamWon)) {
            teamHashMap.set(teamWon, 3);
        } else {
            const currentScore = teamHashMap.get(teamWon);
            const newScore = currentScore + 3;
            teamHashMap.set(teamWon, newScore);
        }


    });

    let highest = -Infinity;
    let result = '';

    teamHashMap.forEach((values, key) => {

        if(highest < values) {
            highest = values;
            result = key;
        }

    });

    return result;

};



exports.tournamentWinner = tournamentWinner;