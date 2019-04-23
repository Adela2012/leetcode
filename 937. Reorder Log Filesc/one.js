/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let strArr = []
  let numArr = []
  for (let a of logs) {
      if (/[0-9]/.test(a.slice(-1))) {
          numArr.push(a)
      } else {
          strArr.push(a)
      }
  }
  strArr.sort((a, b)=>{
      let s1 = [a.slice(0, a.indexOf(' ')), a.slice(a.indexOf(' ')+1)]
      let s2 = [b.slice(0, b.indexOf(' ')), b.slice(b.indexOf(' ')+1)]
      let cmp = compareTo(s1[1], s2[1])
      if (cmp != 0) return cmp
      return compareTo(s1[0], s2[0])
  })
  
  return strArr.concat(numArr)
};

var compareTo = (a, b) => {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
      let aNum = a.charCodeAt(i)
      let bNum = b.charCodeAt(i)
      if (aNum == bNum) continue
      if (aNum - bNum > 0) {
          return 1
      }
      if (aNum - bNum < 0) {
          return -1
      }
  }
  return 0
}

// 68 ms	37.6 MB