const express = require('express')
const app = express()
const PORT = 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')

// setting static files
app.use(express.static('public'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/result', (req, res) => {
  res.render('result')
})
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}at ${Date()}`)
})