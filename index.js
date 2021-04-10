
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

async function SavePhoto(inp) 
{
    let user = { name:'john', age:34 };
    let formData = new FormData();
    let photo = inp.files[0];      
         
    formData.append("photo", photo);
    formData.append("user", JSON.stringify(user)); 
    
    const ctrl = new AbortController()    // timeout
    setTimeout(() => ctrl.abort(), 5000);
    
    try {
       let r = await fetch('/upload/image', 
         {method: "POST", body: formData, signal: ctrl.signal}); 
       console.log('HTTP response code:',r.status); 
    } catch(e) {
       console.log('Huston we have problem...:', e);
    }
    
}

