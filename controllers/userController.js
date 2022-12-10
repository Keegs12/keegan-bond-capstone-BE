const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

exports.register = async (req, res) => {
    try {
        const { first_name, last_name, phone, address, email, password } =
            req.body;
        console.log(req.body);
        // If any fields are missing, return
        if (
            !first_name ||
            !last_name ||
            !phone ||
            !address ||
            !email ||
            !password
        ) {
            return res.status(400).send("Please enter the required fields.");
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create the new user
        const newUser = {
            ...req.body,
            id: uuidv4(),
            password: hashedPassword,
        };

        const users = await knex("users").insert(newUser);
        res.status(201).send("Successfully registered a user");
    } catch (err) {
        res.status(400).send(`Failed to register a user ${err}`);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // If any fields are missing, return
        if (!email || !password) {
            return res.status(400).send("Please enter the required fields.");
        }

        // Find the user
        await knex("users")
            .where({ email: email })
            .first()
            .then((user) => {
                const isPasswordCorrect = bcrypt.compareSync(
                    password,
                    user.password
                );

                if (!isPasswordCorrect) {
                    return res.status(400).send("Invalid password");
                }

                const token = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_KEY
                );

                res.json({ token });
            });
    } catch (err) {
        res.status(400).send(`Invalid Credentials ${err}`);
    }
};

exports.current = async (req, res) => {
    // If there is no auth header provided
    if (!req.headers.authorization) return res.status(401).send("Please login");

    // Parse the Bearer token
    const authToken = req.headers.authorization.split(" ")[1];

    // Verify the token
    jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid auth token");
        }

        knex("users")
            .where({ email: decoded.email })
            .first()
            .then((user) => {
                // Respond with the user data
                delete user.password;
                res.json(user);
            });
    });
};
