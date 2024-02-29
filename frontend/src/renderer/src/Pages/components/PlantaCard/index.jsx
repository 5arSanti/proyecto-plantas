import React from "react";
import { AppContext } from "../../../Context";
import { images } from "../../../utils/images";

import "./styles.css"

const PlantaCard = ({item}) => {
    const context = React.useContext(AppContext);

    const imagenRuta = images[item.NOMBRE_PLANTA] || "";

    return(
        <div className="planta-card" onClick={() => {
                context.setOpenModal({
                    status: !context.openModal?.status,
                    item: item,
                    image: imagenRuta,
                })
            }}>
            <div className="images-container">
                <img src={imagenRuta} alt={`imgen_${images[imagenRuta]}`} />
            </div>

            <button>
                {item.NOMBRE_PLANTA}
            </button>
        </div>
    );
}

export { PlantaCard };