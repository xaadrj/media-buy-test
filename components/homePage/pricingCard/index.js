import React, { useState } from "react";
import H2 from "../../reusableUI/headingTwo/index";
import Checks from "../../reusableUI/checks/index";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

function index() {
	const [loading, setLoading] = useState(false);

	const StripeRedirect = async () => {
		setLoading(true);
		await axios
			.post(process.env.NEXT_PUBLIC_LINK + "/stripe/session/create", {
				type: "LIFETIME_SUBSCRIPTION",
			})
			.then((res) => res.data)
			.then((data) => {
				setLoading(false);
				router.push(data.data.url);
			})
			.catch((err) => {
				setLoading(false);
			});
	};
	const router = useRouter();
	return (
		<>
			<section className="mx-auto container flex flex-col items-center justify-center xl:mt-[128px] mt-[96px] 2xl:px-4 xl:px-10 px-4">
				<H2 headingTwo={"Like What You Saw?"} ptag={false} />
				<p className="text-xs md:text-base uppercase font-medium tracking-[0.325em] md:leading-none leading-6 text-center text-gray-600 xl:mt-6 mt-4">
					Help pay our next rent
				</p>
				<div className=" xl:flex border border-[#E2E8F0] rounded-lg md:mt-[113px] mt-12 relative md:w-auto w-full ">
					<div className="w-[651px] xl:h-auto h-[382px] bg-[#F8FAFC]  flex-shrink-0 items-center justify-center px-[77px] md:flex hidden">
						<img
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/imageforpricingcard%20%281%29-compressed.jpg"
							alt="Component Example"
							className="absolute w-[497px] xl:bottom-0 xl:-top-10 top-0 xl:mt-0 -mt-12"
						/>
					</div>
					<div className="xl:w-[414px] w-full bg-white rounded-lg flex flex-col flex-shrink-0 justify-between border-l-lg py-10 md:px-16 px-8 border-gray-200">
						<h3 className="text-2xl font-bold leading-6 tracking-3 text-gray-900">
							Premium License
						</h3>
						<div className="mt-3">
							<Checks text="1000+ Components" />
							<Checks text="Auto-layout Elements" />
							<Checks text="Blueprints" />
							<Checks text="UI Kits" />
							<Checks text="Drop-in Ready" />
							<Checks text="Accessible and Responsive" />
							<Checks text="Premium Support " />
						</div>
						<button
							onClick={() => router.push("/pricing")}
							className="mt-8 rounded w-full product-gradient-button py-3 text-sm font-semibold tracking-[0.02em] leading-none text-white focus:outline-none"
						>
							Go to Pricing
						</button>
					</div>
				</div>
				<div className="xl:w-[1067px] md:w-[651px] w-full xl:gap-x-5 mt-5 xl:flex">
					<Link href="https://dashboard.getfigit.com/signup">
						<div className="xl:w-1/2 w-full relative bg-white border rounded-md border-gray-200 py-8 px-7 cursor-pointer">
							<h3 className="md:text-2xl text-xl font-bold leading-6 tracking-3 text-gray-900">
								Community License
							</h3>
							<p className="text-sm leading-none tracking-3 mt-3 text-gray-600">
								Get access to 250 Free Elements
							</p>
							<p className="md:text-3xl text-2xl font-bold tracking-2 text-center absolute right-0 top-0 mx-7 my-8 t-f-c bg-clip-text product-gradient">
								FREE
							</p>
						</div>
					</Link>
					<div
						onClick={StripeRedirect}
						className="w-full xl:w-1/2 relative xl:mt-0 mt-5 bg-white border rounded-md border-gray-200 py-8 px-7 cursor-pointer"
					>
						{loading ? (
							<div class="flex flex-col items-center justify-center  w-full">
								<svg
									class="animate-spin"
									width="60"
									height="60"
									viewBox="0 0 158 158"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M78.7636 131.874C68.2593 131.874 57.9909 128.759 49.2568 122.923C40.5228 117.087 33.7155 108.793 29.6956 99.088C25.6758 89.3833 24.624 78.7045 26.6733 68.402C28.7226 58.0995 33.7809 48.6361 41.2086 41.2084C48.6363 33.7807 58.0997 28.7224 68.4022 26.6731C78.7047 24.6238 89.3835 25.6756 99.0882 29.6954C108.793 33.7152 117.088 40.5226 122.924 49.2566C128.759 57.9906 131.874 68.259 131.874 78.7634"
										stroke="#1D4ED8"
										stroke-width="4"
										stroke-dasharray="16 16"
									/>
									<circle
										cx="79.0002"
										cy="79"
										r="66.6467"
										stroke="#93C5FD"
										stroke-width="2"
									/>
									<circle
										cx="79"
										cy="79"
										r="78"
										stroke="#93C5FD"
										stroke-width="2"
									/>
								</svg>
							</div>
						) : (
							<>
								{" "}
								<div className="flex items-start justify-between">
									<div>
										<h3 className="md:text-2xl text-xl font-bold leading-6 tracking-3 text-gray-900">
											Premium License
										</h3>
										<p className="text-sm leading-none tracking-3 mt-3 text-gray-600">
											One Time Payment. Lifetime Access
										</p>
									</div>
									<div className="flex items-end">
										<p className="md:text-  xl text-lg font-bold tracking-2 text-center  line-through mr-2">
											$149
										</p>
										<p className="md:text-3xl text-2xl font-bold tracking-2 text-center ">
											$79
										</p>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
}

export default index;
