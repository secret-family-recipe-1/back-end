const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const recipesRouter = require("../recipes/recipesRouter");
const usersRouter = require("../users/usersRouter.js");
const authRouter = require("../auth/auth-router.js");
const authenticate = require("../auth/authenticate-middleware.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/recipes", authenticate, recipesRouter);
server.use("/api/users", authenticate, usersRouter);
server.use("/api/auth", authRouter);

server.get('/', (req, res) => {
    res.json({ api: "UP! "});
})


module.exports = server;