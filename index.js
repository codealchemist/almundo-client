'use strict'

const express = require('express')
const http = require('http')
const compression = require('compression')
const app = express()
const bodyParser = require('body-parser')
// const ejs = require('ejs')
const port = process.env.PORT || 5000

app.set('view engine', 'html')
// app.engine('html', ejs.renderFile)
app.set('views', __dirname + '/dist')
app.use(compression())

// parse application/json
app.use(bodyParser.json())

// static routes
app.use(express.static(__dirname + '/dist'))

app.use(function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

// not found
app.use((req, res) => {
  res.sendStatus(404)
})

const server = http.createServer(app)
server.listen(port)
console.info(`--- server started on port ${port}`)
