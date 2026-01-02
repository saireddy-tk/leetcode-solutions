/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes) {
  const result = Array(boxes.length).fill(0);

  let balls = 0,
    moves = 0;

  for (let i = 0; i < boxes.length; i++) {
    result[i] = balls + moves;
    moves = balls + moves;
    balls += Number(boxes[i]);
  }

  balls = 0;
  moves = 0;
  for (let i = boxes.length - 1; i >= 0; i--) {
    result[i] += balls + moves;
    moves = moves + balls;
    balls += Number(boxes[i]);
  }

  return result;
}

console.log(minOperations("001011"));
