import React from "react";
import { AppContext } from "../../../Context";
import { PlantaCard } from "../PlantaCard";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./styles.css";

const PlantasGridContainer = () => {
	const context = React.useContext(AppContext)

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		style: {
			width: "95%",
			heigth: 400,
		}
	};

	return(
		<>
			<Slider {...settings}>
				{context.responseData?.plantas?.map((item, index) => (
					<PlantaCard
						key={index}
						item={item}
					/>
				))}
			</Slider>
			<div className="plantas-grid-container">
				{context.responseData?.plantas?.map((item, index) => (
					<PlantaCard
						key={index}
						item={item}
					/>
				))}
			</div>
		</>

	);
}

export { PlantasGridContainer };