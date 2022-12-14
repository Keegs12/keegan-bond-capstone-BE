const express = require("express");
const fileupload = require("express-fileupload");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());
dotenv.config();
app.use(express.json());

const leagueArticleRoute = require("./routes/leagueArticleRoute");
const leagueTeamsRoute = require("./routes/leagueTeamsRoute");
const userRoute = require("./routes/users");

app.use(fileupload());
app.use(express.urlencoded({ extended: true }));

app.use("/lol/articles", leagueArticleRoute);
app.use("/lol/teams", leagueTeamsRoute);
app.use("/users", userRoute);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(process.env.PORT, () => {
    console.log(`Server Running at http://localhost:${process.env.PORT}`);
});
