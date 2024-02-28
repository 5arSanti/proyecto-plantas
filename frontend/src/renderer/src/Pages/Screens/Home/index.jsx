import React from "react";
import { AppContext } from "../../../Context";
import "./styles.css";

const Home = () => {
	const context = React.useContext(AppContext)

	// console.log(context.responseData);

	

	return(
		<>
		{/* //DEspues de aca */}
			<h1>HOME</h1>
			<p>Hola</p>

			{context.responseData?.map((item, index) => (
				<>
					<p
						key={index}
					>
						Nombre {item.NOMBRE_PLANTA}
					</p>
				</>
			))}
		</>
	);
}

export { Home };