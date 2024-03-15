import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

import { AppProvider } from '../../Context';
import { PlantasScreen } from "../Screens/Plantas";

import "./App.css";
import { DetallesPlantas } from "../Screens/DetallesPlantas";
import { Home } from "../Screens/Home";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { AdminScreen } from "../Screens/AdminScreen";
import { ConfigScreen } from "../Screens/ConfigScreen";
import { UserRegisterScreen } from "../Screens/UserRegisterScreen";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/plantas", element: <PlantasScreen/>},
        {path: "/registro", element: <RegisterScreen/>},
        {path: "/login", element: <LoginScreen/>},
        {path: "/admin", element: <AdminScreen/>},
        {path: "/config", element: <ConfigScreen/>},
        {path: "/register-user", element: <UserRegisterScreen/>},
    ]);

    return routes;
}


const App = () => {

	return (
		<AppProvider>
			<HashRouter>
				<Wrapper>
					<PlantasScreen/>
					<AppRoutes/>
					<DetallesPlantas/>
				</Wrapper>
			</HashRouter>
		</AppProvider>
	);
}

export default App;