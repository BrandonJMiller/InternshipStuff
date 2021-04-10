
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
const app = express()

server.get('/', (req, res) => {
	res.send('Hello World')
})

server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
app.use(express.urlencoded({
	extended: true
}))
app.post('/submit-form', (req, res) => {
	const username = req.body.username
	res.end()
})
/*
function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}
*/
function SavePhoto(e)
{
 let user = { name:'john', age:34 };
    let xhr = new XMLHttpRequest();
    let formData = new FormData();
    let photo = e.files[0];      
    
    formData.append("user", JSON.stringify(user));   
    formData.append("photo", photo);
    
    xhr.onreadystatechange = state => { console.log(xhr.status); } // err handling
    xhr.timeout = 5000;
    xhr.open("POST", '/upload/image'); 
    xhr.send(formData);
}
