const express = require('express')
const router = new express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Get Sprint and Feature for URL links
router.use('/', (req, res, next) => {
  req.version = req.originalUrl.split('/')[1]
  res.locals.version = req.version
  next()
})

// VERSIONS
router.use(/\/version-([0-99]+)/, (req, res, next) => {
  require(`./views/version-${req.params[0]}/routes`)(req, res, next);
})

module.exports = router