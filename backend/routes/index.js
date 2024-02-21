const express = require("express");

const plantasRouter = require("./plantas.router")


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.use("/plantas", plantasRouter);

}

module.exports = routerApi;