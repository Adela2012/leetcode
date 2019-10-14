/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
  if(!stones || stones.length == 0) return 0
  
  while (stones.length > 1) {
      stones.sort((a, b) => b - a)
      let x = stones.shift() - stones.shift()
      stones.push(x)
  }
  
  return stones[0]
  
  
  
};