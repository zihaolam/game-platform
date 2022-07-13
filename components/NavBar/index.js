import Link from "next/link";
import { CgGames } from "react-icons/cg";

export default function NavBar() {
	return (
		<div className="navbar bg-base-300 text-primary-content h-8 px-5 font-black shadow-sm shadow-gray-800">
			<Link href="/">
				<span className="normal-case text-2xl cursor-pointer flex items-center space-x-2 text-pink-50 relative py-3">
					<span className="text-pink-500">
						<CgGames
							className="h-9 w-9 m-1"
							// fill="#ec4899"
							// color="#ec4899"
						/>
					</span>

					<span>Genius Games</span>
					<span className="absolute bottom-0 right-0 text-[11px] text-white font-semibold">
						Built by our students
					</span>
				</span>
			</Link>
		</div>
	);
}
