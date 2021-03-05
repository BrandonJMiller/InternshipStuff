const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


/*
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

.listen(PORT, () => console.log(`Listening on ${ PORT }`))

.get('/', (req, res) => {
	res.send('Hello World')
})

.listen(port, () => {
	console.log(`listening on ${PORT}`)
})
*/
