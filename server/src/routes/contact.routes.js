const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contact.controller');
const { contactLimiter } = require('../middleware/rateLimiter');

router.post('/', contactLimiter, sendMessage);

module.exports = router;