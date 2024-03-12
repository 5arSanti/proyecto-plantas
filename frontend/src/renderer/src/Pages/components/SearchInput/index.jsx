import React from "react";

import { AppContext } from "../../../Context";

import { CiSearch } from "react-icons/ci";


import "./styles.css";

const SearchInput = ({onSearch}) => {
    const context = React.useContext(AppContext);

    const handleInputChange = (event) => {
        context.setSearchValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === "Enter") {
            onSearch(context.searchValue);
        }
    };

    return(
		<div className="input-container">
			<div className="input-and-button-container">
				<input
					type="text"
					name="plantas-search-input"
					placeholder="Buscar"
					value={context.searchValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}
				/>
				<button onClick={() => onSearch(context.searchValue)}
					title="Buscar"
				>
					<CiSearch/>
				</button>
			</div>
		</div>
    );
}

export { SearchInput };