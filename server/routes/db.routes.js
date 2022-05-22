var express = require('express');
var router = express.Router();

var DBController = require('../controllers/db.controller')

router.get("/resetDB", DBController.resetDB);

module.exports = router;