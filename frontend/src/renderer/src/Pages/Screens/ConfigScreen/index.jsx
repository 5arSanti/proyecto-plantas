import { Link } from "react-router-dom";

import "./styles.css";
import { atras } from "../../../assets";
import { AppContext } from "../../../Context";
import React from "react";
import { BackButton } from "../../components/BackButton";

const ConfigScreen = () => {
	const context = React.useContext(AppContext);

	document.addEventListener("DOMContentLoaded", function() {
		var storedColor = localStorage.getItem('backgroundColor');
		if (storedColor) {
			document.body.style.backgroundColor = storedColor;
		}
	});

	function changeColor(color) {
		document.body.style.backgroundColor = color;
		localStorage.setItem('backgroundColor', color); // Almacenar el color en localStorage
	}

	function restoreColor(color) {
		document.body.style.backgroundColor = color;
		localStorage.setItem('backgroundColor', color);
	}


	return(
		<>
			<div className="button-container">
				<button className="change-color-button"
					onClick={() => {
						context.setActiveHighContrast(!context.activeHighContrast);
					}}
				>Cambiar modo de contraste</button>
				<br></br>
			</div>

			<BackButton uri={"/"}/>

		</>
	);
}

export { ConfigScreen };