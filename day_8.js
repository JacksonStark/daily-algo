// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string.

// For Example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  let array = url.split('')
  let type = ''
  
  array.map((x,i) => x === '.')
  array[0] === 'w' ? type = 'www' : type = 'http'
  array[0] !== 'w' && (array[0] !== 'h' && array[1] !== 'h') ? type = 'direct' : null
  
  if (type === 'www') {
    array.splice(0,4)
    array.map((x,i) => x === '.' ? array = array.slice(0,i) : null)
  }
  
  if (type === 'http') {
    array.splice(0,7)
    // if it was https instead of http, we'll have a '/' left over
    array[0] === '/' ? array.shift() : null
    array[0] === 'w' && array[1] === 'w' ? array = domainName(array.join('')).split('') : null
    array.map((x,i) => x === '.' ? array = array.slice(0,i) : null)
  }

  if (type === 'direct') {
    array.map((x,i) => x === '.' ? array = array.slice(0,i) : null)
  }

  return array.join('')

}

domainName('www.youtube.com')



// www.
// http://
// https://