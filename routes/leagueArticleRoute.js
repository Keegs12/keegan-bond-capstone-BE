const router = require("express").Router();
const leagueArticleController = require("../controllers/leagueArticleController");
router.route("/").get(leagueArticleController.articles);

module.exports = router;
