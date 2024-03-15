import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

import { atras } from "../../../assets";
import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";
import { BackButton } from "../../components/BackButton";

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
            axios.post(`${context.apiUri}/users/admin-login`, values)
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
		<div className="admin-form-container">
			<BackButton uri={"/registro"}/>

			<div className="login-container">
				<h2>Iniciar Sesión como Administrado</h2>
				<form onSubmit={handleSubmit} className="login-form">
					<input className="login-input" type="text" name="username" placeholder="Usuario" required
						onChange={(event) => {setValues({...values, email: event.target.value})}}
					/><br />
					<input className="login-input" type="password" name="password" placeholder="Contraseña" required
						onChange={(event) => {setValues({...values, password: event.target.value})}}
					/><br />
					<input type="submit" value="Iniciar Sesión" />
				</form>
			</div>
		</div>

		</>
	);
}

export { AdminScreen };