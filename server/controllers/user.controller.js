const userService = require("../services/user.service");

exports.getUsers = async function (req, res, next) {
  userService.getUsers().then((data) => {
    res.send(data);
  });
};

exports.getUser = async function (req, res, next) {
  let userID = parseInt(req.params.id);
  userService.getUser(userID).then((data) => {
    res.send(data);
  });
};

exports.createUser = async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.createUser(email, password, username).then(() => {
    console.log("User Created...");
    res.sendStatus(200);
  });
};

exports.login = async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  userService.login(email, password).then((data) => {
    res.send(data);
  });
};

exports.deleteUserByEmail = async function (req, res, next) {
  let email = req.body.email;

  userService.deleteUserByEmail(email).then(() => {
    console.log("User Deleted...");
    res.sendStatus(200);
  });
};

exports.deleteUserByUserID = async function (req, res, next) {
  let userid = req.body.userid;

  userService.deleteUserByUserID(userid).then(() => {
    console.log("User Deleted...");
    res.sendStatus(200);
  });
};

exports.updateUsername = async function (req, res, next) {
  let userid = req.body.userid;
  let username = req.body.username;

  userService.updateUsername(userid, username).then(() => {
    console.log("Username Updated...");
    res.sendStatus(200);
  });
};

exports.updatePassword = async function (req, res, next) {
  let userid = req.body.userid;
  let password = req.body.password;

  userService.updatePassword(userid, password).then(() => {
    console.log("Password Updated...");
    res.sendStatus(200);
  });
};

exports.searchUserByEmail = async function (req, res, next) {
  let email = req.body.email;

  userService.searchUserByEmail(email).then((data) => {
    res.send(data);
  });
};
