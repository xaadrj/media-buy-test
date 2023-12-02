import React from "react";
import Link from 'next/link'


function index() {
	return (
		<div className="w-full md:mt-[80px] mt-[128px] flex flex-col items-center justify-center ">
			<section className="xl:w-[700px] 2xl:px-4 xl:px-10 px-4">
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Install Plugin
					</h2>
					<p>
						In Figma desktop, goto figma community and search for Figit in
						plugins. Install the plugin by clicking on install button.
						<br /> OR
						<br />
						<Link
							className="cursor-pointer  font-medium text-blue-500 underline"
							target="_blank"
							href="https://www.figma.com/community/plugin/1060213973572396708/Figit---Auto-Layout-UI-Components"
						>
							Click here
						</Link>
						&nbsp;to install the plugin
					</p>
				</div>

				{/* Open Plugin */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Open the plugin
					</h2>
					<p>Right click on the canvas, goto plugins and open figit plugin.</p>
					<div className="mt-4">
						<img
							src="/images/rightClickImg.webp"
							alt="Icon Img"
							className="w-full h-full"
						/>
					</div>
				</div>
				{/* Plugin  Interface */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Plugin Interface
					</h2>
					<p>
						The plugin offers Blueprints and UI Kits. These are the main types
						of elements. Each type has further sub categories. The search offers
						an easier way of finding what you are looking for. Enter your search
						terms and the elements will appear. E.g Dropdown
						<br />
						<br /> The user settings offer account settings, links to our
						community, tutorials, support and option to login/logout
					</p>
					<div className="mt-4">
						<img
							src="/images/settings.webp"
							alt="Settings Img"
							className="w-full h-full"
						/>
					</div>
				</div>

				{/* Auto Layout */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Auto Layout
					</h2>
					<p>
						All figit elements are crafted using Auto Layout. You can use the
						power of Auto Layout and work faster using figit elements. If you
						don{"’"}t like to work in Auto Layout, you can select all Auto
						Layout frames and press Shift + Opt/Alt + A.
						<br /> Watch this tutorial video on Auto Layout for more details.
					</p>
				</div>

				{/* Blueprints */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Blueprints
					</h2>
					<p>
						Blueprints are empty structures in Auto Layout that you can use to
						create almost any UI pattern. Add your colors and you are good to
						go.
						<br />
						Watch this tutorial video on Blueprints.
					</p>
				</div>

				{/* UI Kits */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">UI Kits</h2>
					<p>
						UI kits are opinionated elements following a standard design system.
						You can use the UI Kits to craft landing pages, dashboards and other
						quick concepts.
					</p>
				</div>

				{/* Categories */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Categories
					</h2>
					<div className="mt-4">
						<img
							src="/images/webApplication.webp"
							alt="Web Application Img"
							className="w-full h-full"
						/>
						<p className="mt-4">
							Web application categories contain elements that you can use to
							craft dashboards and web applications. These elements can also be
							used in your existing applications. Need a dropdown or an input,
							use powerful features of Auto Layout to complete your next design.
						</p>
					</div>

					<div className="mt-4">
						<img
							src="/images/Marketing.webp"
							alt="Marketing Img"
							className="w-full h-full"
						/>
						<p className="mt-4">
							Marketing categories have all the elements you need to design
							landing pages and websites. The elements have a variety of
							structures and designs to fit most of the use cases. You can
							always mix and match or modify the elements to fit your design
							needs.
						</p>
					</div>
					<div className="mt-4">
						<img
							src="/images/Ecommerce.webp"
							alt="Ecommerce Img"
							className="w-full h-full"
						/>
						<p className="mt-4">
							From carts to product page elements, the ecommerce category has a
							number of useful elements you can use to craft ecommerce websites
							and experiences.
						</p>
					</div>
				</div>

				{/* UI Kits */}
				<div className="mb-4">
					<h2 className="text-gray-900 text-xl font-extrabold mb-4">
						Images {"&"} Icons
					</h2>
					<p>
						The images used in Figit are from Unsplash and the icons are from
						tablericons.
					</p>
				</div>
			</section>
			<div className="w-full h-[1.33px] bg-[#0A142F] opacity-[0.06] mx-auto container" />
		</div>
	);
}

export default index;
