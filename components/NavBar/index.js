import Link from "next/link";

export default function NavBar() {
	return (
		<div className="navbar bg-base-300 text-primary-content h-8 px-5 font-black">
			<Link href="/">
				<a className="text-gray-50 normal-case text-2xl cursor-pointer">
					Genius Games
				</a>
			</Link>
		</div>
	);
}
