
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

<input id="image-file" type="file" onchange="SavePhoto(this)" >
<br><br>
Choose file and open chrome console > network tab to see the request details.
<br><br>
<small>Because in this example we send request to https://stacksnippets.net/upload/image the response code will be 404 ofcourse...</small>

<br><br>
(the stack overflow snippets, has some problem with error handling - the xhr.status is zero (instead of 404) which is similar to situation when we run script from file on <a href="https://stackoverflow.com/a/10173639/860099">local disc</a> - so I provide also js fiddle version which shows proper http error code <a href="https://jsfiddle.net/Lamik/k6jtq3uh/2/">here</a>)

