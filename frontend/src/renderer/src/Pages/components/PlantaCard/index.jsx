import { imagen1 } from "../../../assets";

import "./styles.css"

const PlantaCard = ({item}) => {
    return(
        <div className="planta-card">
            <img src={imagen1} alt={`imgen_${imagen1}`} />
            <button>{item.NOMBRE_PLANTA}</button>
        </div>
    );
}

export { PlantaCard };