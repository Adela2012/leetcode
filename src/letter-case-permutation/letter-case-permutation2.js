/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let set = []
  helper('', S, set)
  return set
};

var helper = (prev, s, set) => {
  if (s.length == 0) {
      set.push(prev)
  } else {
      let i = s.charAt(0)
      if(/[a-zA-Z]/.test(i)) {
          helper(prev+i.toLowerCase(), s.substr(1), set)
          helper(prev+i.toUpperCase(), s.substr(1), set)
      } else {
          helper(prev+i, s.substr(1), set)
      }   
  }
};