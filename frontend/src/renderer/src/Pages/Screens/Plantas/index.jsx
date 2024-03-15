import React from "react";

import { SearchInput } from "../../components/SearchInput";

import { AppContext } from "../../../Context";
import { PlantasGridContainer } from "../../components/PlantasGridContainer";

import "./styles.css"
import { BackButton } from "../../components/BackButton";

const PlantasScreen = () => {
    const context = React.useContext(AppContext)

    return(
        <>
			<BackButton uri={"/"}/>

			<div className="main-container">
				<div className="search-and-back-input-container">
					<SearchInput
						onSearch={context.handleSearch}
					/>
				</div>

				<h1 className="main-plantas-title">
					Wiki de Plantas
				</h1>

				<PlantasGridContainer/>
			</div>


        </>
    );
}

export { PlantasScreen };