const router = require("express").Router();
const leagueTeamsController = require("../controllers/leagueTeamsController");
router.route("/").get(leagueTeamsController.teams);

router.route("/:id").get(leagueTeamsController.singleTeam);
module.exports = router;
