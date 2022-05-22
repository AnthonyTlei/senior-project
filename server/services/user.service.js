const sql = require("mssql");

exports.getUsers = async function () {
  try {
    let users = await new sql.Request().execute("sp_GetUsers");

    return users.recordset;
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async function (userID) {
  try {
    let user = await new sql.Request()
      .input("ID", userID)
      .execute("sp_SearchUserID");

    return user.recordset;
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = async function (email, password, username) {
  try {
    await new sql.Request()
      .input("USERNAME", username)
      .input("EMAIL", email)
      .input("PASSWORD", password)
      .execute("sp_CreateUser");
  } catch (error) {
    console.log(result);
  }
};

exports.login = async function (email, password) {
  try {
    let user = await new sql.Request()
      .input("EMAIL", email)
      .input("PASSWORD", password)
      .execute("sp_Login");

    return user.recordset;
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserByEmail = async function (email) {
  try {
    await new sql.Request().input("EMAIL", email).execute("sp_DeleteUserByEmail");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserByUserID = async function (userid) {
  try {
    await new sql.Request().input("USERID", userid).execute("sp_DeleteUserByUserID");
  } catch (error) {
    console.log(error);
  }
};

exports.updateUsername = async function (userid, username) {
  try {
    await new sql.Request().input("USERID", userid).input("USERNAME", username).execute("sp_UpdateUsername");
  } catch (error) {
    console.log(error);
  }
};

exports.updatePassword = async function (userid, password) {
  try {
    await new sql.Request().input("USERID", userid).input("PASSWORD", password).execute("sp_UpdatePassword");
  } catch (error) {
    console.log(error);
  }
};

exports.searchUserByEmail = async function (email) {
  try {
    let user = await new sql.Request()
      .input("EMAIL", email)
      .execute("sp_SearchUserEmail");

    return user.recordset;
  } catch (error) {
    console.log(error);
  }
};
