import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const domain = "http://localhost:3080";
	// ----------------------------------------------

	const api = `${domain}/api/v1`;
	const [apiUri, setApiUri] = React.useState(api);

	const [searchValue, setSearchValue] = React.useState("");

	//Filtros
	const [filters, setFilters] = React.useState({
        BUSQUEDA: "",
    });

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const handleSearch = (searchValue) => {
        handleFilterChange("BUSQUEDA", searchValue);
    };

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

			const filterParams = new URLSearchParams(filters);

            const endpoints = [
				`plantas?${filterParams.toString()}`
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
    }, [filters]);



	//CAMBIO DE COLORES
    const [activeButton, setActiveButton] = React.useState(1);
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);

    React.useEffect(() => {
        handleColorsByFilters();
    }, [activeButton, activeHighContrast]);

    const handleColorsByFilters = () => {
        const root = document.documentElement;
        const normalStyles = {
			"--main-body-color": "#F3FBEC",
            "--main-buttons-color": "#95E85C",
            "--main-title-color": "#648c01",
			"--login-border-color": "#27AE60"
        };
        const highContrastStyles = {
            "--main-buttons-color": "#000",
            "--main-title-color": "#000",
			"--login-border-color": "#000"
        };

        const styles = activeHighContrast ? highContrastStyles : normalStyles;
        Object.entries(styles).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };



    //Abrir modal de detalles
    const [openModal, setOpenModal] = React.useState({
        status: false,
        item: null,
    });

	//Filtros



	return(
		<AppContext.Provider
			value={{
				apiUri,

				loading,
				setLoading,
				responseData,

                openModal,
                setOpenModal,

				searchValue,
				setSearchValue,
				filters,
				handleFilterChange,
				handleSearch,

				setActiveHighContrast,
				activeHighContrast,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider };