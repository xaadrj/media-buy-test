import React, { useState } from "react";
import H2 from "../../reusableUI/headingTwo/index";
import ButtonWithBorder from "../../reusableUI/buttonWithBorder/index";
import Icon from "../../reusableUI/Icons/icons";
import "pure-react-carousel/dist/react-carousel.es.css";

function index() {
	return (
		<>
			<section className="xl:mt-[128px] mt-[96px] relative lg:h-[914px] md:h-[750px] h-[750px]">
				<img
					src="https://tuk-cdn.s3.amazonaws.com/can-uploader/framereact-2.png"
					alt="Background Image for component section"
					className="absolute top-0 w-full h-full "
				/>
				<div className="relative z-20 md:py-24 py-12">
					<H2
						ptagColor={"text-gray-400"}
						textColor={"text-gray-50"}
						headingTwo={"1000+ Figma Auto-Layout Components"}
						firstLine={
							" Figit offers you a variety of components to help you design your next website, store, and landing page. (Sorry if you can’t find a ‘Thank You, Grandma’ category."
						}
						secondLine={
							" We’re still collecting the gazillion yarn patterns and Christmas sweater designs. We believe we’ll pull through soon. Fingers crossed.) "
						}
					/>

					<div className="flex items-center justify-center mt-8">
						<ButtonWithBorder
							link="/componentExplorer"
							text="View all Components"
							w="w-[297px]"
							h="h-[52px]"
						/>
					</div>
				
				
				</div>
			</section>
		</>
	);
}

export default index;
