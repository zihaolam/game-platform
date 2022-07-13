import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import games from "../../constants/games";
import { CgSpinner } from "react-icons/cg";

const GamePage = () => {
	const router = useRouter();
	const { id } = router.query;
	const iframeRef = useRef(null);
	const [loadingIFrame, setLoadingIFrame] = useState(true);

	const setupIFrame = () => {
		setLoadingIFrame(false);
		console.log(
			iframeRef.current.contentWindow.width,
			iframeRef.current.contentWindow.height
		);
	};

	const currentGame = games.find((game) => game.id === parseInt(id));
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
						<span>{currentGame?.title}</span>
						{currentGame?.tags.map((tag, index) => (
							<span
								className="rounded-lg px-2 bg-pink-500 text-white flex items-center text-sm"
								key={index}
							>
								{tag}
							</span>
						))}
					</div>
					<div className="text-pink-500 font-bold flex items-end text-sm">
						Made By: {currentGame?.madeBy}
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
					src={currentGame?.gameSrc}
					ref={iframeRef}
				></iframe>
				<div className="font-bold text-sm mt-1 text-pink-400">
					{currentGame?.description}
				</div>
			</div>
		</div>
	);
};

export default GamePage;
