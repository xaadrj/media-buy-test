import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Dcoumentation from "../components/documentation/index";
function index() {
	return (
		<>
			<Head>
				<title>Figit - Docs for users to install Figit </title>
				<meta name="title" content="Figit - Docs for users to install Figit " />
				<meta
					name="description"
					content="Documentation with instructions to install and get started with Figit plugin"
				/>
				<meta
					name="keywords"
					content="Figma, Auto Layout, Figma Auto Layout, UI elements, Figma UI"
				/>
				<link rel="canonical" href="https://getfigit.com/docs" />
			</Head>
			<Layout>
				<Dcoumentation />
			</Layout>
		</>
	);
}

export default index;
