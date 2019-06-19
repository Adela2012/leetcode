/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let uf = {}
  for (let e of edges) {
      let u = e[0]
      let v = e[1]
      if (find(u) == find(v)) {
          return e
      } else {
          union(u, v)
      }
  }
  
  function union (a, b) {
      uf[find(a)] = uf[find(b)]
  }

  function find(x) {
      if (!uf[x]) uf[x] = x
      if (uf[x] === x) return x
      return find(uf[x])
  }
};

