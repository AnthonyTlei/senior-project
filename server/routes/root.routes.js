var express = require('express');
var rootRouter = express.Router();

var user = require('./user.routes.js');
var score = require('./score.routes.js');
var db = require('./db.routes.js');

rootRouter.use('/api', user);
rootRouter.use('/api', score);
rootRouter.use('/api', db);

module.exports = rootRouter;