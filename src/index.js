const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

// Database
const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use(require('./routes/root'))
app.use(require('./routes/login'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Start
app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`)
})