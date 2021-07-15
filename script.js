const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
var formidable = require('formidable');
var app = express();




function previewImages() {

  var preview = document.querySelector('#preview');
  
  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image");
    } // else...
    
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
      var image = new Image();
      image.height = 100;
      image.title  = file.name;
      image.src    = this.result;
      preview.appendChild(image);
    });
    
    reader.readAsDataURL(file);
    
  }

}

document.querySelector('#file-input').addEventListener("change", previewImages);






app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(5000);
/*
app.listen(PORT,() => {
	console.log('listening on ${PORT}')
})
*/
app.use(express.urlencoded({
	extended: true
}))
/*
app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
	
});


app.listen(PORT,() => {
	console.log('listening on ${PORT}')
})


server.get('/', (req, res) => {
	res.send('Hello World')
})
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
*/




