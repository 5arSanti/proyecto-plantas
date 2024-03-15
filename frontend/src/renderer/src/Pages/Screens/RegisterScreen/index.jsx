import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { atras } from "../../../assets";

const RegisterScreen = () => {
	function redirectToRegistroUsuario() {
		// Guardar el color original en el almacenamiento local antes de redireccionar
		localStorage.setItem('originalBackgroundColor', document.body.style.backgroundColor);
		window.location.href = "registro_usuario.html";
	}

	function redirectToInicioSesion() {
		// Guardar el color original en el almacenamiento local antes de redireccionar
		localStorage.setItem('originalBackgroundColor', document.body.style.backgroundColor);
		window.location.href = "inicio_sesion.html";
	}

	// Aplicar el color de fondo al cargar la página
	document.addEventListener("DOMContentLoaded", function() {
		var color = localStorage.getItem('backgroundColor');
		if (color) {
			document.body.style.backgroundColor = color;
		}
	});

	return(
		<>
			<Link to={"/"} className="return-button">
				<img src={atras} alt="Volver al Inicio" width="50" />
			</Link>


			<div className="container">
				<h2>Registro de Usuario</h2>
				<Link className="button" to={"/register-user"}>Registrarse</Link>
				<Link className="button" to={"/login"}>Iniciar Sesión</Link>
			</div>
		</>
	);
}

export { RegisterScreen };