/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let map = new Map()
  licensePlate = licensePlate.toLowerCase()
  for (let s of licensePlate) {
      if (/[a-z]/.test(s)) {
          if (map.has(s)) {
              map.set(s, map.get(s) + 1)
          } else {
              map.set(s, 1)
          }
      }
  }
  
  let arr = []
  
  words.forEach((str, i) => {
      arr[i] = new Map()
      arr[i].set('str', str)
      
      for (let s of str) {
          if (arr[i].has(s)) {
              arr[i].set(s, arr[i].get(s) + 1)
          } else {
             arr[i].set(s, 1)
          }
      }
      
  })
  
  for (let j = 0; j < arr.length; j++) {
      let a = arr[j]
      map.forEach((value, key, map) => {
          if (a.get(key) >= value) {
          } else {
              arr[j] = ''
          }
      })
  }
  
  
  let min = 15
  let res 
  for (let a of arr) {
      if (a != '' && a.get('str').length < min) {
          min = a.get('str').length
          res = a.get('str')
      }
  }
  return res
};

// 108 ms	42.7 MB