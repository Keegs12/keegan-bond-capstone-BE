const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router.route("/current").get(userController.current);
module.exports = router;
