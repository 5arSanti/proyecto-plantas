import React from "react";
import { AppContext } from "../../../Context";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

import { plant, ecobloom } from "../../../assets";

const Home = () => {
	const context = React.useContext(AppContext)


		// Verificar si hay un color almacenado en localStorage y aplicarlo
		var storedColor = localStorage.getItem('backgroundColor');
		if (storedColor !== null) {
			document.body.style.backgroundColor = storedColor;
		} else {
			// Si no hay un color almacenado, aplicar el color de fondo predeterminado
			document.body.style.backgroundColor = '#f3fbec';
		}

		function register() {
			// Obtener el color actual del fondo
			var currentColor = document.body.style.backgroundColor;

			// Redireccionar a la página de registro y pasar el color como parámetro en la URL
			// window.location.href = "registro.html?color=" + encodeURIComponent(currentColor);
			useNavigate("/registro")
		}

		function admin() {
			// Obtener el color actual del fondo
			var currentColor = document.body.style.backgroundColor;

			// Redireccionar a la página de administrador y pasar el color como parámetro en la URL
			window.location.href = "admin.html?color=" + encodeURIComponent(currentColor);
		}

		function openSettings() {
			window.location.href = "configuracion.html";
		}

		function applyColor(color) {
			localStorage.setItem('backgroundColor', color);
			document.body.style.backgroundColor = color;
		}



	return(
		<>
			<Link className="config-button" to={"config"}>
				<div className="config-icon"></div>
			</Link>
			<img id="ecobloom" src={ecobloom} alt="ecobloom" />
			<img id="plant" src={plant}  alt="plant" />

			<div className="button-container">
				<Link className="button" to={"/registro"}>Acceder como usuario</Link>
				<Link className="button" to={"/admin"}>Acceder como administrador</Link>
			</div>
		</>
	);
}

export { Home };