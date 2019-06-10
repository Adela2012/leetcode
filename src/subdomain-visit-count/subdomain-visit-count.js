/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// Do not use String.split() to handle the string and the code will run faster
// improved my runtime from 108ms to 72ms!
var subdomainVisits = function(cpdomains) {
    let map = {}
    cpdomains.forEach(i => {
        let arr = i.split(' ')
        let count = parseInt(arr[0])
        let domain = arr[1]
        let domainarr = domain.split('.')
        while(domainarr.length > 0) {
            let item = domainarr.join('.')
            if(map[item]) {
                map[item] = count + map[item]
            } else {
                map[item] = count
            }
            domainarr.shift()
        }
    })
    return Object.keys(map).map(i => `${map[i]} ${i}`)
};