
const request = require('request');
const fs = require('fs');
console.log(process.argv)
const argument = process.argv.slice(2)
const url = argument[0]
const file = argument[1]

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the homepage.
  
  
  fs.writeFile(file, body, error => {
    if (error) {
      console.error(error);
    }
    // file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
  });


});