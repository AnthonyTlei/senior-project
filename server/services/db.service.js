const sql = require("mssql");

exports.resetDB = async function () {
    try {
        await new sql.Request()
        .execute('sp_ResetDB');
    } catch (error) {
        console.log(error);
    }   
}