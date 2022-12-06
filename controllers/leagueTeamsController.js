const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

exports.teams = (req, res) => {
    const teamDataJSON = fs.readFileSync("./data/league-team-details.json");
    const teamData = JSON.parse(teamDataJSON);
    res.status(200).json(teamData);
};

exports.singleTeam = (req, res) => {
    const id = req.params.id;

    const teamDataJSON = fs.readFileSync("./data/league-team-details.json");
    const teamData = JSON.parse(teamDataJSON);

    const team = teamData.find((team) => {
        return team.id == id;
    });

    if (!team) {
        return res.status(404).send(`That team id: ${id} is invalid`);
    }

    res.json(team);
};
