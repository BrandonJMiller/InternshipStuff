const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

.listen(PORT, () => console.log(`Listening on ${ PORT }`))
/*
.get('/', (req, res) => {
	res.send('Hello World')
})

.listen(port, () => {
	console.log(`listening on ${PORT}`)
})
*/
