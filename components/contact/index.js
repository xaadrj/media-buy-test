import React from "react";
import Hero from "../reusableUI/hero";
import Card from "./contactCard/index";
import FAQ from "./faq/index";
function index() {
	return (
		<>
			<Hero
				mt={"xl:mt-[96px] mt-[80px]"}
				heading={"Get in touch"}
				text={"We look forward to establishing communication with you"}
				w="md:w-[414px]"
			/>

			<Card />
			<FAQ />
		</>
	);
}

export default index;
