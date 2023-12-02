import React, { useState } from "react";

function index({ question, answer }) {
	const [showQ, setShowQ] = useState(false);

	return (
		<>
			<div
				className="flex items-center  justify-between w-full py-10 border-b border-gray-200 cursor-pointer"
				onClick={() => setShowQ(!showQ)}
			>
				<p className="md:text-2xl text-xl font-medium md:leading-6 leading-6 text-gray-800">
					{question}
				</p>
				<svg
					className="cursor-pointer"
					width={16}
					height={16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className={`duration-300 ease-in-out ${
							showQ ? ` opacity-0 ` : `opacity-100 `
						}`}
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 0.5C8.41421 0.5 8.75 0.835786 8.75 1.25V14.75C8.75 15.1642 8.41421 15.5 8 15.5C7.58579 15.5 7.25 15.1642 7.25 14.75V1.25C7.25 0.835786 7.58579 0.5 8 0.5Z"
						fill="#0A2942"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0.5 8C0.5 7.58579 0.835786 7.25 1.25 7.25H14.75C15.1642 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.1642 8.75 14.75 8.75H1.25C0.835786 8.75 0.5 8.41421 0.5 8Z"
						fill="#0A2942"
					/>
				</svg>
			</div>
			<div
				className={`bg-gray-100 overflow-hidden flex items-center justify-start  duration-300 ease-in-out ${
					showQ ? ` md:h-24 h-[15rem]` : `h-0 `
				}`}
			>
				<p
					className={`text-base font-medium leading-6 text-gray-600 py-6 px-7`}
				>
					{answer}
				</p>
			</div>
		</>
	);
}

export default index;
