url =new URL( "http://localhost:5000/profile/user")

console.log(url.pathname)

var pathArray = url.pathname.split('/');

console.log(pathArray[pathArray.length-1])