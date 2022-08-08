import Link from "next/link";
import { useState, useRef } from "react";
import games from "../../constants/games";
import { CgSpinner } from "react-icons/cg";

export async function getStaticPaths() {
	return {
		paths: games.map((game) => ({
			params: { id: JSON.stringify(game.id) },
		})),
		fallback: true, // false or 'blocking'
	};
}

export async function getStaticProps({ params }) {
	return {
		props: {
			game: games.find((game) => game.id == params.id),
		}, // will be passed to the page component as props
	};
}

const GamePage = ({ game }) => {
	// const router = useRouter();
	// const { id } = router.query;
	const iframeRef = useRef(null);
	const [loadingIFrame, setLoadingIFrame] = useState(true);

	return (
		<div className="mt-4">
			<Link href="/">
				<span className="text-pink-500 mx-5 mt-8 font-bold cursor-pointer hover:underline underline-offset-2">
					&lt; Back
				</span>
			</Link>
			<div className="px-5 mt-5 flex flex-col min-h-[500px] w-full">
				<div className="flex flex-col sm:flex-row justify-between">
					<div className="text-2xl text-pink-500 font-bold flex items-center space-x-3">
						<span>{game?.title}</span>
						{game?.tags.map((tag, index) => (
							<span
								className="rounded-lg px-2 bg-pink-500 text-white flex items-center text-sm"
								key={index}
							>
								{tag}
							</span>
						))}
					</div>
					<div className="text-pink-500 font-bold flex items-end text-sm">
						Made By: {game?.madeBy}
					</div>
				</div>
				{loadingIFrame && (
					<div className="w-full h-[500px] flex items-center justify-center fixed">
						<CgSpinner className="h-12 w-12 animate-spin text-pink-500" />
					</div>
				)}
				<iframe
					onLoad={(e) => {
						setLoadingIFrame(false);
					}}
					id="gameIFrame"
					className="w-full min-h-[600px]"
					src={game?.gameSrc}
					ref={iframeRef}
				></iframe>
				<div className="font-bold text-sm mt-1 text-pink-400">
					{game?.description}
				</div>
			</div>
		</div>
	);
};

export default GamePage;
