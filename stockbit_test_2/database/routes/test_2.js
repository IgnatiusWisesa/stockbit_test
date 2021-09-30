const express = require('express')
const router = express.Router()
const { test_2 : test2Routes } = require('../controllers');

router.get('/search', test2Routes.searchMovies)

router.get('/detail', test2Routes.detailMovie)

module.exports = router;