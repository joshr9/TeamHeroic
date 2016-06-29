var router = require("./router.js")

//Problem: We need a simple way to look at a users badge account and JS points from a web browser
//Solution: Use Node.js to perform the profile look uups and serve our template via HTTP

//Create a web server
var http = require("http")
http.createServer(function(request, response){
  router.home(request, response)
  router.user(request, response)
}).listen(8080)
console.log('Server running at port 8080')
