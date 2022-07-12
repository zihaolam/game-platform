import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<div className="min-h-screen flex flex-col">
			<NavBar />
			<div className="flex-1 pb-24">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;
