import Link from "next/link";

const GameCard = ({
	id,
	title,
	gameSrc,
	imgSrc,
	tag,
	description,
	className,
}) => {
	return (
		<div
			className={`rounded-lg border-pink-200 border text-white flex flex-col justify-between ${className}`}
		>
			<div>
				<img
					className="rounded-t-lg w-full"
					src="https://via.placeholder.com/200/100"
					alt="Card image cap"
				/>
				<div className="px-5 py-2">
					<h5 className="font-semibold">{title}</h5>
					<p className="mb-4 text-sm">{description}</p>
				</div>
			</div>

			<div className="px-5 mb-6 text-right">
				<Link href={JSON.stringify(id)}>
					<a className="bg-pink-500 font-bold text-sm hover:bg-pink-400 hover:text-gray-900 duration-400 transition-all text-white rounded-md px-3 py-1.5">
						Play Now!
					</a>
				</Link>
			</div>
		</div>
	);
};

export default GameCard;
