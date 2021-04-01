/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let st = []
  let tt = []
  for(let i = 0; i < S.length; i++) {
      if(S[i] === '#')  st.pop()
      else st.push(S[i]) 
  }
  for(let i = 0; i < T.length; i++) {
      if(T[i] === '#')  tt.pop()
      else tt.push(T[i]) 
  }
  return st.join('') == tt.join('')
};