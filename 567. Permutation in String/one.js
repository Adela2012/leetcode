/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let N1 = s1.length, N2 = s2.length
  if (N1 > N2) return false
  
  let map1 = Array(26).fill(0), map2 = Array(26).fill(0), a = 'a'.charCodeAt()
  for (let i = 0; i < N1; i++) {
      map1[s1.charCodeAt(i) - a]++
      map2[s2.charCodeAt(i) - a]++
  }
  
  let count = 0
  for (let i = 0; i < 26; i++) {
      if (map1[i] == map2[i]) count++
  }
  
  for (let i = 0; i < N2 - N1; i++) {
      let r = s2.charCodeAt(i + N1) - a, l = s2.charCodeAt(i) - a
      if (count == 26) return true
      
      map2[r]++
      if (map2[r] == map1[r]) count++
      else if (map2[r] - 1 == map1[r]) count--
      
      map2[l]--
      if (map2[l] == map1[l]) count++
      else if (map2[l] + 1 == map1[l]) count--
  }
  return count == 26
};

// Time complexity: O(N1 + (N2 - N1))
// Space complexity : O(1)