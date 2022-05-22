const sql = require("mssql");
const dbConfig = require("../config/db.config.js");

exports.startConnection = async function () {
    sql.connect(dbConfig, (err) => {
        if (err) {
            console.log("Failed to open a SQL Database connection.", err.stack);
            process.exit(1);
        }
    });
}