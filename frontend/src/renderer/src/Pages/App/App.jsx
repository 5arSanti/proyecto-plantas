import React from "react";
// import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

import { AppProvider } from '../../Context';
import { PlantasScreen } from "../Screens/Plantas";

import "./App.css";
import { DetallesPlantas } from "../Screens/DetallesPlantas";

const Wrapper = ({children}) => {
    // const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    // }, [location.pathname]);
	}, []);

    return children;
}

// const AppRoutes = () => {
//     let routes = useRoutes([
//         {path: , element: },
//         // {path: "/subscription", element: <SubscriptionScreen/>},
//         {path: "/*", element: },
//     ]);

//     return routes;
// }


const App = () => {

	return (
		<AppProvider>
			{/* <BrowserRouter> */}
			<Wrapper>
				<PlantasScreen/>
				<DetallesPlantas/>
			</Wrapper>
		</AppProvider>
	);
}

export default App;