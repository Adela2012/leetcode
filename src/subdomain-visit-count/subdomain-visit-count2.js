/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// Do not use String.split() to handle the string and the code will run faster 
// improved my runtime from 108ms to 72ms!
var subdomainVisits = function(cpdomains) {
  let map = {}
  cpdomains.forEach(i => {
      let index = i.indexOf(' ')
      let count = parseInt(i.substr(0, index))
      let domain = i.substr(index+1)
      for(let i = 0; i < domain.length; i++) {
          if(domain.charAt(i) == '.' || i == 0) {
              let item = i == 0 ? domain :domain.substr(i+1)
              if(map[item]) {
                  map[item] = count + map[item]
              } else {
                  map[item] = count
              }
          }
      }
  })
  return Object.keys(map).map(i => `${map[i]} ${i}`)
};