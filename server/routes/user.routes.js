var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user.controller')

router.get("/users", UserController.getUsers);

router.get("/users/:id", UserController.getUser);

router.post("/register", UserController.createUser);

router.post("/login", UserController.login);

router.post("/deleteUserByEmail", UserController.deleteUserByEmail);

router.post("/deleteUserByUserID", UserController.deleteUserByUserID);

router.post("/updateUsername", UserController.updateUsername);

router.post("/updatePassword", UserController.updatePassword);

router.post("/searchUser", UserController.searchUserByEmail);

module.exports = router;