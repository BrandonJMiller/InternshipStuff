
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
const app = express()


server.get('/', (req, res) => {
	res.send('Yo')
})
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})
app.use(express.urlencoded({
	extended: true
}))




