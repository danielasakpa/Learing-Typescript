type SuperHeros = {
  name: string;
  alias: string;
  powers: string[];
};

const superheroes: SuperHeros[] = [
  {
    name: "Clark Kent",
    alias: "Superman",
    powers: ["🚀 Flight", "💪 Super Strength", "🔥 Heat Vision"],
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    powers: ["💪 Superhuman Strength", "🔗 Lasso of Truth", "🚀 Flight"],
  },
  {
    name: "Bruce Wayne",
    alias: "Batman",
    powers: ["🧠 Intelligence", "🥋 Martial Arts", "🔧 Gadgets"],
  },
  // Add more superheroes as needed
];

// Additional superheroes
const moreSuperheroes: Array<SuperHeros> = [
  {
    name: "Barry Allen",
    alias: "The Flash",
    powers: ["⚡ Super Speed", "⌛ Time Travel", "🌀 Speed Force"],
  },
  {
    name: "Arthur Curry",
    alias: "Aquaman",
    powers: [
      "🌊 Underwater Breathing",
      "🐟 Telepathic Communication with Sea Life",
      "💪 Super Strength",
    ],
  },
  {
    name: "Hal Jordan",
    alias: "Green Lantern",
    powers: ["💍 Power Ring Constructs", "🚀 Flight", "💥 Energy Projection"],
  },
];

// Combine the original array with the additional superheroes
const allSuperheroes: SuperHeros[] = [...superheroes, ...moreSuperheroes];

// Displaying all superheroes
console.log("All Superheroes:");
allSuperheroes.forEach((hero, index) => {
  console.log(
    `${index + 1}. ${hero.alias} (${hero.name}) - Powers: ${hero.powers.join(
      ", "
    )}`
  );
});

type MixedNumberStringArray = (number | string)[][];

type ReadOnlyArray = ReadonlyArray<(number | string)[]>;

const mlModels: ReadOnlyArray = [[2, 4, ""]];

// let newUser: ["daniel", "ovie"];

// newUser = ["daniel", "ovie"];

// newUser.push("belema");

export {};
