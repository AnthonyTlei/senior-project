const scoreService = require('../services/score.service');

exports.getUserScoreByUserID = async function (req, res, next) {
    let userid = req.body.userid;

    scoreService.getUserScoreByUserID(userid).then((data) => {
        res.send(data);
    })
}

exports.getUserScoreByEmail = async function (req, res, next) {
    let email = req.body.email;

    scoreService.getUserScoreByEmail(email).then((data) => {
        res.send(data);
    })
}

exports.getTopUserScore = async function (req, res, next) {
    let count = req.body.count;
    let sortby = req.body.sortby;
    let direction = req.body.direction;

    scoreService.getTopUserScore(count, sortby, direction).then((data) => {
        res.send(data);
    })
}

exports.createScoreByUserID = async function (req, res, next) {
    let userid  = req.body.userid;
    let score = req.body.score;
    let date = req.body.date;

    console.log("Score USERID Controller: ", score);

    scoreService.createScoreByUserID(userid, score, date).then(() => {
        console.log("Score Created...");
        res.sendStatus(200);
    })
}

exports.createScoreByEmail = async function (req, res, next) {
    let email  = req.body.email;
    let score = req.body.score;
    let date = req.body.date;

    console.log("Score Email Controller: ", score);

    scoreService.createScoreByEmail(email, score, date).then(() => {
        console.log("Score Created...");
        res.sendStatus(200);
    })
}

exports.deleteScoreByUserID = async function (req, res, next) {
    let userid  = req.body.userid;

    scoreService.deleteScoreByUserID(userid).then(() => {
        console.log("Score Deleted...");
        res.sendStatus(200);
    })
}

exports.deleteScoreByScoreID = async function (req, res, next) {
    let scoreid  = req.body.scoreid;

    scoreService.deleteScoreByScoreID(scoreid).then(() => {
        console.log("Score Deleted...");
        res.sendStatus(200);
    })
}