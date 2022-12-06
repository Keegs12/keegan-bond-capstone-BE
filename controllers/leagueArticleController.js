const knex = require("knex")(require("../knexfile"));

exports.articles = async (req, res) => {
    try {
        const lolArticles = await knex("league_articles");

        res.status(200).json(lolArticles);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.addArticle = (req, res) => {
    if (
        !id ||
        !article_title ||
        !description ||
        !created_at ||
        !author ||
        !image
    ) {
        res.status(400).send(
            `Please make sure you have entered each field correctly`
        );
    }
    try {
        const articleData = knex("league_articles").insert(req.body);
        res.status(200).send(articleData);
    } catch (error) {
        res.status(400).send(`error creating article ${error}`);
    }
};
