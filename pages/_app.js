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
					href="https://i.imgur.com/EapHMca.png"
				/>
				<meta
					name="Yuri – Facebook automated ad delivery system"
					content="Yuri – Facebook automated ad delivery system"
				/>
				<meta
					name="description"
					content="Yuri – Facebook automated ad delivery system "
				/>
				<script src="https://player.vimeo.com/api/player.js%22%3E"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
