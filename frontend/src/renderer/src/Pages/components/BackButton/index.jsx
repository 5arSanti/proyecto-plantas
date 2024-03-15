import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import "./styles.css";

const BackButton = ({uri}) => {
	return(
		<Link to={uri} className="back-button-container">
			<IoIosArrowRoundBack/>
		</Link>
	);
}

export { BackButton };