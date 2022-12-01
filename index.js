const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const dotenv = require("dotenv");

const articleRoutes = require("./routes/articleRoute");

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/articles", articleRoutes);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${process.env.PORT}`);
});
