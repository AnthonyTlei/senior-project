var express = require('express');
var router = express.Router();

var ScoreController = require('../controllers/score.controller')

router.post("/getUserScoreByUserID", ScoreController.getUserScoreByUserID);

router.post("/getUserScoreByEmail", ScoreController.getUserScoreByEmail);

router.post("/getTopUserScore", ScoreController.getTopUserScore)

router.post("/addScoreByUserID", ScoreController.createScoreByUserID);

router.post("/addScoreByEmail", ScoreController.createScoreByEmail);

router.post("/deleteScoreByUserID", ScoreController.deleteScoreByUserID);

router.post("/deleteScoreByScoreID", ScoreController.deleteScoreByScoreID);

module.exports = router;