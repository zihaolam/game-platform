const games = [
    {
        id: 1,
        title: "Laser Escape",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://laser-escape.ismaillimbada.repl.co/",
        imgSrc: "/laser_escape.jpeg",
        madeBy: "Rose and Teacher Ismail",
        tags: ["puzzle"],
    },
    {
        id: 2,
        title: "Defuse The Bomb",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://defuse-the-bomb.ismaillimbada.repl.co/",
        imgSrc: "/defuse_the_bomb.jpeg",
        madeBy: "Joseph and Teacher Ismail",
        tags: ["puzzle"],
    },
    {
        id: 3,
        title: "ReplJeweled",
        description: "Written in Kaboom.JS",
        gameSrc: "https://bejeweled-ripoff.ismaillimbada.repl.co/",
        imgSrc: "/repl_jeweled.jpeg",
        madeBy: "Fiona and Teacher Ismail",
        tags: ["puzzle"],
    },
    {
        id: 4,
        title: "Simon Says",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://simon-says.ismaillimbada.repl.co/",
        imgSrc: "simon_says.jpeg",
        madeBy: "Cathy and Teacher Ismail",
        tags: ["puzzle"],
    },
    {
        id: 5,
        title: "Dino Game",
        description: "Written in Javascript",
        gameSrc: "https://dino-game.ismaillimbada.repl.co/",
        imgSrc: "dino_game.jpeg",
        madeBy: "Firman and Teacher Ismail",
        tags: ["platformer"],
    },
    {
        id: 6,
        title: "Full Metal Alchemist",
        description: "Written in P5.JS",
        gameSrc: "https://fullmetal-alchemist.ismaillimbada.repl.co/",
        imgSrc: "full_metal_alchemist.jpeg",
        madeBy: "Firman and Teacher Ismail",
        tags: ["platformer"],
    },
    {
        id: 7,
        title: "Face The Darkness",
        description: "Written in P5.JS",
        gameSrc:
            "https://face-the-darkness-platformer-htmlcssjs.ismaillimbada.repl.co/",
        imgSrc: "face_the_darkness.jpeg",
        madeBy: "Silky and Teacher Ismail",
        tags: ["platformer"],
    },
    {
        id: 8,
        title: "Race The Sun",
        description: "Written in Unity",
        gameSrc: "https://race-the-sun.ismaillimbada.repl.co/",
        imgSrc: "race_the_sun.jpeg",
        madeBy: "Silky and Teacher Ismail",
        tags: ["simulation"],
    },
    {
        id: 9,
        title: "Basic Physics Engine",
        description: "Written in Javascript",
        gameSrc: "https://basic-physics-engine.ismaillimbada.repl.co/",
        imgSrc: "basic_physics_engine.jpeg",
        madeBy: "Luca and Teacher Ismail",
        tags: ["simulation"],
    },
    {
        id: 10,
        title: "Rocket Vector AI",
        description: "Written in HTML, CSS and JS",
        gameSrc:
            "https://rocket-ai-but-with-input-vectors.ismaillimbada.repl.co/",
        imgSrc: "rocket_vector_ai.jpeg",
        madeBy: "Kimi and Teacher Ismail",
        tags: ["simulation"],
    },
    {
        id: 11,
        title: "Reptillion S Tower Defence",
        description: "Written in P5.JS",
        gameSrc: "https://tower-defence-game.ismaillimbada.repl.co/",
        madeBy: "Derek and Teacher Ismail",
        imgSrc: "reptillion_s_tower_defense.jpeg",
        tags: ["management"],
    },
    {
        id: 12,
        title: "Toilet Paper Tycoon",
        description: "Written in Javascript",
        gameSrc: "https://tp-tycoon.ismaillimbada.repl.co/",
        madeBy: "Derek and Teacher Ismail",
        imgSrc: "toilet_paper_typcoon.jpeg",
        tags: ["management"],
    },
    {
        id: 13,
        title: "Free The Slime",
        description: "Written in Kaboom.JS",
        gameSrc: "https://free-the-slime.ismaillimbada.repl.co/",
        madeBy: "Fiona and Teacher Ismail",
        imgSrc: "free_the_slime.jpeg",
        tags: ["casual"],
    },
    {
        id: 14,
        title: "Rolling Stones",
        description: "Written in Three.JS",
        gameSrc: "https://rolling-stones.ismaillimbada.repl.co/",
        madeBy: "Carlos and Teacher Ismail",
        imgSrc: "rolling_stone.jpeg",
        tags: ["casual"],
    },
    {
        id: 15,
        title: "Gold Hunt",
        description: "Written in P5.JS",
        gameSrc: "https://gold-hunt.ismaillimbada.repl.co/",
        madeBy: "Daniel and Teacher Ismail",
        imgSrc: "gold_hunt.jpeg",
        tags: ["casual"],
    },
    {
        id: 16,
        title: "Outrun Remake",
        description: "Written in Javascript",
        gameSrc: "https://outrun.ismaillimbada.repl.co/",
        madeBy: "Luca and Teacher Ismail",
        imgSrc: "outrun.jpeg",
        tags: ["casual"],
    },
    {
        id: 17,
        title: "Maze Money and Monsters",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://mazes-money-and-monsters.ismaillimbada.repl.co/",
        madeBy: "Hayden and Teacher Ismail",
        imgSrc: "maze_money_and_monsters.jpeg",
        tags: ["arcade"],
    },
    {
        id: 18,
        title: "Pong 3D",
        description: "Written in Three.JS",
        gameSrc: "https://pong-3d.ismaillimbada.repl.co/",
        madeBy: "Angela and Teacher Ismail",
        imgSrc: "pong_3d.jpeg",
        tags: ["sport"],
    },
    {
        id: 19,
        title: "Mineclone",
        description: "Written in Javascript",
        gameSrc: "https://js-mineclone-wip.ismaillimbada.repl.co/",
        madeBy: "Joshua and Teacher Ismail",
        imgSrc: "mine_clone.jpeg",
        tags: ["creative"],
    },
    {
        id: 20,
        title: "Mobster-Simulator",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://mobster-simulator.ismaillimbada.repl.co/",
        madeBy: "Rose and Teacher Ismail",
        imgSrc: "mobster_simulator.jpeg",
        tags: ["fps"],
    },
    {
        id: 21,
        title: "Zombie Mayhem",
        description: "Written in HTML,CSS and JS",
        gameSrc: "https://zombie-mayhem.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "zombie-mayhem.jpeg",
        tags: ["casual"],
    },
    {
        id: 22,
        title: "Gnat Attack",
        description: "Written in HTML, CSS,JS and TweenMax",
        gameSrc: "https://gnat-attack.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "gnat-attack.jpeg",
        tags: ["casual"],
    },
    {
        id: 23,
        title: "Mandala drawing JS tool",
        description: "Written in HTML, CSS and JS + Dat.Gui",
        gameSrc: "https://drawing-js.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "drawing-js.jpeg",
        tags: ["simulation"],
    },
    {
        id: 24,
        title: "Rotation Puzzle game",
        description: "Written in JS + JQuery",
        gameSrc: "https://rotation-game.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "rotation-game.jpeg",
        tags: ["puzzle"],
    },
    {
        id: 25,
        title: "Warehouse Keeper",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://warehouse-keeper.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "warehouse-keeper.jpeg",
        tags: ["puzzle"],
    },
    {
        id: 26,
        title: "MicroVania",
        description: "Written in Javascript",
        gameSrc: "https://microvania.ismaillimbada.repl.co/",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "microvania.jpeg",
        tags: ["platformer"],
    },
    {
        id: 27,
        title: "FlipCard",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://FlipCard-Game.ismaillimbada.repl.co ",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "flipcard.jpeg",
        tags: ["puzzle"],
    },
    {
        id: 28,
        title: "AirHockey",
        description: "Written in P5.JS",
        gameSrc: "https://Airhockey-game.ismaillimbada.repl.co",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "airhockey.jpeg",
        tags: ["sport"],
    },
    {
        id: 29,
        title: "Stickman",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://Stickman-Game.ismaillimbada.repl.co",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "stickman.jpeg",
        tags: ["simulation"],
    },
    {
        id: 30,
        title: "Dino Dig",
        description: "Written in Javascript",
        gameSrc: "https://Dino-Dig.ismaillimbada.repl.co ",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "dino-dig.jpeg",
        tags: [""],
    },
    {
        id: 31,
        title: "Kill the king",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://Kill-the-king.ismaillimbada.repl.co",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "kill-the-king.jpeg",
        tags: ["arcade"],
    },
    {
        id: 32,
        title: "Maze Grid",
        description: "Written in HTML,CSS and JS",
        gameSrc: "https://Maze-Grid.ismaillimbada.repl.co",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "maze-grid.jpeg",
        tags: ["arcade"],
    },
    {
        id: 33,
        title: "The impossible game",
        description: "Written in HTML, CSS,JS",
        gameSrc: "https://the-impossible-game.ismaillimbada.repl.co/",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "impossible-game.jpeg",
        tags: ["rhythm"],
    },
    {
        id: 34,
        title: "Unruly Tower",
        description: "Written in HTML, CSS and JS + Dat.Gui",
        gameSrc: "https://Unruly-Tower.ismaillimbada.repl.co ",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "unruly-tower.jpeg",
        tags: ["platformer"],
    },
    {
        id: 35,
        title: "Detour Physics Simulation",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://Detour-Physics-sim.ismaillimbada.repl.co ",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "detour-physics-sim.jpeg",
        tags: ["simulation"],
    },
    {
        id: 36,
        title: "Simplified Racing",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://simplified-racing-game.ismaillimbada.repl.co/ ",
        madeBy: "Firman and Teacher Ismail",
        imgSrc: "simplified-racing-game.jpeg",
        tags: ["racing"],
    },
    {
        id: 37,
        title: "Procedural Low Poly Planet",
        description: "Written in Javascript",
        gameSrc: "https://Procedural-Low-Poly-Planet.ismaillimbada.repl.co",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "procedural-low-poly-planet.jpeg",
        tags: ["simulation"],
    },
    {
        id: 38,
        title: "Top down shooter",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://top-down-shooter-js.ismaillimbada.repl.co/",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "top-down-shooter.jpeg",
        tags: ["arcade"],
    },
    {
        id: 39,
        title: "Pop the lock",
        description: "Written in P5.JS",
        gameSrc: "https://pop-the-lock.ismaillimbada.repl.co/ ",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "pop-the-lock.jpeg",
        tags: ["casual"],
    },
    {
        id: 40,
        title: "Escape 2D",
        description: "Written in HTML, CSS and JS",
        gameSrc: "https://Escape-2D.ismaillimbada.repl.co ",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "escape-2d.jpeg",
        tags: ["simulation"],
    },
    {
        id: 41,
        title: "The invisible lizard",
        description: "Written in Javascript",
        gameSrc: "https://the-invisible-lizard.ismaillimbada.repl.co/",
        madeBy: "Silky and Teacher Ismail",
        imgSrc: "invisible-lizard-hunter.jpeg",
        tags: ["casual"],
    },
];

export default games;
