const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
require('./config/mongoose')
const getRandomUrl = require('./generator')
const Url = require('./models/URL')

// setting static files
app.use(express.static('public'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  try {
    res.render('index')
  } catch (error) {
    console.error(error)
  }
})

app.post('/result', async (req, res) => {
  try {
    const originalUrl = req.body.originalUrl
    const urlFront = `${(req.secure) ? 'https://' : 'http://'}` + `${req.headers.host}/`
    let shortenUrl = urlFront + getRandomUrl(5)

    // originalUrl  exists
    const existsOriginalUrl = await Url.exists({ originalUrl })
    if (existsOriginalUrl) {
      res.render('result', { errorMessage: 'This url already has a short url,please back to previous page and try another url!' })
      return
    }

    // shortenUrl  exists
    let existsShortenUrl = await Url.exists({ shortenUrl })
    while (existsShortenUrl) {
      shortenUrl = urlFront + getRandomUrl(5)
      existsShortenUrl = await Url.exists({ shortenUrl })
    }
    Url.create({ originalUrl, shortenUrl })
      .then(() => {
        res.render('result', { shortenUrl, originalUrl })
      })

  } catch (error) {
    console.error(error)
  }
})

app.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl
    const allUrl = await Url.find().lean()
    const findOriginalUrl = allUrl.find(url => url.shortenUrl.includes(shortUrl))
    res.redirect(findOriginalUrl.originalUrl)

  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}at ${Date()}`)
})