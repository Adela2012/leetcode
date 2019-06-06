/**
 * @param {number[]} w
 */
var Solution = function(w) {
  for (let i = 1; i < w.length; i++) {
      w[i] += w[i - 1]
  }
  this.arr = w
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  let len = this.arr.length
  let max = this.arr[len - 1]
  let pick = parseInt(Math.random() * max)
  for (let i = 0; i < len; i++) {
      if (this.arr[i] > pick) return i
  }
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/