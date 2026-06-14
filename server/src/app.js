const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const cors = require('cors')

const contactRoutes = require('./routes/contact.routes')
const githubRoutes = require('./routes/github.routes')
const filesRoutes = require('./routes/files.routes')

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRoutes)
app.use('/api/github', githubRoutes)
app.use('/api/files', filesRoutes)

module.exports = app