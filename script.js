const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
const app = express()


var formidable = require('formidable');

//var app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

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

app.listen('listening on # ${PORT}');

server.get('/', (req, res) => {
	res.send('Hello World')
})
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
app.use(express.urlencoded({
	extended: true
}))



