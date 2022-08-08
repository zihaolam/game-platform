const games = [
	{
		id: 1,
		title: "Laser Escape",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://laser-escape.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "/laser_escape.jpeg",
		madeBy: "Rose and Teacher Ismail",
		tags: ["puzzle"],
	},
	{
		id: 2,
		title: "Defuse The Bomb",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://defuse-the-bomb.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "/defuse_the_bomb.jpeg",
		madeBy: "Joseph and Teacher Ismail",
		tags: ["puzzle"],
	},
	{
		id: 3,
		title: "ReplJeweled",
		description: "Written in Kaboom.JS",
		gameSrc:
			"https://bejeweled-ripoff.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "/repl_jeweled.jpeg",
		madeBy: "Fiona and Teacher Ismail",
		tags: ["puzzle"],
	},
	{
		id: 4,
		title: "Simon Says",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://simon-says.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "simon_says.jpeg",
		madeBy: "Cathy and Teacher Ismail",
		tags: ["puzzle"],
	},
	{
		id: 5,
		title: "Dino Game",
		description: "Written in Javascript",
		gameSrc:
			"https://dino-game.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "dino_game.jpeg",
		madeBy: "Firman and Teacher Ismail",
		tags: ["platformer"],
	},
	{
		id: 6,
		title: "Full Metal Alchemist",
		description: "Written in P5.JS",
		gameSrc:
			"https://fullmetal-alchemist.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "full_metal_alchemist.jpeg",
		madeBy: "Firman and Teacher Ismail",
		tags: ["platformer"],
	},
	{
		id: 7,
		title: "Face The Darkness",
		description: "Written in P5.JS",
		gameSrc:
			"https://face-the-darkness-platformer-htmlcssjs.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "face_the_darkness.jpeg",
		madeBy: "Silky and Teacher Ismail",
		tags: ["platformer"],
	},
	{
		id: 8,
		title: "Race The Sun",
		description: "Written in Unity",
		gameSrc:
			"https://race-the-sun.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "race_the_sun.jpeg",
		madeBy: "Silky and Teacher Ismail",
		tags: ["simulation"],
	},
	{
		id: 9,
		title: "Basic Physics Engine",
		description: "Written in Javascript",
		gameSrc:
			"https://basic-physics-engine.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "basic_physics_engine.jpeg",
		madeBy: "Luca and Teacher Ismail",
		tags: ["simulation"],
	},
	{
		id: 10,
		title: "Rocket Vector AI",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://rocket-ai-but-with-input-vectors.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "rocket_vector_ai.jpeg",
		madeBy: "Kimi and Teacher Ismail",
		tags: ["simulation"],
	},
	{
		id: 11,
		title: "Reptillion S Tower Defence",
		description: "Written in P5.JS",
		gameSrc:
			"https://tower-defence-game.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "reptillion_s_tower_defense.jpeg",
		madeBy: "Derek and Teacher Ismail",
		tags: ["management"],
	},
	{
		id: 12,
		title: "Toilet Paper Tycoon",
		description: "Written in Javascript",
		gameSrc:
			"https://tp-tycoon.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "toilet_paper_typcoon.jpeg",
		madeBy: "Derek and Teacher Ismail",
		tags: ["management"],
	},
	{
		id: 13,
		title: "Free The Slime",
		description: "Written in Kaboom.JS",
		gameSrc:
			"https://free-the-slime.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "free_the_slime.jpeg",
		madeBy: "Fiona and Teacher Ismail",
		tags: ["casual"],
	},
	{
		id: 14,
		title: "Rolling Stones",
		description: "Written in Three.JS",
		gameSrc:
			"https://rolling-stones.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "rolling_stone.jpeg",
		madeBy: "Carlos and Teacher Ismail",
		tags: ["casual"],
	},
	{
		id: 15,
		title: "Gold Hunt",
		description: "Written in P5.JS",
		gameSrc:
			"https://gold-hunt.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "gold_hunt.jpeg",
		madeBy: "Daniel and Teacher Ismail",
		tags: ["casual"],
	},
	{
		id: 16,
		title: "Outrun Remake",
		description: "Written in Javascript",
		gameSrc: "https://outrun.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "outrun.jpeg",
		madeBy: "Luca and Teacher Ismail",
		tags: ["casual"],
	},
	{
		id: 17,
		title: "Maze Money and Monsters",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://mazes-money-and-monsters.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "maze_money_and_monsters.jpeg",
		madeBy: "Hayden and Teacher Ismail",
		tags: ["arcade"],
	},
	{
		id: 18,
		title: "Pong 3D",
		description: "Written in Three.JS",
		gameSrc: "https://pong-3d.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "pong_3d.jpeg",
		madeBy: "Angela and Teacher Ismail",
		tags: ["sport"],
	},
	{
		id: 19,
		title: "Mineclone",
		description: "Written in Javascript",
		gameSrc:
			"https://js-mineclone-wip.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "mine_clone.jpeg",
		madeBy: "Joshua and Teacher Ismail",
		tags: ["creative"],
	},
	{
		id: 20,
		title: "Mobster-Simulator",
		description: "Written in HTML, CSS and JS",
		gameSrc:
			"https://mobster-simulator.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "mobster_simulator.jpeg",
		madeBy: "Rose and Teacher Ismail",
		tags: ["fps"],
	},
	{
		id: 21,
		title: "Calamity RPG",
		description: "Written in HTML,CSS and JS",
		gameSrc:
			"https://calamity-rpg.ismaillimbada.repl.co/?lite=true&embed=true",
		imgSrc: "calamity.jpeg",
		madeBy: "Johnny and Teacher Ismail",
		tags: ["rpg"],
	},
];

export default games;
