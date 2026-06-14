const express = require('express');
const router = express.Router();
const { getGithubData } = require('../controllers/github.controller');

router.get('/', getGithubData);

module.exports = router;