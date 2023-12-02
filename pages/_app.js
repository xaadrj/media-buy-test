import "../styles/globals.css";
import Head from "next/head";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="https://tuk-cdn.s3.amazonaws.com/can-uploader/figit-favicon-one.png"
				/>
				<meta
					name="Figit - Figma plugin with 1000+ auto layout UI elements"
					content="Figit - figma plugin with 1000+ auto layout UI elements with a unified design system that supercharges your design workflow."
				/>
				<meta
					name="description"
					content="Figit - figma plugin with 1000+ auto layout components with a unified design system that supercharges your design workflow. "
				/>
				<script src="https://player.vimeo.com/api/player.js%22%3E"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
