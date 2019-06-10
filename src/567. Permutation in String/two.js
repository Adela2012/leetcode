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
  
  for (let i = 0; i < N2 - N1; i++) {
      let r = s2.charCodeAt(i + N1) - a, l = s2.charCodeAt(i) - a
      if(matches(map1, map2)) return true
      map2[r]++
      map2[l]--
  }
  return matches(map1, map2)
};

var matches = function (map1, map2) {
  for (let i = 0; i < 26; i++) {
      if (map1[i] != map2[i]) return false
  }
  return true
}


// Time complexity: O(N1 + 26*(N2 - N1))
// Space complexity : O(1)