/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target)
  let step = 0
  let sum = 0
  while (sum < target) {
      sum += ++step
  }
  
  while ((sum - target) % 2 != 0) {
      sum += ++step
  }
  
  return step
};