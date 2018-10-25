/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.set = []
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set.indexOf(val)>=0) {
      return false
  } else {
      this.set.push(val)
      return true
  }
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  var index = this.set.indexOf(val)
  if (index>=0)
  {
      this.set.splice(index, 1)
      return true
  }
  else {
      return false
  }
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let le = this.set.length
  let r = Math.floor(Math.random()*le)
  return this.set[r]
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = Object.create(RandomizedSet).createNew()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/