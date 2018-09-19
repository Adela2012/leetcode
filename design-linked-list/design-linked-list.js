/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.length = 0
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
1->2->3 get(0) 1
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if(this.length === 0) return -1
  let point = this.head
  while (point.next && index > 0) {
      index--
      point = point.next
  }
  if(index == 0) {
      return point.val
  } else {
      return -1
  }
  
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  this.head = {
      val,
      next: this.head
  }
  this.length++
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let endNode = {val, next: null}
  if (this.length === 0) {
      this.head = endNode
  } else {
      let point = this.head
      while (point.next) {
          point = point.next
      }
      point.next = endNode
  }
  this.length++

  
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
      this.head = {val, next: this.head}
      this.length++
  } else if(index <= this.length) {
      let point = this.head
      index--
      while(point.next && index > 0) {
          point = point.next
          index--
      }
      if(index === 0) {
          let tmp = point.next ? point.next : null
          point.next = {val, next: tmp}
      }
      this.length++
  }
  

};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0) {
      this.head = this.head.next
      this.length--
  }
  if (index <= this.length - 1) {
      let point = this.head
      index--
      while (point.next && index > 0) {
          point = point.next
          index--
      }
      if (index === 0) {
          let tmp = point.next.next ? point.next.next : null
          point.next = tmp
      }
      this.length--
  }
  
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = Object.create(MyLinkedList).createNew()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/