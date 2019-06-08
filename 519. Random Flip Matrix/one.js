/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function(n_rows, n_cols) {
  this.map = new Map()
  this.rows = n_rows
  this.cols = n_cols
  this.total = this.rows * this.cols
};

/**
* @return {number[]}
*/
Solution.prototype.flip = function() {
  let r = parseInt(Math.random() * this.total)
  let x = this.map.get(r) || r
  let xt = this.map.get(--this.total) || this.total
  this.map.set(r, xt)
  return [parseInt(x / this.cols), x % this.cols]
};

/**
* @return {void}
*/
Solution.prototype.reset = function() {
  this.map.clear()
  this.total = this.rows * this.cols
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n_rows, n_cols)
* var param_1 = obj.flip()
* obj.reset()
*/