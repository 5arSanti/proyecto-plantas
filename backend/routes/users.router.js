const express = require("express");
const { connection } = require("../database");


const router = express.Router();

router.post("/register", (request, response) => {
	const query = "INSERT INTO usuario (`NOMBRE`,`USUARIO`,`CONTRASEÑA`) VALUES (?)";

	try {
		const values = [
			request.body.name,
			request.body.email,
			request.body.password,
		]

		connection.query(query, [values], (err, result) => {
			if(err) { return response.json({Error: "Error creando el usuario"})}

			return response.json({Status: "Success"});
		});

	}
	catch (err) {
		console.log(err);
		response.status(500).json({Error: err})
	}
});

router.post("/login", (req, res) => {
    const query = "SELECT * FROM usuario WHERE USUARIO = ?";

    connection.query(query, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json({ Error: err.message })
        }

        if (data.length > 0) {
			if (req.body.password == data[0].CONTRASEÑA) {
				return res.json({ Status: "Success" });
			} else {
				return res.json({ Error: "La contraseña es incorrecta" });
			}

        } else {
            return res.json({ Error: "El usuario no está registrado." });
        }
    });
});

router.post("/admin-login", (req, res) => {
    const query = "SELECT * FROM admin WHERE USUARIO = ?";

    connection.query(query, [req.body.email], (err, data) => {
        if (err) {
            return res.status(500).json({ Error: err.message })
        }

        if (data.length > 0) {
			if (req.body.password == data[0].CONTRASEÑA) {
				return res.json({ Status: "Success" });
			} else {
				return res.json({ Error: "La contraseña es incorrecta" });
			}

        } else {
            return res.json({ Error: "El usuario no está registrado." });
        }
    });
});

module.exports = router;
