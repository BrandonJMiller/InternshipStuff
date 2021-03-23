
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
function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}

document.getElementById("upload").addEventListener("change", handleFiles, false);
<><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<input type="file" id="upload" />
	<audio id="audio" controls>
		<source src="" id="src" />
	</audio></>
