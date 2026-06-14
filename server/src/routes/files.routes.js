const express = require('express')
const router = express.Router()

const FILES = {
  resume: process.env.RESUME_FILE_ID,
  cert_isc2: process.env.CERT_ISC2_ID,
  cert_aws: process.env.CERT_AWS_ID,
  cert_nptel: process.env.CERT_NPTEL_ID,
  cert_deloitte: process.env.CERT_DELOITTE_ID
}

console.log('ENV CHECK:', FILES)

// Stream file from Drive through your server
router.get('/preview/:key', async (req, res) => {
  const fileId = FILES[req.params.key]
  if (!fileId) return res.status(404).json({ error: 'File not found' })

  const url = `https://drive.google.com/file/d/${fileId}/preview`
  res.redirect(url)
})

router.get('/download/:key', async (req, res) => {
  const fileId = FILES[req.params.key]
  if (!fileId) return res.status(404).json({ error: 'File not found' })

  const url = `https://drive.google.com/uc?export=download&id=${fileId}`
  res.redirect(url)
})

router.get('/view/:key', (req, res) => {
  const fileId = FILES[req.params.key]
  if (!fileId) return res.status(404).json({ error: 'File not found' })
  res.redirect(`https://drive.google.com/file/d/${fileId}/view`)
})

module.exports = router