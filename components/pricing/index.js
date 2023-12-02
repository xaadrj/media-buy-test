import React from "react";
import Hero from "../reusableUI/hero";
import Card from "./pricingCard/index";
import FAQ from "./faq/index";
function index() {
	return (
		<>
			<Hero
				mt={"xl:mt-[96px] mt-[80px]"}
				heading={"Pricing Plans"}
				text={"Subscription or lifetime license? we’ve got you covered"}
				w="md:w-[414px]"
			/>

			<Card />
			<FAQ />
		</>
	);
}

export default index;
