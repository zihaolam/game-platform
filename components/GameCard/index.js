import Link from "next/link";
import { useRouter } from "next/router";

const GameCard = ({ id, title, imgSrc, madeBy, tags, description, className }) => {
	const router = useRouter();
	return (
		<div
			className={`rounded-lg border-gray-700 border-2 hover:shadow hover:shadow-pink-700 hover:scale-[1.01] transition-all duration-600 hover:border-pink-700 cursor-pointer text-white flex flex-col justify-between ${className} group`}
			onClick={() => router.push("game/" + JSON.stringify(id))}
		>
			<div>
				<img className="rounded-t-lg w-full h-40 object-contain bg-gray-700" src={imgSrc} alt="Card image cap" />
				<div className="px-4 py-2 mt-2 text-gray-200">
					<h5 className="font-bold">{title}</h5>
					<p className="mb-2 text-sm font-semibold">{description}</p>
					<div className="flex items-center mb-4 space-x-1">
						{tags.map((tag, index) => (
							<span key={index} className="text-sm font-bold capitalize rounded bg-purple-500 text-gray-900 px-1.5 py-0">
								{tag}
							</span>
						))}
					</div>
					<p className="mb-2 text-xs text-right">Made By: {madeBy}</p>
				</div>
			</div>

			<div className="px-5 mb-6 text-right">
				<Link href={"game/" + JSON.stringify(id)}>
					<a className="bg-pink-500 font-bold text-sm group-hover:bg-pink-600 duration-400 transition-all text-white rounded-md px-3 py-1.5">Play Now!</a>
				</Link>
			</div>
		</div>
	);
};

export default GameCard;
