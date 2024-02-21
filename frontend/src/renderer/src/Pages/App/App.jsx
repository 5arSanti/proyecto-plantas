import React from "react";
// import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

import { AppProvider } from '../../Context';
import { Home } from "../Screens/Home";

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
				<Home/>
			</Wrapper>
		</AppProvider>
	);
}

export default App;