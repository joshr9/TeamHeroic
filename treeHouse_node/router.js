var Profile = require("./profile.js")
var render = require('./render.js')
//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    response.writeHead(200, {'Content-Type': 'tet/plain'})
    render.view("header", {}, response)
    render.view("search", {}, response)
    render.view("footer", {}, response)
    response.end()

  }
    //show search

    //if url == "/" && POST
    //redirect to /:username
}


//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response){
  //if url === "/...."
  var username = request.url.replace("/", "")
  if(username.length > 0){
    response.writeHead(200, {'Content-Type': 'tet/plain'})
    render.view("header", {}, response)
    response.end()

    //get json from Treehouse

    var studentProfile = new Profile(username)

    studentProfile.on("end", function(profileJSON){
      //show profile
      //store values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      //simple response
      render.view("profile", values, response)
      render.view("footer", {}, response)
      response.end()
    });

    studentProfile.on("error", function(error){
      //show error
      render.view("error", {errorMessage: error.message}, response)
      render.view("search", {}, response)
      render.view("footer", {}, response)
    });

  }
}

module.exports.home = home
module.exports.user = user
