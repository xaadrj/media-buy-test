import React from "react";
import H2 from "../../reusableUI/headingTwo/index";
import Icon from "../../reusableUI/Icons/icons";
function feature() {
	return (
		<section className="flex flex-col items-center justify-center xl:mt-32 md:mt-24 mt-12">
			<H2
				headingTwo={"WORK BETTER AS A MONSTER WITH YURI"}
				firstLine={"Reduce manpower consumption through software, improve pitcher/team work efficiency."}
				secondLine={"At the same time, clear and reliable optimization suggestions are provided based on the big data learning function."}
			/>

			<div className="flex xl:flex-row flex-col xl:items-end items-center mt-8">
				<div className="w-[325px]   left-0 bottom-0  overflow-hidden  md:duration-700 ease-in-out  border border-gray-300 rounded-tl-lg rounded-bl-lg xl:rounded-tr-none rounded-tr-lg xl:rounded-br-none rounded-br-lg   px-[32px] py-[28px]   bg-white group cursor-pointer ">
					<div className="flex flex-col items-center justify-center ">
						<div className=" w-8 h-8  bg-blue-600 bg-opacity-20 border rounded border-blue-600 flex items-center justify-center">
							<Icon icon="mobile" />
						</div>
						<h3 className="text-xl h-10 font-semibold leading-5 text-center  text-gray-900 mt-4">
						Publish ads in batches with one click
						</h3>
						<p className="text-base h-48 leading-6  w-[261px]  md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-center text-gray-600 ">
						By presetting advertising templates, adding creative ideas in batches, and publishing ads to the selected advertising account with one click, you can achieve the free combination of multiple audiences, multiple materials, multiple copywriting, and multiple placements.
						</p>
					</div>
				</div>

				<div className="w-[325px]  xl:mt-0 mt-8   inset-x-0 mx-auto bottom-0  md:duration-700 ease-in-out  border border-gray-300 xl:rounded-t-none  rounded-t-lg xl:rounded-b-none rounded-b-lg px-[32px] py-[28px]   bg-white group cursor-pointer ">
					<div className="flex flex-col items-center justify-center ">
						<div className=" w-8 h-8  bg-blue-600 bg-opacity-20 border rounded border-blue-600 flex items-center justify-center">
							<Icon icon="accessibility" />
						</div>
						<h3 className="text-xl h-10 font-semibold leading-5 text-center  text-gray-900 mt-4">
						Batch management
						</h3>
						<p className="text-base h-48  leading-6  w-[261px]  md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-center text-gray-600 ">
						Creative management, account management, advertising management, BM management, virtual card management, visitor management, workbench, etc., comprehensive management functions, complete asset management work in one stop.
						</p>
					</div>
				</div>
				<div className="w-[325px]  xl:mt-0 mt-8  border-gray-300 border-t border-b   right-0 bottom-0 md:duration-700 ease-in-out  border rounded-tr-lg rounded-br-lg xl:rounded-tl-none rounded-tl-lg xl:rounded-bl-none rounded-bl-lg  e px-[32px] py-[28px]   bg-white group cursor-pointer ">
					<div className="flex flex-col items-center justify-center ">
						<div className="w-8 h-8  bg-blue-600 bg-opacity-20 border rounded border-blue-600  flex items-center justify-center">
							<Icon icon="dropInReady" />
						</div>
						<h3 className="text-xl h-10 font-semibold leading-5 text-center  text-gray-900 mt-4">
						Analysis and automatic optimization
						</h3>
						<p className="text-base h-48 leading-6  w-[261px]  md:duration-300 ease-in-out  overflow-hidden tracking-3 mt-3 text-center text-gray-600 ">
						The Yuri system provides a unified data panel to centrally manage advertising. The automatic optimization system intelligently optimizes based on preset rules and real-time advertising performance.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default feature;
