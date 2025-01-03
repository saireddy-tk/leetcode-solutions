/**
 *
 * @param {number[]} players
 * @param {number[]} trainers
 * @returns {number}
 */

function matchPlayersAndTrainers(players, trainers) {
  players = players.sort((a, b) => a - b);
  trainers = trainers.sort((a, b) => a - b);

  let left = 0;
  let right = 0;

  while (left < players.length && right < trainers.length) {
    if (players[left] <= trainers[right]) left++;
    right++;
  }
  return left;
}
