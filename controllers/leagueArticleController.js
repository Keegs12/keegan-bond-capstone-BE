const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

exports.articles = async (req, res) => {
    try {
        const lolArticles = await knex("league_articles");

        res.status(200).json(lolArticles);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.addArticle = async (req, res) => {
    console.log(req.body);
    if (!req.body.article_title || !req.body.description || !req.body.image) {
        res.status(400).send(
            `Please make sure you have entered each field correctly`
        );
    }
    const binaryImage = Buffer.from(req.body.image);
    console.log(binaryImage);
    fs.writeFileSync("./public/images" + "image.png", binaryImage);

    const newArticle = {
        id: uuidv4(),
        article_title: req.body.article_title,
        description: req.body.description,
        author: req.body.author,
        image: req.body.image,
    };
    try {
        const articleData = await knex("league_articles").insert(newArticle);
        res.status(201).send(articleData);
    } catch (error) {
        res.status(400).send(`error creating article ${error}`);
    }
};
