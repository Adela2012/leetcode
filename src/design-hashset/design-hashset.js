/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = {}
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  this.set[key] = null
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  delete this.set[key]
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return (key in this.set)
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = Object.create(MyHashSet).createNew()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/