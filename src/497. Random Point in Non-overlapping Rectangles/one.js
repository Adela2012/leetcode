/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
  this.rects = rects
  this.map = new Map()
  this.sum = 0
  for (let i = 0; i < rects.length; i++) {
      let rect = rects[i]
      this.sum += (rect[3] - rect[1] + 1) * (rect[2] - rect[0] + 1)
      this.map.set(this.sum, i)
  }
  this.keys = [...this.map.keys()].sort((a, b) => a - b)
};

/**
* @return {number[]}
*/
Solution.prototype.pick = function() {
  let pick = parseInt(Math.random() * this.sum)
  let key = this.keys[0]
  for(let i = 0; i < this.keys.length; i++) {
      if (pick < this.keys[i]) { key = this.keys[i]; break; }
  }
  let rect = this.rects[this.map.get(key)]
  let x = rect[0] + (key - pick - 1) % (rect[2] - rect[0] + 1)
  let y = rect[1] + parseInt((key - pick - 1) / (rect[2] - rect[0] + 1))
  
  return [x, y]
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(rects)
* var param_1 = obj.pick()
*/