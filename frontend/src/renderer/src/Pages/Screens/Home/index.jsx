import React from "react";
import { AppContext } from "../../../Context";
import "./styles.css";

const Home = () => {
	const context = React.useContext(AppContext)

	// console.log(context.responseData);

	const array = [{
		NOMBRE: "Planta 1"
	},{
		NOMBRE: "Planta 2"
	}]

	return(
		<>
		{/* //DEspues de aca */}
			<h1>HOME</h1>
			<p>Hola</p>

			{array?.map((item, index) => (
				<>
					<p
						key={index}
					>
						Nombre {item.NOMBRE}
					</p>
				</>
			))}
		</>
	);
}

export { Home };