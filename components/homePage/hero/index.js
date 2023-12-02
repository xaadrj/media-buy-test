import React, { useEffect } from "react";
import ButtonWithBorder from "../../reusableUI/buttonWithBorder";
import ButtonBg from "../../reusableUI/buttonBg";
import { loadPixelatedImage } from "../../reusableUI/imageLoader/index";
function hero() {
	useEffect(() => {
		loadPixelatedImage();
	}, []);
	return (
		<>
			<div
				className={`absolute inset-0 w-full bg-black overflow-hidden z-0 top-0   md:h-[773px] h-[653px]`}
			>
				<div
					className="placeholder "
					data-large="https://tuk-cdn.s3.amazonaws.com/can-uploader/herofigitmain-compressed.jpg"
				>
					<img
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/herofigitmain-compressed.jpg"
						alt="Hero Image"
						className="img-small"
						alt="hero-gradient"
					/>
				</div>
			</div>
			<section className="mx-auto container mt-20 relative z-20 flex flex-col items-center justify-center ">
				<h1 className="2xl:text-[110px] xl:text-8xl md:text-6xl text-3xl flex flex-col items-center justify-center font-bold tracking-[-0.06em]  2xl:leading-[128px] xl:leading-[128px] md:leading-[96px]leading-[24px] text-center text-white">
					<div className="flex flex-row">YURi Automate </div>

					<span className="bg-clip-text product-gradient t-f-c">
						Advertising System
					</span>
					<span className="text-white pb-3">
					<span className="bg-clip-text product-gradient t-f-c">
							Clean
						</span>
						{" "}
						and{" "}
						<span className="bg-clip-text product-gradient t-f-c">
							Efficient.
						</span>
					</span>
				</h1>
				<p className="xl:text-xl md:text-lg text-base xl:leading-[30px] md:leading-[24px] leading-[24px] text-center text-[#D1D4D6] relative z-50  md:mt-5 mt-3 xl:px-0 px-10">
					Yuri is an intergrated, Media Buy ERP system intergrating material management, account management
					<br className="xl:block hidden" /> tracking system, automatic optimization and team management
				</p>
				
			</section>
		</>
	);
}

export default hero;
