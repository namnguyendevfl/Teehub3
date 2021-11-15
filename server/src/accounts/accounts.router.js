const router = require("express").Router({mergeParams : true});
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./accounts.controller");

router
.route("/login/:userName")
.post(controller.createUserLoggingIn)
.get(controller.readUserLoggingIn)
.all(methodNotAllowed);

router
.route('/')
.get(controller.listUsers)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router;