// "Kelpie", "Minotaur", "Hydra", "Hippogriff"
// { name: "", habitat: "", dangerRating: "", description: "", encounterRate: "", loot: [] }

let beasts = [
    {
        id: 0,
        name: "Cyclops",
        habitat: "Greek  islands",
        dangerRating: 3,
        description: "A one-eyed giant",
        encounterRate: 0.05,
        loot: ["Cyclops eye", "sheep", "blood"]
    },
    {
        id: 1,
        name: "Siren",
        habitat: "Greek islands",
        dangerRating: 5,
        description: "Really good looking, but slightly psychotic",
        encounterRate: 0.5,
        loot: ["haunting melody", "sailors' bones", "tail"]
    },
    {
        id: 2,
        name: "Minotaur",
        habitat: "Greek labyrinths",
        dangerRating: 4,
        description: "Half-man, half-bull",
        encounterRate: 0.3,
        loot: ["six pack", "horns", "thread"]
    },
    {
        id: 3,
        name: "Hippogriff",
        habitat: "Forbidden Forest",
        dangerRating: 3,
        description: "A proud, noble creature. Treat it with respect if you value your life.",
        encounterRate: 0.2,
        loot: ["Hippogriff's claw", "Wing"]
    }, {
        id: 4,
        name: "Dialga",
        habitat: "Mt Coronet",
        dangerRating: 5,
        description: "The lord of time in the Pokemon universe. Has awesome power.",
        encounterRate: 0.01,
        loot: ["Red Chain", "Adamant Crystal"]
    }, {
        id: 5,
        name: "Slime",
        habitat: "Everywhere",
        dangerRating: 0,
        description: "It's a slime.",
        encounterRate: 0.99,
        loot: ["slime"]
    }, {
        id: 6,
        name: "Kuriboh",
        habitat: "Kuriboh World",
        dangerRating: 1,
        description: "A ball of fluff with hidden power inside.",
        encounterRate: 0.05,
        loot: []
    }, {
        id: 7,
        name: "Chocobo",
        habitat: "Anywhere with greens to eat",
        dangerRating: 2,
        description: "A tall, yellow flightless bird often seen roaming the grasslands. If you can lure it with vegetables, it will let you ride it.",
        encounterRate: 0.3,
        loot: ["Feather"]
    }, {
        id: 8,
        name: "Redcap",
        habitat: "Ruined Scottish castles",
        dangerRating: 2,
        description: "A type of malevolent, murderous goblin. They are said to inhabit ruined castles along the Anglo-Scottish border, especially those that were the scenes of tyranny or wicked deeds and is known for soaking their cap in the blood of their victims.",
        encounterRate: 0.15,
        loot: ["Blood-soaked cap", "Iron boots", "Pike"]
    }, {
        id: 9,
        name: "Kraken",
        habitat: "Seas around Norway",
        dangerRating: 4,
        description: "A gigantic squid with a reputation for attacking ships unlucky enough to cross it's path.",
        encounterRate: 0.06,
        loot: ["Tentacles", "Beak"]
    }

];

module.exports = beasts;
