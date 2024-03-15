import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { atras } from "../../../assets";
import React from "react";
import axios from "axios";
import { AppContext } from "../../../Context";
import { BackButton } from "../../components/BackButton";

const LoginScreen = () => {
	const context = React.useContext(AppContext);

	document.addEventListener("DOMContentLoaded", function() {
		var color = localStorage.getItem('backgroundColor');
		if (color) {
			document.body.style.backgroundColor = color;
		}
	});

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
			<BackButton uri={"/registro"}/>

			<div className="admin-form-container">
				<div className="container">
					<h2>Iniciar Sesión</h2>
					<form onSubmit={handleSubmit}>
						<input type="email" name="username" placeholder="Correo" required
							onChange={(event) => {setValues({...values, email: event.target.value})}}
						/><br />
						<input type="password" name="password" placeholder="Contraseña" required
							onChange={(event) => {setValues({...values, password: event.target.value})}}
						/><br />
						<input type="submit" value="Iniciar Sesión" />
					</form>
					<Link to={"/register-user"} className="register-link">No tengo cuenta aún, deseo registrarme</Link>
				</div>
			</div>

		</>
	);
}

export { LoginScreen };