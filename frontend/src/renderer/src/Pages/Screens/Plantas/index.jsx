import { PlantaCard } from "../../components/PlantaCard";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import "./styles.css"
import React from "react";
import { AppContext } from "../../../Context";

const PlantasScreen = () => {
    const context = React.useContext(AppContext)



    return(
        <>
        <div className="main-container">
            <div className="search-and-back-input-container">
                <button>
                    <IoIosArrowBack/>
                </button>

                <div className="search-input">
                    <input type="text" />
                    <IoIosSearch />
                </div>
            </div>

            <h1 className="main-plantas-title">
                Wiki de Plantas
            </h1>

            <div className="plantas-grid-container">
			{context.responseData?.plantas?.map((item, index) => (
                    <PlantaCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>


        </>
    );
}

export { PlantasScreen };