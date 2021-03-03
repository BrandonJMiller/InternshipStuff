const express = require('express')
const app = express()
const port = https://calm-atoll-49669.herokuapp.com/

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
