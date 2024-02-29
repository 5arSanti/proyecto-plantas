import React from "react";
import { AppContext } from "../../../Context";
import { images } from "../../../utils/images";

import { CgClose } from "react-icons/cg";

import "./styles.css";

const DetallesPlantas = () => {
    const context = React.useContext(AppContext);

    const { item } = context.openModal;
    const imagenRuta = images[item?.NOMBRE_PLANTA] || "";

    if(context.openModal?.status){
        return(
            <div className="detalles-plantas-container">
                <div className="title-and-button-container">
                    <h1 className="main-plantas-title">{item.NOMBRE_PLANTA}</h1>
                    <button onClick={() => {context.setOpenModal({
                        status: false
                    })}}>
                        <CgClose/>
                    </button>
                </div>

                <div className="detail-and-image-container">
                    <div>
                        <div>
                            <p>Nombre CIentifico: {item.NOMBRE_C_PLANTA}</p>
                            <p>Caracteristicas: {item.CARACTERISTICAS_PLANTA}</p>
                            <p>Iluminación: {item.ILUMINACION_PLANTA}</p>
                        </div>
                        <div>
                            <p>Riego de la Planta: {item.RIEGO_PLANTA}</p>
                            <p>Temperatura: {item.TEMPERATURA_PLANTA}</p>
                            <p>Corte: {item.CORTE_PLANTA}</p>
                            <p>Transplante: {item.TRANSPLANTE_PLANTA}</p>
                            <p>Tips: {item.TIPS}</p>
                        </div>
                    </div>
                    <div className="details-image-container">
                        <img src={imagenRuta} alt="" />
                    </div>
                </div>
            </div>
        );
    }

    
}

export { DetallesPlantas };