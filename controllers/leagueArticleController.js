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
    // console.log("body :", req.files.image.data);
    console.log("body :", req.body);
    if (!req.body.articleTitle || !req.body.description || !req.files.image) {
        res.status(400).send(
            `Please make sure you have entered each field correctly`
        );
    }
    // const binaryImage = Buffer.from(req.body.image);
    // console.log(binaryImage);
    const fileName = `${uuidv4()}.png`;
    fs.writeFileSync("./public/images/" + fileName, req.files.image.data);

    const newArticle = {
        id: uuidv4(),
        article_title: req.body.articleTitle,
        description: req.body.description,
        author: req.body.author,
        image: `http://localhost:8080/images/${fileName}`,
    };
    try {
        const articleData = await knex("league_articles").insert(newArticle);
        res.status(201).send(articleData);
    } catch (error) {
        res.status(400).send(`error creating article ${error}`);
    }
};

exports.singleArticle = async (req, res) => {
    try {
        const lolArticle = await knex("league_articles").where({
            id: req.params.id,
        });
        if (lolArticle.length === 0) {
            res.status(404).send(
                `Article with id: ${req.params.id} does not exist!`
            );
        }
        res.status(200).json(lolArticle[0]);
    } catch (err) {
        res.status(400).send(
            `Error retrieving Inventory item: ${req.params.id} : ${err}`
        );
    }
};
