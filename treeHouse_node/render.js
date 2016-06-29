var fs = require("fs")

function mergeValues(values, content) {
  //cycle over the keys
  for(var key in values){
    //AKA: values.avatarUrl === values["avatarURL"]
    content = content.replace("{{" + key + "}}", values[key])
  }
    //replace all {{key}} with the value from the values object

  //return merge contents
  return content
}

function view(templateName, values, response) {
  //read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"})
  //insert values into Fhe content
  fileContents = mergeValues(values, fileContents)
  //write out the response
  response.write(fileContents)
}

module.exports.view = view
