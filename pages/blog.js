import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Blog from "../components/blog/index";
function index() {
	return (
		<>
			<Head>
				<title>Yuri – Facebook automated ad delivery system </title>
				<meta name="title" content="Yuri – Facebook automated ad delivery system " />
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
				<Blog />
			</Layout>
		</>
	);
}

export default index;
