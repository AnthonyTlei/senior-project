const dbService = require('../services/db.service')

exports.resetDB = async function (req, res, next) {
    dbService.resetDB().then(() => {
        console.log("Database Cleaned...");
        res.sendStatus(200);
    });
}