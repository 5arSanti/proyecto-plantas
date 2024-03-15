import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import { atras } from "../../../assets";
import { AppContext } from "../../../Context";
import React from "react";
import { BackButton } from "../../components/BackButton";

const UserRegisterScreen = () => {
	const context = React.useContext(AppContext);

	document.addEventListener("DOMContentLoaded", function() {
		var color = localStorage.getItem('backgroundColor');
		if (color) {
			document.body.style.backgroundColor = color;
		}
	});

	const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post(`${context.apiUri}/users/register`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        navigate("/login");
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
			<BackButton uri={"/registro"}/>

			<div className="admin-form-container">
				<div className="container">
					<h2>Registro de Usuario</h2>
					<form onSubmit={handleSubmit}>
						<input type="text" id="nombre" name="nombre" placeholder="Nombre" required
							onChange={(event) => {setValues({...values, name: event.target.value})}}
						/><br/>
						<input type="email" id="usuario" name="usuario" placeholder="Correo" required
							onChange={(event) => {setValues({...values, email: event.target.value})}}

						/><br/>
						<input type="password" id="contraseña" name="contraseña" placeholder="Contraseña" required
							onChange={(event) => {setValues({...values, password: event.target.value})}}

						/><br/>
						<input type="submit" value="Registrarse" />
					</form>

					<Link to={"/login"} className="login-link">Ya tengo cuenta, deseo iniciar sesión</Link>
				</div>
			</div>

		</>
	);
}

export { UserRegisterScreen };