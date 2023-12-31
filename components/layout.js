import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
	const [banner, setBanner] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("banner")) {
			setBanner(false);
			return;
		}
		setBanner(true);
	}, []);
	return (
		<>
			<div className="flex flex-col min-h-screen">
				{!props.noHeader && <Header banner={props.banner} />}
				<main className="flex-1">{props.children}</main>
				{!props.noFooter && <Footer />}
			</div>
		</>
	);
}
