import { useMemo, useState } from "react";
import games from "../constants/games";
import categories from "../constants/categories";
import { DraggableScroll } from "../components/DraggableScroll";
import GameCard from "../components/GameCard";

const falseTags = Object.fromEntries(
	categories.map((category) => [category.name, false])
);
const trueTags = Object.fromEntries(
	categories.map((category) => [category.name, true])
);

export default function Home() {
	const [currentTags, setCurrentTags] = useState(trueTags);

	const [textFilter, setTextFilter] = useState("");

	const filteredGames = useMemo(
		() =>
			games.filter(
				(game) =>
					(game.tags.some((tag) => currentTags[tag]) ||
						currentTags.all) &&
					(game.title
						.toLowerCase()
						.includes(textFilter.toLowerCase()) ||
						game.description
							.toLowerCase()
							.includes(textFilter.toLowerCase()))
			),
		[currentTags, textFilter]
	);

	const toggleTags = (e) => {
		if (e.target.name === "all")
			return setCurrentTags((current) =>
				current.all ? falseTags : trueTags
			);
		setCurrentTags((current) => ({
			...current,
			all: false,
			[e.target.name]: !current[e.target.name],
		}));
	};

	return (
		<div className="flex flex-col">
			<DraggableScroll className="px-5 flex bg-base-100 py-3 space-x-3">
				{categories.map((category, index) => (
					<button
						key={index}
						name={category.name}
						className={`rounded-lg text-white px-4 py-2 font-bold border border-pink-500 ${
							currentTags[category.name]
								? "bg-pink-500"
								: "bg-transparent"
						}`}
						onClick={toggleTags}
					>
						{category.title}
					</button>
				))}
			</DraggableScroll>

			<div className="px-5">
				<input
					className="w-full rounded-md py-2 px-3 text-xl focus:outline-none focus:ring-2 focus:ring-pink-300 my-2 text-gray-900"
					placeholder="Search for game"
					value={textFilter}
					onChange={(e) => setTextFilter(e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-5 mt-8">
				{filteredGames.map((game, index) => (
					<GameCard {...game} key={index} />
				))}
			</div>
		</div>
	);
}
