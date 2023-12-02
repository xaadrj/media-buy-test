import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const Banner = ({ banner, setBanner }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push("https://www.producthunt.com/posts/figit-figma-plugin");
			}}
			className={`${
				banner ? "block" : "hidden"
			} w-full h-14 top-0  left-0 bg-white relative z-[2000] flex items-center`}
		>
			<div className="w-full">
				<p className="text-center text-blue-600">
					It's a Launch Party! Support us on{" "}
					<Link
						href="https://www.producthunt.com/posts/figit-figma-plugin"
						className="underline hover:no-underline cursor-pointer"
					>
						Product Hunt
					</Link>
				</p>
			</div>
			<div className="ml-auto mr-6 text-blue-600">
				<svg
					width="20"
					height="20"
					onClick={(e) => {
						e.stopPropagation();
						setBanner(false);
						localStorage.setItem("banner", false);
					}}
					className="cursor-pointer"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.5911 11.9999L18.0442 7.54675C18.2555 7.33578 18.3744 7.04949 18.3747 6.75087C18.3749 6.45225 18.2566 6.16575 18.0456 5.95441C17.8346 5.74306 17.5483 5.62418 17.2497 5.62392C16.9511 5.62366 16.6646 5.74203 16.4532 5.953L12.0001 10.4061L7.547 5.953C7.33565 5.74166 7.04901 5.62292 6.75012 5.62292C6.45123 5.62292 6.16459 5.74166 5.95325 5.953C5.7419 6.16435 5.62317 6.45099 5.62317 6.74988C5.62317 7.04876 5.7419 7.33541 5.95325 7.54675L10.4064 11.9999L5.95325 16.453C5.7419 16.6643 5.62317 16.951 5.62317 17.2499C5.62317 17.5488 5.7419 17.8354 5.95325 18.0468C6.16459 18.2581 6.45123 18.3768 6.75012 18.3768C7.04901 18.3768 7.33565 18.2581 7.547 18.0468L12.0001 13.5936L16.4532 18.0468C16.6646 18.2581 16.9512 18.3768 17.2501 18.3768C17.549 18.3768 17.8357 18.2581 18.047 18.0468C18.2583 17.8354 18.3771 17.5488 18.3771 17.2499C18.3771 16.951 18.2583 16.6643 18.047 16.453L13.5911 11.9999Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Banner;
