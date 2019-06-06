/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.map = new Map()
  this.sum = 0
  for (let i = 0; i < w.length; i++) {
      this.sum += w[i]
      this.map.set(this.sum, i)
  }
  this.keys = [...this.map.keys()].sort((a, b) => a - b)
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  let pick = parseInt(Math.random() * this.sum)// Wouldn't pass if Math.floor(Math.random() * this.sum);
  for (let i = 0; i < this.keys.length; i++) {
      if (pick < this.keys[i]) {
          return this.map.get(this.keys[i])
      }
  }
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/