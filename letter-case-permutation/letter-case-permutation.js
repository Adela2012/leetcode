/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let set = new Set()
  helper('', S, set)
  return [...set]
};

var helper = (prev, s, set) => {
  if (s.length == 0) {
      set.add(prev)
  } else {
      let i = s.charAt(0)
      helper(prev+i.toLowerCase(), s.substr(1), set)
      helper(prev+i.toUpperCase(), s.substr(1), set)
  }
};