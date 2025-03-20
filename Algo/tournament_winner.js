/**
 * @description Solution to find the winner using a hashtable
 * @param {number[]} competitions
 * @param {results[]} results
 * @returns {string}
 * @complexities Time => O(n) | Space => O(n)
 */
const tournamentWinner = (competitions, results) => {
  // Write your code here.
  const pointsTable = {};
  for (let row = 0; row < competitions.length; row++) {
    let homeTeam = competitions[row][0];
    let awayTeam = competitions[row][1];
    if (results[row] === 0) {
      // awayTeam wins
      if (awayTeam in pointsTable) {
        pointsTable[awayTeam] = pointsTable[awayTeam] + 3;
      } else {
        pointsTable[awayTeam] = 3;
      }
    } else {
      // homeTeam wins
      if (homeTeam in pointsTable) {
        pointsTable[homeTeam] = pointsTable[homeTeam] + 3;
      } else {
        pointsTable[homeTeam] = 3;
      }
    }
  }

  let max = Number.MIN_VALUE;
  let winner = "";
  for (const [team, point] of Object.entries(pointsTable)) {
    if (point > max) {
      max = point;
      winner = team;
    }
  }

  return winner;
};

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
