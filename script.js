
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
const app = express()



var http = require('http');
var formidable = require('./formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(5000);



server.get('/', (req, res) => {
	res.send('Yo')
})
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
app.use(express.urlencoded({
	extended: true
}))




