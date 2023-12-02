import React, { useState } from "react";
import Hero from "./hero/index";
import Video from "./video";
import Feature from "./feature/index";
import ComponentSection from "./componentSection/index";
import BookDemo from "./bookDemo"
import Team from "./Team"
import Blog from "./Blog"
// import Testimonial from "./testimonial/index";
import Card from "./globe/index";
import PricingCard from "./pricingCard/index";
import AutoLayout from "../homePage/autoLayout/index";
import Subscribe from "../reusableUI/subscribe/index";
function homePage() {
	return (
		<>
			<Hero />
			<Video />
			<BookDemo/>
			<Feature />
			<Team/>
			<ComponentSection />
			{/* <Testimonial /> */}
			<Card />
			<Blog/>
			{/* <AutoLayout /> */}
			<Subscribe />
		</>
	);
}

export default homePage;
