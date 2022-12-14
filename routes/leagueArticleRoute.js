const router = require("express").Router();
const leagueArticleController = require("../controllers/leagueArticleController");
router
    .route("/")
    .get(leagueArticleController.articles)

    .post(leagueArticleController.addArticle);

router.route("/:id").get(leagueArticleController.singleArticle);
module.exports = router;
