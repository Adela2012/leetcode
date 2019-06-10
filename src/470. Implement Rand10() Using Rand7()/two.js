/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let a, b, idx
  while(true) {
      a = rand7()
      b = rand7()
      idx = b + (a - 1) * 7
      if (idx <= 40) return (idx - 1)%10 + 1
      a = idx - 40
      b = rand7()
      idx = b + (a - 1)
     if (idx <= 60) return (idx - 1)%10 + 1
      a = idx - 60
      b = rand7()
      idx = b + (a - 1)
     if (idx <= 20) return (idx - 1)%10 + 1
      
  }
};