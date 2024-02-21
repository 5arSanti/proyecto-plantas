const express = require("express");
const { executeQuery } = require("../functions/executeQuery");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const result = await executeQuery(`SELECT * FROM `);

		return response.status(200).json(result);
	}
	catch (err) {
		return response.status(500).json("Server Internal Error");
	}
});

module.exports = router;