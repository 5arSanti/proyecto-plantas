import { imagen1 } from "../../../assets";

import "./styles.css"

const PlantaCard = ({item}) => {
    return(
        <div className="planta-card">
            <p>{item.NOMBRE}</p>
            <p>{item.TYPE}</p>

            <img src={imagen1} alt={`imgen_${imagen1}`} />
        </div>
    );
}

export { PlantaCard };