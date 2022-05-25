const sql = require("mssql");

exports.getUserScoreByUserID = async function (userid) {

    try{
        let scores = await new sql.Request()
        .input('USER_ID', userid)
        .execute('sp_GetScoreByUserID');

        return scores.recordset;

    } catch (error)
    {
        console.log(error);
    }  
}

exports.getUserScoreByEmail = async function (email) {

    try{
        let scores = await new sql.Request()
        .input('EMAIL', email)
        .execute('sp_GetScoreByEmail');

        return scores.recordset;

    } catch (error)
    {
        console.log(error);
    }
}

exports.getTopUserScore = async function (count, sortby, direction) {
    try{
        let scores = await new sql.Request()
        .input('COUNT', count)
        .input('SORTBY', sortby)
        .input('DIRECTION', direction)
        .execute('sp_GetTopUserScore');

        return scores.recordset;
    } catch(error)
    {
        console.log(error);
    }
}

exports.createScoreByUserID = async function (userid, score, date) {

    try {
        await new sql.Request()
        .input('USER_ID', userid)
        .input('SCORE', score)
        .input('DATE', date)
        .execute('sp_CreateScoreByUserID');
    
    } catch (error) {
        console.log(error);
    }
}

exports.createScoreByEmail = async function (email, score, date) {

    try {
        await new sql.Request()
        .input('EMAIL', email)
        .input('SCORE', score)
        .input('DATE', date)
        .execute('sp_CreateScoreByEmail');
    
    } catch (error) {
        console.log(error);
    }
}

exports.deleteScoreByUserID = async function (userid) {

    try {
        await new sql.Request()
        .input('USER_ID', userid)
        .execute('sp_DeleteScoreByUserID');
    
    } catch (error) {
        console.log(erro);
    }
}

exports.deleteScoreByScoreID = async function (scoreid) {

    try {
        await new sql.Request()
        .input('SCORE_ID', scoreid)
        .execute('sp_DeleteScoreByScoreID');
    
    } catch (error) {
        console.log(erro);
    }
}