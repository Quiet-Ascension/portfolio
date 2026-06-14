const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = require('./app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

console.log('MONGO:', process.env.MONGO_URI)
console.log('CERT_ISC2:', process.env.CERT_ISC2_ID)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
})