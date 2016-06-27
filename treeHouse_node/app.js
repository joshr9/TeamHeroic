//Problem: We need a simple way to look at a users badge account and JS points from a web browser

//Solution: Use Node.js to perform the profile look uups and serve our template via HTTP

//1. Create a web server

var http = require("http")
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'tet/plain'})
  response.end('Hello World\n')
}).listen(3000)
console.log('Server running at port 3000')
//2. Handle HTTP route GET / and POST / i.e. Home
  //if url == "/" && GET
    //show search
  //if erl == "/" && POST
    //redirect to /:username

//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url === "/...."
    //get json from Treehouse
      //on "end"
        //show profile
      // on "error"
        //show error

//4. function that handles the reading of files and merge in values
  //read from file and get a string
    //merge values in to string
