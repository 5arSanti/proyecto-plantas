import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

import { atras } from "../../../assets";
import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

const AdminScreen = () => {
	const context = React.useContext(AppContext);

	const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post(`${context.apiUri}/users/login`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        navigate("/plantas");
                    }
                })
                .catch(err => {throw new Error(err)})
        }
        catch (err) {
            alert(err);
        }
    }

	return(
		<>
			<Link to={"/registro"} className="return-button">
				<img src={atras} alt="Volver al Inicio" width="50" />
			</Link>

			<div className="login-container">
				<h2>Iniciar Sesión como Administrado</h2>
				<form onSubmit={handleSubmit} className="login-form">
					<input className="login-input" type="email" name="username" placeholder="Correo" required
						onChange={(event) => {setValues({...values, email: event.target.value})}}
					/><br />
					<input className="login-input" type="password" name="password" placeholder="Contraseña" required
						onChange={(event) => {setValues({...values, password: event.target.value})}}
					/><br />
					<input className="button" type="submit" value="Iniciar Sesión" />
				</form>
			</div>
		</>
	);
}

export { AdminScreen };