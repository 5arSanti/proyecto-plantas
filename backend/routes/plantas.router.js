const express = require("express");
const { executeQuery } = require("../functions/executeQuery");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const searchTerm = request.query.BUSQUEDA || '';

		const baseQuery = `
			SELECT *
			FROM plantas
			WHERE LOWER(NOMBRE_PLANTA) LIKE LOWER('%${searchTerm}%')
			OR (NOMBRE_C_PLANTA) LIKE ('%${searchTerm}%')
			OR (CARACTERISTICAS_PLANTA) LIKE ('%${searchTerm}%')
			OR (ILUMINACION_PLANTA) LIKE ('%${searchTerm}%')
		`;

		const result = await executeQuery(baseQuery);

		return response.status(200).json({ plantas: result });
	}
	catch (err) {
		console.log(err.message)
		return response.status(500).json("Server Internal Error");
	}
});

module.exports = router;