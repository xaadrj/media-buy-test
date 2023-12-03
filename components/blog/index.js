import React from "react";
import Hero from "../reusableUI/hero/index";
import Docs from "./docs/index";
import Subscribe from "../reusableUI/subscribe";
function index() {
	return (
		<>
			<div className="lg:h-[428px] ">
				<Hero
					mt="mt-[70px]"
					himg={"lg:h-[648px] md:h-[380px] h-[430px]"}
					heading={"Blogs"}
					
				/>
			</div>
			<Docs />
			<Subscribe />
		</>
	);
}

export default index;
