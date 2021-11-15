const router = require("express").Router({mergeParams: true});
const controller = require("./notebooks.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
.route("/:userName")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router;