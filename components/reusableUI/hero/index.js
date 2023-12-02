import React, { useEffect, useState } from "react";
import H1 from "../headingOne/index";
import { loadPixelatedImage } from "../imageLoader/index";
function index({
	text,
	heading,
	w,
	mt,
	himg,
	twoLine,
	headingLineOne,
	headingLineTwo,
}) {
	const [doubleLine, setDoubleLine] = useState(false);
	useEffect(() => {
		if (twoLine == true) {
			setDoubleLine(true);
		} else {
			setDoubleLine(false);
		}
	});
	useEffect(() => {
		loadPixelatedImage();
	}, []);
	return (
		<div>
			{/* <img loading="lazy" alt="Hero Image" src="" className={`w-full absolute top-0 z-0`} /> */}
			<div
				className={`absolute inset-0 w-full bg-black overflow-hidden z-0 top-0  ${
					himg ? " " + himg : " h-[648px]  "
				}`}
			>
				<div
					className="placeholder "
					data-large="https://tuk-cdn.s3.amazonaws.com/can-uploader/framereact-2-compressed.jpg"
				>
					<img
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/framereact-2-compressed.jpg"
						alt="Hero Image"
						className="img-small"
						alt="hero-gradient"
					/>
				</div>
			</div>
			<section
				className={`mx-auto container  ${
					mt ? " " + mt : "  mt-[146px] "
				} relative z-10 flex flex-col items-center justify-center`}
			>
				{doubleLine ? (
					<>
						<h1 className="2xl:text-9xl xl:text-8xl text-white md:text-6xl text-3xl font-bold 2xl:leading-[128px] xl:leading-[128px] md:leading-[96px] leading-24 tracking-[-0.06em] text-center  pb-4">
							{headingLineOne}
							<br />
							<span className="bg-clip-text product-gradient t-f-c pr-2">
								{headingLineTwo}
							</span>
						</h1>
						<p
							className={`md:text-xl text-base xl:px-0 sm:px-32 px-10 leading-[24px] tracking-3 ${
								w ? " " + w : " xl:w-[843px]  "
							} text-[#D1D4D6] md:mt-4 mt-0 text-center`}
						>
							{text}
						</p>
					</>
				) : (
					<>
						<H1 headingOne={heading} />
						<p
							className={`md:text-xl text-base xl:px-0 px-10 leading-[24px] tracking-3 ${
								w ? " " + w : " xl:w-[843px]  "
							} text-[#D1D4D6] md:mt-4 mt-0 text-center`}
						>
							{text}
						</p>
					</>
				)}
			</section>
		</div>
	);
}

export default index;
