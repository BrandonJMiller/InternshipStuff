const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
const app = express()


const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.get('/', (req, res) => {
  res.send('Upload')
})


server.get('/', (req, res) => {
	res.send('Hello World')
})
/*
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
*/
app.use(express.urlencoded({
	extended: true
}))



