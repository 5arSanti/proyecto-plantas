import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const domain = "http://localhost:3080";
	// ----------------------------------------------

	const api = `${domain}/api/v1`;
	const [apiUri, setApiUri] = React.useState(api);

	// Funciones para realizar fetch al backend
	const [loading, setLoading] = React.useState(false);
	const [responseData, setResponseData ] = React.useState(null);

	const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUri}/${endpoint}`);

            if (!response.status === 200) {
                throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }

            return await response.json();

        }
        catch (err) {
            throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const endpoints = [
				"plantas"
            ];

            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});

            setResponseData(combinedResults);

        } catch (err) {
			console.log(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchAllData();
    }, []);


    //Abrir modal de detalles
    const [openModal, setOpenModal] = React.useState({
        status: false,
        item: null,
    });
    React.useEffect(() => {
        console.log(openModal.status)
    }, [openModal]);


	return(
		<AppContext.Provider
			value={{
				loading,
				setLoading,
				responseData,

                openModal,
                setOpenModal,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider };