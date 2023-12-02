import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "../../reusableUI/spinner/Spinner";
function index() {
	const router = useRouter();
	const emailRef = useRef();
	const [price, setPrice] = useState(14.99);
	const [loading, setLoading] = useState(false);
	const [subscription, setSubscription] = useState("MONTHLY_SUBSCRIPTION");
	const access = () => {
		const email = emailRef.current.value;
		emailRef.current.value = "";
	};

	// const showAnswer = (id) => setId(id);
	// const hideAnswer = () => setId(" ");

	const monthlySubscription = () => {
		setPrice(14.99);
		setSubscription("MONTHLY_SUBSCRIPTION");
	};

	const lifetimeSubscription = () => {
		setPrice(79);
		setSubscription("LIFETIME_SUBSCRIPTION");
	};

	const StripeRedirect = async () => {
		setLoading(true);
		await axios
			.post(process.env.NEXT_PUBLIC_LINK + "/stripe/session/create", {
				type: subscription,
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
	return (
		<section className="mx-auto container flex flex-col items-center justify-center">
			<section className="relative z-10 mx-auto container flex items-center justify-center md:mt-[91px] mt-[72px] px-4 xl:px-10 2xl:px-4">
				<div className="xl:w-[1064px] md:w-[534px] w-full bg-white shadow rounded-md flex flex-col xl:flex-row xl:justify-between pricing-shadow">
					<section>
						{/* Monthly Radio Button */}
						<div
							onClick={monthlySubscription} // h-[134px]
							className={`hover:bg-[#E9F4FC] xl:mt-6 cursor-pointer duration-300 rounded-md ease-in-out xl:w-[584px] md:w-[512px] py-6 px-6 m-3 flex items-start justify-start ${
								price === 14.99 ? `bg-[#E9F4FC]` : `bg-white`
							}`}
						>
							<div
								className={`w-4 h-4  cursor-pointer duration-300 ease-in-out rounded-full ${
									price === 14.99
										? `border-[5px] border-[#2659F4]`
										: `border border-gray-300`
								}`}
							/>

							<div className="flex flex-col md:flex-row justify-between w-full">
								<div className="ml-3">
									<h2 className="font-bold text-xl text-gray-900 m-0 leading-5">
										Monthly subscription
									</h2>
									<p className="text-sm text-gray-700 leading-5 pt-3">
										Pay $14.99 every month to access Figit
									</p>
								</div>
								<div className="ml-3 md:ml-0 mt-4 md:mt-0">
									<h2 className="text-gray-900 font-bold text-xl">$14.99</h2>
								</div>
							</div>
						</div>
						<hr className="" />
						{/* Lifetime Radio Button */}
						<div
							onClick={lifetimeSubscription} // h-[134px]
							className={`hover:bg-[#E9F4FC] flex-shrink-0 rounded-md cursor-pointer duration-300 ease-in-out xl:w-[584px] md:w-[512px] py-6 px-6 m-3 flex items-start justify-start ${
								price === 79 ? `bg-[#E9F4FC]` : `bg-white`
							}`}
						>
							<div
								className={`w-4 h-4 flex flex-shrink-0 cursor-pointer duration-300 ease-in-out rounded-full ${
									price === 79
										? `border-[5px] border-[#2659F4]`
										: `border border-gray-300`
								}`}
							/>
							<div className="flex flex-col md:flex-row justify-between w-full">
								<div className="ml-3">
									<h2 className="font-bold text-xl text-gray-900 m-0 leading-5">
										Lifetime access
									</h2>
									<p className="text-sm text-gray-700 leading-5 pt-3">
										One time payment that gives you a lifetime’s access to Figit
									</p>
								</div>
								<div className="ml-3 md:ml-0 mt-4 md:mt-0">
									<h2 className="text-gray-900 font-bold text-xl flex ">
										<span className="mr-2 line-through">$149</span> *$79
									</h2>
								</div>
							</div>
						</div>

						<hr className="" />

						{/* Checkout button */}
						<div className="w-full flex items-center justify-center xl:mt-4 md:px-0 px-4">
							<button
								onClick={StripeRedirect}
								className="py-4 whiteBtn duration-300 text-sm product-gradient-button  cursor-pointer xl:w-[535px] md:w-[468px] w-full my-4 md:my-[22px] rounded-full font-bold leading-none text-white"
							>
								{price === 14.99 && (
									<>{loading ? <Spinner /> : "Buy at $14.99/month"}</>
								)}
								{price === 79 && (
									<>{loading ? <Spinner /> : "One time Payment of $79"}</>
								)}
							</button>
						</div>
					</section>

					<section className="xl:block hidden pl-9 priceCard m-3">
						<div className="pt-3 pb-3">
							{/* p1 */}
							<div className="flex  mx-auto pr-[38px]">
								<div className=" rounded-md w-9 h-9 bg-gray-100 flex items-center justify-center">
									<svg
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.25 4.5H6.75C6.55109 4.5 6.36032 4.42098 6.21967 4.28033C6.07902 4.13968 6 3.94891 6 3.75C6 3.55109 6.07902 3.36032 6.21967 3.21967C6.36032 3.07902 6.55109 3 6.75 3H17.25C17.4489 3 17.6397 3.07902 17.7803 3.21967C17.921 3.36032 18 3.55109 18 3.75C18 3.94891 17.921 4.13968 17.7803 4.28033C17.6397 4.42098 17.4489 4.5 17.25 4.5Z"
											fill="#111827"
										/>
										<path
											d="M18.75 6.75H5.25C5.05109 6.75 4.86032 6.67098 4.71967 6.53033C4.57902 6.38968 4.5 6.19891 4.5 6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H18.75C18.9489 5.25 19.1397 5.32902 19.2803 5.46967C19.421 5.61032 19.5 5.80109 19.5 6C19.5 6.19891 19.421 6.38968 19.2803 6.53033C19.1397 6.67098 18.9489 6.75 18.75 6.75Z"
											fill="#111827"
										/>
										<path
											d="M19.6467 21H4.35328C3.79565 20.9994 3.26103 20.7776 2.86672 20.3833C2.47241 19.989 2.25062 19.4544 2.25 18.8967V9.60328C2.25062 9.04565 2.47241 8.51103 2.86672 8.11672C3.26103 7.72241 3.79565 7.50062 4.35328 7.5H19.6467C20.2044 7.50062 20.739 7.72241 21.1333 8.11672C21.5276 8.51103 21.7494 9.04565 21.75 9.60328V18.8967C21.7494 19.4544 21.5276 19.989 21.1333 20.3833C20.739 20.7776 20.2044 20.9994 19.6467 21V21Z"
											fill="#111827"
										/>
									</svg>
								</div>
								<div className="ml-3 flex-1">
									<h5 className="font-bold text-sm plus-jakarta-display">
										Access to 1000+ Auto Layout Blocks
									</h5>
									<h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
										Don’t reinvent the wheel. Use Figit’s blueprints as a base
										for your designs with the power of auto-layout in your
										arsenal.
									</h6>
								</div>
							</div>
							{/* p2 */}
							<div className="flex mx-auto pr-[38px] mt-11">
								<div className=" rounded-md w-9 h-9 bg-gray-100 flex items-center justify-center">
									{/* <img src="/svgs/album.svg" alt="" /> */}
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M9.0146 0.375426C4.54728 1.45592 0.949315 5.40977 0.162196 10.1035C-1.16425 18.0138 5.84753 25.0898 13.7944 23.8603C16.3679 23.4621 18.2955 22.4979 20.2297 20.6416C29.1232 12.1058 21.0244 -2.52909 9.0146 0.375426ZM12.5497 5.65273C12.583 8.23994 12.7485 8.7921 13.6532 9.33483C14.3791 9.76996 14.422 9.7587 16.7051 8.53893C18.668 7.48985 19.0455 7.36602 19.1835 7.72548C19.2728 7.95875 19.3139 8.1737 19.2747 8.20355C19.2351 8.23313 18.2895 8.86802 17.1729 9.61392C15.2141 10.9227 15.1429 11.0065 15.1429 12.0016C15.1429 12.9968 15.2141 13.0805 17.1729 14.3893C18.2895 15.1352 19.2351 15.7701 19.2747 15.7997C19.3139 15.8295 19.2718 16.0476 19.1809 16.2843C19.0394 16.6527 18.6827 16.5362 16.7132 15.4779C14.5294 14.3045 14.3741 14.2603 13.6999 14.621C12.7488 15.1297 12.5235 15.8345 12.5235 18.3021C12.5235 20.2049 12.4795 20.3795 11.9996 20.3795C11.5143 20.3795 11.4758 20.2049 11.4758 18.0107C11.4758 15.7856 11.4338 15.6031 10.7827 14.9999C10.4016 14.647 9.88266 14.3579 9.62989 14.3579C9.37712 14.3579 8.24634 14.8789 7.11713 15.5156C5.20866 16.5922 4.68846 16.6728 4.66934 15.8963C4.66724 15.8065 5.60838 15.1143 6.7609 14.3579C8.76288 13.0442 8.85639 12.9389 8.85639 12.0016C8.85639 11.0643 8.76288 10.9591 6.7609 9.64533C5.60838 8.88897 4.66724 8.19674 4.66934 8.10694C4.68767 7.36392 5.22281 7.45006 7.12054 8.50201C8.25472 9.13088 9.38681 9.64533 9.63618 9.64533C9.88554 9.64533 10.4016 9.3563 10.7827 9.00338C11.4338 8.40017 11.4758 8.21768 11.4758 5.99256C11.4758 3.79833 11.5143 3.6237 11.9996 3.6237C12.4761 3.6237 12.5259 3.80697 12.5497 5.65273ZM10.428 4.91521C10.428 5.75536 10.3196 5.97764 9.83865 6.12373C9.51464 6.22217 8.86844 6.58765 8.40324 6.93612C7.60512 7.53357 7.51292 7.54693 6.78264 7.1694C6.35673 6.94921 5.93973 6.65808 5.85591 6.52246C5.56594 6.05382 8.90799 3.92007 9.96962 3.89599C10.3303 3.88761 10.428 4.10517 10.428 4.91521ZM15.9428 4.69974C16.7834 5.14744 17.6595 5.72185 17.8898 5.97633C18.2796 6.40674 18.2431 6.47717 17.3641 6.99555L16.4198 7.55242L15.5848 6.92748C15.1256 6.58373 14.4846 6.22217 14.1606 6.12373C13.6797 5.97764 13.5712 5.75536 13.5712 4.91521C13.5712 3.62946 13.8811 3.60119 15.9428 4.69974ZM5.84412 12.0016C5.84412 13.7112 5.81531 13.7898 4.98707 14.3325C4.18344 14.859 4.11796 14.865 3.93958 14.4297C3.69231 13.827 3.69231 10.1763 3.93958 9.5736C4.11796 9.13821 4.18344 9.14423 4.98707 9.67073C5.81531 10.2135 5.84412 10.292 5.84412 12.0016ZM20.2467 11.8144C20.2488 12.9973 20.1616 14.1825 20.0529 14.4482C19.8622 14.9137 19.8252 14.9124 19.0292 14.4087C18.228 13.9016 18.2033 13.8298 18.2033 12.0074C18.2033 10.2255 18.2424 10.1035 18.9598 9.63303C20.0264 8.93373 20.2422 9.29975 20.2467 11.8144ZM10.5472 10.5499C10.1417 10.9549 9.90414 11.4916 9.90414 12.0016C9.90414 12.5116 10.1417 13.0483 10.5472 13.4534C10.9524 13.8586 11.4894 14.0961 11.9996 14.0961C13.8308 14.0961 14.7515 11.8485 13.4521 10.5499C13.0468 10.1446 12.5099 9.90714 11.9996 9.90714C11.4894 9.90714 10.9524 10.1446 10.5472 10.5499ZM12.775 11.3345C13.4709 12.1726 12.4488 13.4599 11.5412 12.8886C10.9592 12.5224 10.817 11.8249 11.2243 11.3345C11.6287 10.8473 12.3705 10.8473 12.775 11.3345ZM8.41555 17.0766C8.8742 17.4198 9.51464 17.7811 9.83865 17.8795C10.3196 18.0256 10.428 18.2479 10.428 19.088C10.428 19.8601 10.3224 20.1177 10.0063 20.1177C9.43658 20.1177 6.63517 18.6076 6.09218 18.0081C5.68015 17.5528 5.70451 17.497 6.5359 16.9904C7.01995 16.6956 7.4532 16.454 7.49877 16.4534C7.54435 16.4529 7.9569 16.7333 8.41555 17.0766ZM17.9032 18.0123C17.3633 18.6087 14.5606 20.1177 13.993 20.1177C13.6773 20.1177 13.5712 19.8606 13.5712 19.0962C13.5712 18.2178 13.6721 18.039 14.2916 17.8206C14.6879 17.6811 15.305 17.3279 15.6631 17.0357C16.3127 16.5061 16.3166 16.5061 17.3245 17.02C18.2785 17.5064 18.311 17.5619 17.9032 18.0123Z"
											fill="#262524"
										/>
									</svg>
								</div>
								<div className="ml-3 flex-1">
									<h5 className="font-bold text-sm plus-jakarta-display">
										Common UX patterns for you to use
									</h5>
									<h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
										Get access to hundreds of well-designed UI blocks for rapid
										prototyping. You can create production-ready websites,
										stores, and dashboards easily.
									</h6>
								</div>
							</div>
							{/* p3 */}
							<div className="flex  mx-auto pr-[38px] mt-12">
								<div className=" rounded-md w-9 h-9 bg-gray-100 flex items-center justify-center">
									{/* <img src="/svgs/album.svg" alt="" /> */}
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="12.6316"
											width="11.3684"
											height="14.8421"
											rx="2"
											fill="#262524"
										/>
										<rect
											y="9.15796"
											width="11.3684"
											height="14.8421"
											rx="2"
											fill="#262524"
										/>
										<rect
											width="11.3684"
											height="8.21053"
											rx="2"
											fill="#262524"
										/>
										<rect
											x="12.6316"
											y="15.7896"
											width="11.3684"
											height="8.21053"
											rx="2"
											fill="#262524"
										/>
									</svg>
								</div>
								<div className="ml-3 flex-1">
									<h5 className="font-bold text-sm plus-jakarta-display">
										Beautifully crafted, Hi-Fidelity UI Blocks
									</h5>
									<h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
										Get access to hundreds of well-designed UI blocks for rapid
										prototyping. You can create production-ready websites,
										stores, and dashboards easily.
									</h6>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
			<section className="xl:w-[1064px] md:w-[534px] w-full md:px-0 px-4">
				<div className="bg-white shadow-md rounded-md p-5 xl:px-9 xl:py-6 w-full md:w-534 xl:w-1029 xl:h-[126px] md:mx-auto mt-10 ">
					<div className="flex flex-col xl:flex-row items-center h-full justify-between font-plus-jakarta-sans">
						<div className="text-left w-full xl:w-auto">
							<h4 className="text-gray-900 font-bold text-xl m-0 lifeTimeGradient">
								Try Figit for FREE
							</h4>
							<p className="text-gray-600 text-sm plus-jakarta-display mt-3">
								Before you buy a car, you take it for a spin. And before you get
								a girl, you— Anyways, sign up now to access 250 Free Auto-Layout
								Elements.
							</p>
						</div>
						<div className="w-full mt-5 xl:mt-0 xl:w-[456px] flex items-center justify-end">
							<Link href="https://dashboard.getfigit.com/signup">
								<div className="w-[128px] h-[46px] text-sm text-gray-50 product-gradient-button  rounded flex items-center justify-center">
									Sign up for free
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="xl:w-[1064px] md:w-[534px] w-full md:px-0 px-4">
				<div className="bg-white shadow-md rounded-md p-5 xl:px-9 xl:py-6 w-full md:w-534 xl:w-1029 xl:h-[126px] md:mx-auto mt-10 ">
					<h4 className="text-gray-900 font-medium text-base m-0 ">
						*Early access
					</h4>
					<p className="text-gray-700 text-sm plus-jakarta-display mt-3">
						Yeah, you THOUGHT. Hah. This price is for early access only, and
						will be revised once Figit realizes its worth.
					</p>
				</div>
			</section>
		</section>
	);
}

export default index;
