"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var superheroes = [
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
var moreSuperheroes = [
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
var allSuperheroes = __spreadArray(__spreadArray([], superheroes, true), moreSuperheroes, true);
// Displaying all superheroes
console.log("All Superheroes:");
allSuperheroes.forEach(function (hero, index) {
    console.log("".concat(index + 1, ". ").concat(hero.alias, " (").concat(hero.name, ") - Powers: ").concat(hero.powers.join(", ")));
});
