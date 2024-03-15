const express = require("express");

const plantasRouter = require("./plantas.router")
const usersRouter = require("./users.router")


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/plantas", plantasRouter);
	router.use("/users", usersRouter);

}

module.exports = routerApi;