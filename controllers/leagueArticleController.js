const knex = require("knex")(require("../knexfile"));

exports.articles = async (req, res) => {
    try {
        const lolArticles = await knex("league_articles");

        res.status(200).json(lolArticles);
    } catch (error) {
        res.status(400).send(error);
    }
};
