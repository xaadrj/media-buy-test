import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

function Index() {
	const router = useRouter();
	return (
		<footer className="md:pt-[56px] pt-[32px] md:pb-[96px] pb-[40px] border-t border-gray-200 mx-auto container mt-[96px] flex flex-col lg:flex-row md:block lg:flex items-center justify-between 2xl:px-4 xl:px-10 px-4">
			<div className="flex flex-col">
			<img width={200} src="https://i.imgur.com/zIBlpDY.png"/>

				<p
					onClick={() => router.push("mailto:support@getfigit.com")}
					className=" cursor-pointer w-96 text-xs font-medium leading-none text-gray-600 mt-2"
				>
					With creativity as the core and batch release, management, analysis, and automatic optimization as means, we solve the pain points of customer acquisition for cross-border enterprises.
				</p>
			</div>
			<div className="md:flex items-center justify-between lg:mt-0 mt-4 lg:w-8/12">
				<ul className="md:flex md:space-x-16 md:space-y-0 space-y-4 md:mt-0 mt-4 lg:items-start items-center lg:justify-start justify-center">
					<li className="text-base text-center md:text-left cursor-pointer font-medium leading-none text-gray-600">
						<Link  href={{pathname : '/pricing'}}>Feature</Link>
					</li>
					<li className="text-base cursor-pointer text-center md:text-left font-medium leading-none  text-gray-600">
						<Link href="/pricing#faq">Blog</Link>
					</li>
					<li className="text-base cursor-pointer text-center md:text-left font-medium leading-none text-gray-600">
						Privacy policy
					</li>
					<li
						onClick={() =>
							router.push("/login")
						}
						className="text-base text-center md:text-left cursor-pointer font-medium leading-none text-gray-600"
					>
						Contact
					</li>
				</ul>
				<div className="flex items-center space-x-4 sm:mt-0 mt-12">
					<Link href="https://twitter.com/justfigit">
						<div className="w-[48px] h-[48px] text-[#171717] cursor-pointer hover:border-0 hover:bg-[#00ACEE] hover:text-white border-2 border-[#E6E7EA] rounded-full flex items-center justify-center">
							<svg
								width={24}
								height={20}
								viewBox="0 0 24 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M23.999 2.67491C23.0988 3.06609 22.1462 3.3238 21.1715 3.43991C22.1959 2.8401 22.9662 1.88719 23.338 0.759911C22.3696 1.32621 21.3118 1.72355 20.21 1.93491C19.7461 1.44868 19.1881 1.06186 18.57 0.797983C17.9519 0.534104 17.2866 0.398669 16.6145 0.399911C13.8935 0.399911 11.6915 2.56991 11.6915 5.24491C11.6896 5.61699 11.7322 5.98797 11.8185 6.34991C9.86737 6.25844 7.95679 5.7607 6.20901 4.88854C4.46124 4.01637 2.91477 2.78899 1.66852 1.28491C1.23131 2.02197 1.00009 2.86293 0.999023 3.71991C0.999023 5.39991 1.87552 6.88491 3.19902 7.75491C2.41489 7.7363 1.64682 7.52876 0.960024 7.14991V7.20991C0.960024 9.55991 2.66002 11.5149 4.91002 11.9599C4.48692 12.0727 4.05091 12.1298 3.61302 12.1299C3.30231 12.1305 2.99231 12.1003 2.68752 12.0399C3.31302 13.9649 5.13352 15.3649 7.29002 15.4049C5.53771 16.7554 3.38633 17.4853 1.17402 17.4799C0.781332 17.4793 0.389006 17.456 -0.000976562 17.4099C2.24961 18.847 4.86575 19.6072 7.53602 19.5999C16.604 19.5999 21.558 12.2149 21.558 5.80991C21.558 5.59991 21.5525 5.38991 21.5425 5.18491C22.5041 4.50094 23.3359 3.65097 23.999 2.67491Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</Link>
					<Link href="https://www.youtube.com/channel/UCElI8JpBVx2rpqc2IHyWy_A">
						<div className="w-[48px] h-[48px] cursor-pointer border-2 border-[#E6E7EA] rounded-full flex items-center justify-center text-[#171717] hover:border-0 hover:bg-red-500 hover:text-white">
							<svg
								width={23}
								height={18}
								viewBox="0 0 23 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22.1874 3.62411C21.9834 2.49811 21.0114 1.67811 19.8834 1.42211C18.1954 1.06411 15.0714 0.808105 11.6914 0.808105C8.31335 0.808105 5.13935 1.06411 3.44935 1.42211C2.32335 1.67811 1.34935 2.44611 1.14535 3.62411C0.939352 4.90411 0.735352 6.69611 0.735352 9.0001C0.735352 11.3041 0.939352 13.0961 1.19535 14.3761C1.40135 15.5021 2.37335 16.3221 3.49935 16.5781C5.29135 16.9361 8.36335 17.1921 11.7434 17.1921C15.1234 17.1921 18.1954 16.9361 19.9874 16.5781C21.1134 16.3221 22.0854 15.5541 22.2914 14.3761C22.4954 13.0961 22.7514 11.2521 22.8034 9.0001C22.6994 6.69611 22.4434 4.90411 22.1874 3.62411ZM8.92735 12.5841V5.41611L15.1734 9.0001L8.92735 12.5841Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</Link>
					<Link href="https://discord.gg/jsHUVyRq2g">
						<div className="w-[48px] h-[48px] cursor-pointer border-2 border-[#E6E7EA] rounded-full flex items-center justify-center text-[#171717] hover:border-0 hover:bg-[#7289d9] hover:text-white">
							<svg
								width="24"
								height="19"
								viewBox="0 0 24 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.8568 3.165C20.5107 2.64225 20.0207 2.24238 19.4396 2.00993C18.178 1.50408 17.0931 1.16616 16.1223 0.975694C15.4414 0.842574 14.7671 1.17742 14.443 1.80821L14.3621 1.9659C13.6432 1.88654 12.8798 1.85992 12.0104 1.88193C11.1191 1.86043 10.3531 1.88654 9.63323 1.9659L9.55284 1.80821C9.22875 1.17742 8.55342 0.843086 7.874 0.976206C6.90324 1.16616 5.8178 1.50408 4.55675 2.01045C3.97614 2.24289 3.48616 2.64225 3.13953 3.16552C0.72238 6.81659 -0.22482 10.7549 0.244172 15.2062C0.260556 15.3624 0.347596 15.5022 0.480204 15.5856C2.33979 16.7581 3.949 17.5609 5.54439 18.1128C6.21153 18.3458 6.95137 18.0852 7.3451 17.4836L8.04705 16.4079C7.48795 16.1969 6.94215 15.9471 6.41889 15.6486C6.17364 15.5088 6.08814 15.196 6.22792 14.9507C6.36769 14.7045 6.68052 14.6179 6.92628 14.7598C8.48328 15.6476 10.2435 16.1171 12.0166 16.1171C13.7896 16.1171 15.5499 15.6476 17.1069 14.7598C17.3521 14.6179 17.665 14.7045 17.8053 14.9507C17.945 15.196 17.8595 15.5088 17.6143 15.6486C17.0736 15.9573 16.5084 16.2143 15.9293 16.4289L16.6517 17.5051C16.9492 17.948 17.4402 18.1999 17.9461 18.1999C18.1109 18.1999 18.2773 18.1727 18.4391 18.1175C20.0391 17.565 21.6514 16.7612 23.5151 15.5861C23.6477 15.5027 23.7347 15.3624 23.7511 15.2067C24.2211 10.7549 23.2739 6.81608 20.8568 3.165ZM8.7275 12.0395C7.74139 12.0395 6.92987 11.0007 6.92987 9.73806C6.92987 8.47547 7.74139 7.43662 8.7275 7.43662C9.71361 7.43662 10.5251 8.47547 10.5251 9.73806C10.5251 11.0007 9.71361 12.0395 8.7275 12.0395ZM15.3799 12.0262C14.403 12.0262 13.5992 10.9812 13.5992 9.71092C13.5992 8.44065 14.403 7.39566 15.3799 7.39566C16.3568 7.39566 17.1606 8.44065 17.1606 9.71092C17.1606 10.9812 16.3568 12.0262 15.3799 12.0262Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Index;
