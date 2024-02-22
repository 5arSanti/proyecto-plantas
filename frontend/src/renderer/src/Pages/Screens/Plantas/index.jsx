import { PlantaCard } from "../../components/PlantaCard";

const PlantasScreen = () => {
    
	const array = [{
		NOMBRE: "Planta 1",
        TYPE: "ROSA"
	},
    {
		NOMBRE: "Planta 2",
        TYPE: "Coliflor"
	}]

    return(
        <>
            <div>Plantas</div>
            <div className="plantas-grid-container">
                {array.map((item, index) => (
                    <PlantaCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>

        </>
    );
}

export { PlantasScreen };