const cards = [
  {
    name: "Marth",
    title: "The Savior of Archanea",
    illustrator: "Maki Hakoda",
    deployCost: 5,
    cardNo: "B01-001SR( + )",
    promoteCost: 4,
    class: "Lodestar",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote:
      "Falchion, lend me your strength! Give me the strength to banish Medeus to eternal darkness!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/79/FE0_Marth3.png/revision/latest?cb=20150628051505",
    skills: [
      {
        name: "Victory Nears",
        type: "ACT",
        description:
          "Flip 3 Bonds, discard one 'Marth' from your hand. Until the end of your opponent’s turn, all allied units gain 30 attack.",
      },
      {
        name: "Falchion",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon unit, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Caeda",
    title: "The Angelic Advocate of Affection",
    illustrator: "Mayo",
    deployCost: 4,
    cardNo: "B01-004SR( + )",
    promoteCost: 3,
    class: "Falcon Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote:
      "Can you truly fathom love? Is there someone that you care deeply about?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/6f/FE0_Caeda2.png/revision/latest?cb=20150628050413",
    skills: [
      {
        name: "Persuasion",
        type: "AUTO",
        description:
          "Flip 1 Bond. When this unit's attack destroys an enemy, you may search your deck for a Red card except 'Caeda', show it, and place it in your hand.",
      },
      {
        name: "Angelic Flight",
        type: "ACT",
        description:
          "Once per turn, move this unit. This skill cannot be used if this unit is tapped.",
      },
    ],
  },
  {
    name: "Marth",
    title: "The Deposed Prince",
    illustrator: "Akira Fujikawa",
    deployCost: 2,
    cardNo: "B01-002N",
    promoteCost: "-",
    class: "Lord",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote:
      "I must carry out my father's dying wish and return peace to Archanea.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b3/FE0_Marth2.png/revision/latest?cb=20150628051428",
    skills: [
      {
        name: "Hero’s Morale",
        type: "CONT",
        description:
          "While you have at least two allied Red units, this unit gains +10 attack.",
      },
    ],
  },
];

module.exports = cards;