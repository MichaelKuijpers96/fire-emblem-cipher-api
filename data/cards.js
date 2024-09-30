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
      "https://static.wikia.nocookie.net/fireemblem/images/7/79/FE0_Marth3.png/",
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
      "https://static.wikia.nocookie.net/fireemblem/images/b/b3/FE0_Marth2.png/",
    skills: [
      {
        name: "Hero’s Morale",
        type: "CONT",
        description:
          "While you have at least two allied Red units, this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Marth",
    title: "The Crown Prince of Altea",
    illustrator: "Yusuke Kozaki",
    deployCost: 1,
    cardNo: "B01-003HN",
    promoteCost: "-",
    class: "Lord",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote:
      "This is my fate...to prove my worth as Prince of Altea, I must reclaim the divine sword Falchion and defeat Doluna.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/c1/Marthciphertcg.jpg/",
    skills: [
      {
        name: "Young Hero",
        type: "ACT",
        description:
          "Select an enemy unit and move it. This skill cannot be used unless this unit is in the Frontline.",
      },
    ],
    supportSkill: {
      name: "Attack Support",
      description:
        "Hero's Emblem Support. If the attacking unit is Red, until the end of this battle, the number of orbs this unit’s attack would destroy becomes 2.",
    },
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
      "https://static.wikia.nocookie.net/fireemblem/images/0/00/FE0_Caeda3.png/",
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
    name: "Caeda",
    title: "The Wings of Restoration",
    illustrator: "Mayo",
    deployCost: 2,
    cardNo: "B01-005N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Please, everyone… lend me your strength.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/6f/FE0_Caeda2.png/",
    skills: [
      {
        name: "Wing Spear",
        type: "CONT",
        description:
          "While this unit is attacking a Mounted or Armor unit, this unit gains +20 attack.",
      },
      {
        name: "Heavenly Carrier",
        type: "ACT",
        description: "[ Tap This Unit ] Choose one ally unit, and move it.",
      },
    ],
  },
  {
    name: "Caeda",
    title: "The Princess of Talys",
    illustrator: "Douji Shiki",
    deployCost: 1,
    cardNo: "B01-006HN",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Marth! I’m glad I found you.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/4/49/FE0_Caeda.png/",
    skills: [
      {
        name: "Royal Charisma",
        type: "ACT",
        description:
          "[ Tap This Unit, Tap 1 ally unit] Choose one ally unit. Until the end of this turn, that unit gains +10 attack.",
      },
      {
        name: "Elysian Emblem",
        type: "Support Skill",
        description:
          "You may choose one ally that is not the attacking unit, and move it.",
      },
    ],
  },
  {
    name: "Cain",
    title: "The Infamous Knight Called The Raging Bull",
    illustrator: "Aoji",
    deployCost: 3,
    cardNo: "B01-007R",
    promoteCost: 2,
    class: "Paladin",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Male Cipher", "Sword", "Mounted"],
    range: 1,
    support: 10,
    quote: "Come... have a taste of my sword!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/74/FE0_Cain2.png/",
    skills: [
      {
        name: "Blessed Knight’s Protection",
        type: "CONT",
        description:
          "Your opponent’s back line cannot attack this unit or any unit with a deployment cost of 2 or less.",
      },
      {
        name: "Dancing Lances of Red & Green",
        type: "AUTO",
        description:
          "[Tap an ally “Abel”] When this unit attacks, you may pay the cost, if you do: This turn, this unit gains +40 attack.",
      },
    ],
  },
  {
    name: "Cain",
    title: "The Scarlet Knight",
    illustrator: "Aoji",
    deployCost: 1,
    cardNo: "B01-008N",
    promoteCost: "-",
    class: "Cavalier",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Sword", "Mounted"],
    range: 1,
    support: 10,
    quote: "Glory to Altea! Glory to our homeland!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/dd/FE0_Cain.png/",
    skills: [
      {
        name: "Bonds of Red & Green",
        type: "CONT",
        description:
          "While this unit is being supported by Abel, this unit gains +30 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Abel",
    title: "The Infamous Knight Called The Black Panther",
    illustrator: "Raita Kazama",
    deployCost: 3,
    cardNo: "B01-009R",
    promoteCost: 2,
    class: "Paladin",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Male Cipher", "Lance", "Mounted"],
    range: 1,
    support: 10,
    quote: "Come… have a taste of my lance!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b2/FE0_Abel2.png/",
    skills: [
      {
        name: "Blessed Knight’s Protection",
        type: "CONT",
        description:
          "Your opponent’s back line cannot attack this unit or any unit with a deployment cost of 2 or less.",
      },
      {
        name: "Dancing Lances of Red & Green",
        type: "AUTO",
        description:
          "[Tap an ally “Cain”] When this unit attacks, you may pay the cost and if you do: This turn, this unit gains +40 attack.",
      },
    ],
  },
  {
    name: "Abel",
    title: "The Verdant Knight",
    illustrator: "Raita Kazama",
    deployCost: 1,
    cardNo: "B01-010N",
    promoteCost: "-",
    class: "Cavalier",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Lance", "Mounted"],
    range: 1,
    support: 10,
    quote:
      "I am to be your guard, Prince...that is the promise I made to Princess Elice.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/1/1a/FE0_Abel.png/",
    skills: [
      {
        name: "Bonds of Red & Green",
        type: "CONT",
        description:
          "While this unit is being supported by Cain, this unit gains +30 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Draug",
    title: "The Shield of Altea",
    illustrator: "Homazo",
    deployCost: 3,
    cardNo: "B01-011HN",
    promoteCost: 2,
    class: "General",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Male Cipher", "Lance", "Armour"],
    range: 1,
    support: 10,
    quote: "Not even one soldier can get through me!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/2/23/FE0_Draug2.png/",
    skills: [
      {
        name: "Impregnable Wall",
        type: "AUTO",
        description:
          "[ Flip 1 Bond ] When an ally is attacked, if you pay the cost then this unit becomes the target of the attack instead of that ally. This skill cannot be used if this unit is not in the vanguard area.",
      },
      {
        name: "Armor Expertise",
        type: "CONT",
        description:
          "While this unit is being attacked, it gains 20 attack unless the attacker is a Tome unit.",
      },
    ],
  },
  {
    name: "Draug",
    title: "The Knight of Protecting",
    illustrator: "Homazo",
    deployCost: 1,
    cardNo: "B01-012N",
    promoteCost: "-",
    class: "Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Lance", "Armor"],
    range: 1,
    support: 10,
    quote: "I'll protect you, even if it means my life.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/c9/B01-012N.png/",
    skills: [
      {
        name: "Armor Expertise",
        type: "CONT",
        description:
          "While this unit is being attacked, it gains 20 attack unless the attacker is a Tome unit.",
      },
      {
        name: "Defender’s Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your defending unit’s power is increased by 20.",
      },
    ],
  },
  {
    name: "Gordin",
    title: "The Archanean League Bowman",
    illustrator: "Kokon Konfuzi",
    deployCost: 3,
    cardNo: "B01-013HN",
    promoteCost: 2,
    class: "Sniper",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Male Cipher", "Bow"],
    range: 1,
    support: 20,
    quote:
      "If I can be of use, then I gladly give my life to serve you one last time.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/9e/FE0_Gordin2.png/",
    skills: [
      {
        name: "Warning Shot",
        type: "AUTO",
        description:
          "When a cost 2 or lower ally unit is deployed, you may choose an enemy Flying unit and move it.",
      },
      {
        name: "Wingbane",
        type: "CONT",
        description:
          "While this unit is attacking a Flying unit, this unit gains 30 attack.",
      },
    ],
  },
  {
    name: "Gordin",
    title: "The Altean Archer",
    illustrator: "Kokon Konfuzi",
    deployCost: 1,
    cardNo: "B01-014N",
    promoteCost: "-",
    class: "Archer",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Bow"],
    range: 1,
    support: 20,
    quote: "",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/1/1d/FE0_Gordin.png/",
    skills: [
      {
        name: "Steel Bow",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 1 Bond ] This turn, this unit gains +10 attack.",
      },
      {
        name: "Wingbane",
        type: "CONT",
        description:
          "While this unit is attacking a Flying unit, this unit gains 30 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Wrys",
    title: "The Priest of Healing",
    illustrator: "Shishizaru",
    deployCost: 1,
    cardNo: "B01-015N",
    promoteCost: "-",
    class: "Priest",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Staff"],
    range: "-",
    support: 20,
    quote:
      "I am Wrys, a humble priest. I cannot fight, but I can heal your wounded.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b3/FE0_Wrys.png/",
    skills: [
      {
        name: "Vulnerary",
        type: "AUTO",
        description:
          "[ Tap This Unit , Destroy this unit] When another ally is attacked, you may pay the cost, and if you do: That ally gains +20 attack until the end of that battle.",
      },
      {
        name: "Miracle Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your opponent’s attacking unit cannot perform a Critical Hit.",
      },
    ],
  },
  {
    name: "Ogma",
    title: "The Fighting God of Talys",
    illustrator: "Hiroaki",
    deployCost: 4,
    cardNo: "B01-016SR",
    promoteCost: 3,
    class: "Hero",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote:
      "Princess Caeda saved me. Not only did she save my life… she gave me something to fight for.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b9/FE0_Ogma3.png/",
    skills: [
      {
        name: "Battlefield-Born",
        type: "ACT",
        description:
          "[Tap another ally] This turn, this unit gains +10 attack.",
      },
      {
        name: "Sanctified Strike",
        type: "AUTO",
        description:
          "If this unit’s attack is 100 or more after initiating an attack, this turn, the number of orbs this unit’s attacks would destroy becomes 2.",
      },
    ],
  },
  {
    name: "Ogma",
    title: "The Strong-Armed Gladiator",
    illustrator: "PenekoR",
    deployCost: 2,
    cardNo: "B01-017N",
    promoteCost: "-",
    class: "Mercenary",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote:
      "I'm far worse than an animal...merely a sword swinging sellsword with no purpose.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b0/FE0_Ogma.png/",
    skills: [
      {
        name: "Predestined Paths",
        type: "CONT",
        description:
          "The card supporting this unit fails unless it is “Caeda” or “Navarre”.",
      },
    ],
  },
  {
    name: "Ogma",
    title: "The Talysian Mercenary",
    illustrator: "Meisai",
    deployCost: 1,
    cardNo: "B01-018HN",
    promoteCost: "-",
    class: "Mercenary",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote:
      "You and I have similar goals, protecting the Talys royal family. Prince Marth, let us fight alongside each other.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/2/2a/FE0_Ogma2.png/",
    skills: [
      {
        name: "Mercenary Commander",
        type: "CONT",
        description:
          "During your turn, if there are at least two other allies with a deployment cost of 2 or less, this unit gains +20 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Bord",
    title: "The Talysian Fighter",
    illustrator: "HACCAN",
    deployCost: 1,
    cardNo: "B01-019N",
    promoteCost: "-",
    class: "Fighter",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Axe"],
    range: 1,
    support: 10,
    quote: "I’m not Cord! I’m Bord!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/71/FE0_Bord.png/",
    skills: [
      {
        name: "Fighter's Expertise",
        type: "CONT",
        description: "During your turn, this unit gains +20 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Cord",
    title: "The Talysian Axe-wielder",
    illustrator: "HACCAN",
    deployCost: 1,
    cardNo: "B01-020N",
    promoteCost: "-",
    class: "Fighter",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Axe"],
    range: 1,
    support: 10,
    quote: "I'm not Bord! I'm Cord!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/2/23/FE0_Cord.png/",
    skills: [
      {
        name: "Fighter's Expertise",
        type: "CONT",
        description: "During your turn, this unit gains +20 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Barst",
    title: "The Courageous Talysian Mercenary",
    illustrator: "HACCAN",
    deployCost: 2,
    cardNo: "B01-021HN",
    promoteCost: "-",
    class: "Fighter",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Axe"],
    range: 1,
    support: 10,
    quote: "Bord! Cord! Let’s move!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/7e/FE0_Barst.png/",
    skills: [
      {
        name: "Formation Skill",
        type: "AUTO",
        description:
          '[Tap both allied "Bord" and "Cord"] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +50 attack and the number of orbs this unit’s attack would destroy becomes 2.',
      },
      {
        name: "Fighter's Instinct",
        type: "CONT",
        description: "During your turn, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Navarre",
    title: "The Crimson God of Death",
    illustrator: "Senri Kita",
    deployCost: 4,
    cardNo: "B01-022SR",
    promoteCost: 3,
    class: "Swordmaster",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "...Enough talk. Draw.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/cc/FE0_Nabarl3.png/",
    skills: [
      {
        name: "Quick Draw",
        type: "ACT",
        description:
          '[Discard one "Navarre" from your hand] Until the end of this turn, this unit\'s attacks cannot be avoided.',
      },
      {
        name: "Dual-Sword Technique",
        type: "AUTO",
        description:
          "[Flip 1 Bond] When this card destroys a unit with an attack, you may pay the cost, and if you do: Choose an enemy unit with a Deployment Cost of 2 or less besides the Main Character, and destroy it.",
      },
    ],
  },
  {
    name: "Navarre",
    title: "The Loose-Cannon Swordsman",
    illustrator: "Maki Hakoda",
    deployCost: 2,
    cardNo: "B01-023N",
    promoteCost: "-",
    class: "Myrmidon",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "You and I are the same… nothing has changed.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/93/FE0_Nabarl2.png/",
    skills: [
      {
        name: "Predestined Paths",
        type: "CONT",
        description:
          "The card supporting this unit fails unless it is “Caeda” or “Ogma”.",
      },
    ],
  },
  {
    name: "Navarre",
    title: "The Crimson Myrmidon",
    illustrator: "Enomoto",
    deployCost: 1,
    cardNo: "B01-024HN",
    promoteCost: "-",
    class: "Myrmidon",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "... I will not raise my sword to a woman.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/8/88/FE0_Nabarl.png/",
    skills: [
      {
        name: "Blade on the Edge",
        type: "CONT",
        description:
          "During your turn, if the only units you have are this card and your Main Character, this unit gains +20 attack.",
      },
      {
        name: "Attack Emblem",
        type: "Support Skill",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Lena",
    title: "The Affectionate Saint",
    illustrator: "Fumi",
    deployCost: 3,
    cardNo: "B01-025HN",
    promoteCost: 2,
    class: "Bishop",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "With enough courage, you can traverse a path once thought impassible.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/69/FE0_Lena2.png/",
    skills: [
      {
        name: "Saint’s Blessings",
        type: "AUTO",
        description:
          'Once Per Turn [Flip 1 Bond] When a cost 2 or lower ally unit is deployed, you may pay the cost, and if you do: Choose a card in your Retreat Area with a Deployment Cost of 1 except "Lena", and add that card to your hand.',
      },
    ],
  },
  {
    name: "Lena",
    title: "The Ascetic Saint",
    illustrator: "Fumi",
    deployCost: 1,
    cardNo: "B01-026N",
    promoteCost: "-",
    class: "Cleric",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 20,
    affinities: ["Red Cipher", "Female Cipher", "Staff"],
    range: "-",
    support: 20,
    quote: "Julian, please go ahead…I left something important back there!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/2/2e/FE0_Lena.png/",
    skills: [
      {
        name: "Heal",
        type: "ACT",
        description:
          '[Tap, Flip 2 Bonds] Choose a card in your Retreat Area except "Lena" and add that card to your hand.',
      },
      {
        name: "Stolen Heart",
        type: "CONT",
        description: 'Your allied "Julian" gains +10 attack.',
      },
    ],
    supportSkills: [
      {
        name: "Defense Support",
        type: "Miracle Emblem Support",
        description:
          "Until the end of this battle, your opponent’s attacking unit cannot perform a Critical Hit.",
      },
    ],
  },
  {
    name: "Julian",
    title: "The Thief of the Frontier",
    illustrator: "Misei Ito",
    deployCost: 2,
    cardNo: "B01-027HN",
    promoteCost: "-",
    class: "Thief",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote:
      "I'm not a Soothsire...anymore. Let's just say, I've had a change of heart.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/ca/FE0_Julian.png/",
    skills: [
      {
        name: "Locktouch",
        type: "ACT",
        description:
          "[Tap This Unit] Reveal the top card of your opponent’s deck. If that card has a Deployment Cost of 3 or more, you may Flip 1 Bond to draw a card from your deck.",
      },
      {
        name: "Steal",
        type: "ACT",
        description:
          "[Flip 1 Bond] Put the top card of your opponent’s deck into their Retreat Area.",
      },
    ],
  },
  {
    name: "Merric",
    title: "The Sage of Gales",
    illustrator: "Yoshiro Ambe",
    deployCost: 4,
    cardNo: "B01-028R",
    promoteCost: 3,
    class: "Sage",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Male Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "This cur is my burden. Please, get behind me.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/9d/FE0_Merric.png/",
    skills: [
      {
        name: "Excalibur",
        type: "ACT",
        description:
          'Once Per Turn [Flip 1 Bond] This turn, this unit gains "Wingbane": ("Wingbane" CONT While this unit is attacking a Flying unit, this unit gains +30 attack.)',
      },
      {
        name: "Mighty Wind Magic",
        type: "AUTO",
        description:
          'When this unit destroys an enemy with an attack, if "Excalibur" was used this turn, draw one card.',
      },
    ],
  },
  {
    name: "Merric",
    title: "The Mage of the Wind",
    illustrator: "Yoshiro Ambe",
    deployCost: 1,
    cardNo: "B01-029N",
    promoteCost: "-",
    class: "Mage",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "Let's see just what Khadein's legendary Excalibur can do.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/73/FE0_Merric2.png/",
    skills: [
      {
        name: "'Excalibur",
        type: "ACT",
        description:
          'Once Per Turn [Flip 1 Bond] This turn, this unit gains "Wingbane": ("Wingbane" CONT While this unit is attacking a Flying unit, this unit gains +30 attack.)',
      },
    ],
    supportSkills: [
      {
        name: "Attack Support",
        type: "Mage's Emblem Support",
        description: "Draw 1 card, then discard 1 card.",
      },
    ],
  },
  {
    name: "Minerva",
    title: "Princess",
    illustrator: "Mari Shimazaki",
    deployCost: 4,
    cardNo: "B01-030R",
    promoteCost: 3,
    class: "Dragon Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: [
      "Red Cipher",
      "Female Cipher",
      "Axe",
      "Cipher Flying",
      "Cipher Dragon",
    ],
    range: 1,
    support: 30,
    quote:
      "I will spare my brother a death on some stranger’s sword. Let him be punished by my hands.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/62/FE0_Minerva3.png/",
    skills: [
      {
        name: "Elysian Whip",
        type: "CONT",
        description:
          "For every other ally Flying unit, this unit gains +10 attack.",
      },
      {
        name: "Iote’s Shield",
        type: "CONT",
        description: 'All enemy "Wingbane" skills are not applied.',
      },
    ],
  },
  {
    name: "Minerva",
    title: "The Princess of Macedon",
    illustrator: "Mari Shimazaki",
    deployCost: 1,
    cardNo: "B01-031N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: [
      "Red Cipher",
      "Female Cipher",
      "Axe",
      "Cipher Flying",
      "Cipher Dragon",
    ],
    range: 1,
    support: 30,
    quote: "Palla, Catria, Est. All together now!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d9/FE0_Minerva2.png/",
    skills: [
      {
        name: "Wings of Macedon",
        type: "CONT",
        description:
          "While there are at least 2 other Flying allies, this unit gains +20 attack.",
      },
    ],
    supportSkills: [
      {
        name: "Attack Support",
        type: "Elysian Emblem Support",
        description:
          "You may choose one ally that is not the attacking unit, and move it.",
      },
    ],
  },
  {
    name: "Maria",
    title: "The Innocent Bishop",
    illustrator: "Shigetaka Kimura",
    deployCost: 3,
    cardNo: "B01-032HN",
    promoteCost: 2,
    class: "Bishop",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "I'll never be able to help you if I don't get strong too, sis!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/90/FE0_Maria2.png/",
    skills: [
      {
        name: "Fortify",
        type: "ACT",
        description:
          '[Tap This Unit, Flip 3 Bonds] Choose 2 cards with different unit names in your Retreat Area, except "Maria" cards, and add them to your hand.',
      },
    ],
  },
  {
    name: "Maria",
    title: "The Young Princess of Macedon",
    illustrator: "Shigetaka Kimura",
    deployCost: 1,
    cardNo: "B01-033N",
    promoteCost: "-",
    class: "Cleric",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 20,
    affinities: ["Red Cipher", "Female Cipher", "Staff"],
    range: "-",
    support: 20,
    quote: "Hey, it's alright if I come along too, right?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/68/FE0_Maria.png/",
    skills: [
      {
        name: "Heal",
        type: "ACT",
        description:
          '[Tap, Flip 2 Bonds] Choose a card in your Retreat Area except "Maria" and add that card to your hand.',
      },
      {
        name: "Maria’s Wish",
        type: "CONT",
        description: 'Allied "Minerva" and "Michalis" gain +10 attack.',
      },
    ],
    supportSkills: [
      {
        name: "Defense Support",
        type: "Miracle Emblem Support",
        description:
          "Until the end of this battle, your opponent’s attacking unit cannot perform a Critical Hit.",
      },
    ],
  },
  {
    name: "Jeorge",
    title: "The Greatest Sniper of Archanea",
    illustrator: "Misei Ito",
    deployCost: 3,
    cardNo: "B01-034HN",
    promoteCost: 2,
    class: "Sniper",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Male Cipher", "Bow"],
    range: 2,
    support: 20,
    quote:
      "Let me lend my strength to your cause, and I'll show you what this Silver Bow was made for.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/90/FE0_Jeorge.png/",
    skills: [
      {
        name: "Peerless Marksman",
        type: "ACT",
        description:
          "[Tap an ally with a Deployment Cost of 2 or less] This turn, Flying units cannot evade this card's attacks.",
      },
      {
        name: "Wingbane",
        type: "CONT",
        description:
          "While this unit is attacking a Flying enemy, this unit gains +30 attack.",
      },
    ],
  },
  {
    name: "Linde",
    title: "The Inheritor of Aura",
    illustrator: "Tetsu Kurosawa",
    deployCost: 3,
    cardNo: "B01-035R",
    promoteCost: 2,
    class: "Sage",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "I-I can fight…I've been entrusted with the sacred tome Aura!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/09/FE0_Linde2.png/",
    skills: [
      {
        name: "Wellspring of Wisdom",
        type: "AUTO",
        description:
          "Once Per Turn [Flip 1 Bond] When a cost 2 or lower ally unit is deployed, you may pay the cost, and if you do: Draw a card.",
      },
      {
        name: "Aura",
        type: "ACT",
        description:
          "Once Per Turn [Flip 1 Bond] This turn, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Linde",
    title: "The Daughter of Pontifex Miloah",
    illustrator: "Tetsu Kurosawa",
    deployCost: 1,
    cardNo: "B01-036N",
    promoteCost: "-",
    class: "Mage",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "Father...your murderer will be brought to justice. I-I must vanquish Gharnef!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/8/86/FE0_Linde.png/",
    skills: [
      {
        name: "Thunder",
        type: "ACT",
        description:
          "Once Per Turn [Flip 1 Bond] This turn, this unit gains +10 attack.",
      },
    ],
    supportSkills: [
      {
        name: "Attack Support",
        type: "Mage's Emblem Support",
        description: "Draw 1 card, then discard 1 card.",
      },
    ],
  },
  {
    name: "Midia",
    title: "The Love-Struck Knight",
    illustrator: "MOMORI",
    deployCost: 3,
    cardNo: "B01-037N",
    promoteCost: 2,
    class: "Paladin",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Cipher Mounted"],
    range: 1,
    support: 10,
    quote: "I have only one wish…that I be reunited with him one last time.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/7e/FE0_Midia.png/",
    skills: [
      {
        name: "Double-edged Love",
        type: "AUTO",
        description:
          "[Tap an ally “Astram”] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +40 attack.",
      },
      {
        name: "Dragonpike",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon unit, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Palla",
    title: "The Eldest Sister of the Three Pegasus Sisters",
    illustrator: "HACCAN",
    deployCost: 3,
    cardNo: "B01-038R",
    promoteCost: 2,
    class: "Falcon Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Come, let's settle this! Triangle Attack!!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/cf/FE0_Palla2.png/",
    skills: [
      {
        name: "Formation Skill Triangle Attack",
        type: "AUTO",
        description:
          "[Tap allied 'Catria' and 'Est'] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +50 attack and this unit's attack cannot be avoided.",
      },
      {
        name: "Sisterly Ties",
        type: "CONT",
        description:
          "If this unit is supported by 'Catria' or 'Est', this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Palla",
    title: "The Pegasus Riding Older Sister Knight",
    illustrator: "Mayo",
    deployCost: 1,
    cardNo: "B01-039N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Nevermind our homeland, our loyalty first is to Minerva.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/a/a6/FE0_Palla.png/",
    skills: [
      {
        name: "Pegasus Sister Trio",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Select a 'Catria' or 'Est' with a Deployment Cost of 2 or less in your Deck and deploy the selected unit. Shuffle your deck afterwards.",
      },
      {
        name: "Attack Support Elysian Emblem",
        type: "Support",
        description:
          "You may choose one ally that is not the attacking unit, and move it.",
      },
    ],
  },
  {
    name: "Catria",
    title: "The Middle Pegasus Sister",
    illustrator: "HACCAN",
    deployCost: 3,
    cardNo: "B01-040R",
    promoteCost: 2,
    class: "Falcon Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "There’s no escape! Triangle Attack!!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/63/FE0_Catria2.png/",
    skills: [
      {
        name: "Formation Skill Triangle Attack",
        type: "AUTO",
        description:
          "[Tap allied 'Palla' and 'Est'] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +50 attack and this unit's attack cannot be avoided.",
      },
      {
        name: "Sisterly Ties",
        type: "CONT",
        description:
          "If this unit is supported by 'Palla' or 'Est', this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Catria",
    title: "The Middle Pegasus Rider",
    illustrator: "Mayo",
    deployCost: 1,
    cardNo: "B01-041N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Together we fly!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/a/a5/FE0_Catria.png/",
    skills: [
      {
        name: "Pegasus Sister Trio",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Select a 'Palla' or 'Est' with a Deployment Cost of 2 or less in your Deck and deploy the selected unit. Shuffle your deck afterwards.",
      },
      {
        name: "Attack Support Elysian Emblem",
        type: "Support",
        description:
          "You may choose one ally that is not the attacking unit, and move it.",
      },
    ],
  },
  {
    name: "Est",
    title: "The Youngest Pegasus Sister",
    illustrator: "HACCAN",
    deployCost: 3,
    cardNo: "B01-042R",
    promoteCost: 2,
    class: "Falcon Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 50,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Let’s go! Triangle Attack!!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/f/fc/FE0_Est2.png/",
    skills: [
      {
        name: "Formation Skill Triangle Attack",
        type: "AUTO",
        description:
          "[Tap allied 'Palla' and 'Catria'] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +50 attack and this unit's attack cannot be avoided.",
      },
      {
        name: "Sisterly Ties",
        type: "CONT",
        description:
          "If this unit is supported by 'Palla' or 'Catria', this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Est",
    title: "The Youngest Pegasus Rider",
    illustrator: "Mayo",
    deployCost: 1,
    cardNo: "B01-043N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "I'll do my best...I'm a Whitewing too after all!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/dc/FE0_Est.png/",
    skills: [
      {
        name: "Pegasus Sister Trio",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Select a 'Palla' or 'Catria' with a Deployment Cost of 2 or less in your Deck and deploy the selected unit. Shuffle your deck afterwards.",
      },
      {
        name: "Attack Support Elysian Emblem",
        type: "Support",
        description:
          "You may choose one ally that is not the attacking unit, and move it.",
      },
    ],
  },
  {
    name: "Astram",
    title: "The Love-struck Hero",
    illustrator: "Sachie",
    deployCost: 3,
    cardNo: "B01-044N",
    promoteCost: 2,
    class: "Hero",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "…I'll give you no quarter.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/df/FE0_Astram.png/",
    skills: [
      {
        name: "Double-edged Love",
        type: "AUTO",
        description:
          "[Tap an ally “Midia”] When this unit attacks, you may pay the cost, and if you do: Until the end of this battle, this unit gains +40 attack.",
      },
      {
        name: "Dragonpike",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon unit, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Xane",
    title: "The Shapeshifter",
    illustrator: "MOMORI",
    deployCost: 3,
    cardNo: "B01-045HN",
    promoteCost: "-",
    class: "Freelancer",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote:
      "I have the power to shapeshift, you see, and I’m not about to waste my considerable talent on those evil coots!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/5f/FE0_Xane.png/",
    skills: [
      {
        name: "Imitate",
        type: "ACT",
        description:
          "[Flip 2 Bonds] Choose another ally. This turn, except for that ally's name and attack power, this unit becomes a copy of that ally.",
      },
    ],
  },
  {
    name: "Tiki",
    title: "The Manakete Princess",
    illustrator: "Fuzichoco",
    deployCost: 5,
    cardNo: "B01-046SR",
    promoteCost: "-",
    class: "Manakete",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 60,
    affinities: ["Red Cipher", "Female Cipher", "Stone", "Cipher Dragon"],
    range: "1-2",
    support: 20,
    quote: "I...I thought that nightmare would never end...",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/1/11/FE0_Tiki2.png/",
    skills: [
      {
        name: "Kind-hearted Dragon Princess",
        type: "CONT",
        description:
          "During your turn, if this unit's support is successful, you may place this unit's support in the Bond Area instead of sending it to your Retreat Area.",
      },
      {
        name: "Ancient Dragon Tribe",
        type: "CONT",
        description:
          "If you have at least 8 cards in your Bond Area, this unit gains +30 attack.",
      },
      {
        name: "Divine Stone",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon unit, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Tiki",
    title: "The Princess of the Divine Dragon Tribe",
    illustrator: "Fuzichoco",
    deployCost: 1,
    cardNo: "B01-047N",
    promoteCost: "-",
    class: "Manakete",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 30,
    affinities: ["Red Cipher", "Female Cipher", "Stone", "Cipher Dragon"],
    range: "1-2",
    support: 20,
    quote: "You don't mind if I call you Mar-mar, do you?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/70/FE0_Tiki4.png/",
    skills: [
      {
        name: "Ancient Dragon Tribe",
        type: "CONT",
        description:
          "If you have at least 4 cards in your Bond Area, this unit gains +30 attack.",
      },
    ],
    supportSkills: [
      {
        name: "Attack Support",
        type: "Manakete Emblem Support",
        description:
          "If the attacking unit is Red, then you may choose a card in your hand and place it in your Bond Area.",
      },
    ],
  },
  {
    name: "Elice",
    title: "The Princess of Altea",
    illustrator: "HMK84",
    deployCost: 2,
    cardNo: "B01-048N",
    promoteCost: "-",
    class: "Cleric",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 40,
    affinities: ["Red Cipher", "Female Cipher", "Staff"],
    range: "-",
    support: 20,
    quote: "Marth… you’ve grown so much.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/51/FE0_Elice.png/",
    skills: [
      {
        name: "Aum Staff",
        type: "ACT",
        description:
          '[Tap This Unit, Flip 1 Bond] Choose a Red unit with a Deployment Cost of 2 or less in your Retreat Area and deploy it. You can only use the "Aum Staff" skill once per game.',
      },
      {
        name: "Elice’s Hope",
        type: "CONT",
        description: 'Allied "Marth" and "Merric" gain +10 attack.',
      },
    ],
  },
  {
    name: "Athena",
    title: "The Myrmidon from Parts Unknown",
    illustrator: "lack",
    deployCost: 2,
    cardNo: "B01-049N",
    promoteCost: "-",
    class: "Myrmidon",
    game: ["Shadow Dragon", "New mystery of the Emblem"],
    attack: 60,
    affinities: ["Red Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "Ve must repay this favor. This is how ve do things in my land.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/92/FE0_Athena.png/",
    skills: [
      {
        name: "Myrmidon’s Debt",
        type: "SPEC",
        description:
          "This card cannot be deployed unless there are 5 or more cards in your Retreat Area.",
      },
      {
        name: "Levin Sword",
        type: "ACT",
        description:
          "[Flip 1 Bond] This unit's range becomes 1-2, gains the Tome affinity and loses -10 attack this turn.",
      },
    ],
  },
  {
    name: "Camus",
    title: "The Sable Order",
    illustrator: "Rika Suzuki",
    deployCost: 5,
    cardNo: "B01-050SR",
    promoteCost: 4,
    class: "Paladin",
    game: [
      "Shadow Dragon and the Blade of Light",
      "Mystery of the Emblem",
      "Shadow Dragon",
      "New mystery of the Emblem",
    ],
    attack: 70,
    affinities: ["Red Cipher", "Male Cipher", "Lance", "Mounted"],
    range: 1,
    support: 10,
    quote:
      "I have lived as a knight, and I intend to die as one. There are no other roads left for me to walk.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/96/FE0_Camus.png/",
    skills: [
      {
        name: "Blessed Lance Gradivus",
        type: "ACT",
        description:
          "[Flip 4 Bonds] Destroy all enemy units with a Deployment Cost of 2 or lower. This turn, this unit's range becomes 1-2, and this unit gains +10 attack for each unit destroyed by this skill.",
      },
    ],
  },
  {
    name: "Chrom",
    title: "The Exalted Prince",
    illustrator: "Senri Kita",
    deployCost: 5,
    cardNo: "B01-051SR",
    promoteCost: 4,
    class: "Great Lord",
    game: ["Awakening"],
    attack: 70,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "Not even fate is stronger than the bonds that hold us together.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/07/FE0_Chrom2.png/",
    skills: [
      {
        name: "Vested Authority",
        type: "ACT",
        description:
          '[Flip 3 Bonds, discard 1 "Chrom" from your hand] Choose any number of enemies, and move them. Until the end of this turn, all allies gain +30 attack.',
      },
      {
        name: "Exalted Falchion",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon, this unit gains +40 attack. (Class Change Skill is only active when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Chrom",
    title: "The Descendant of the Hero King",
    illustrator: "Hisashi Momose",
    deployCost: 2,
    cardNo: "B01-052N",
    promoteCost: "-",
    class: "Lord",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "You say you can handle yourself, I'll gladly have you join us.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/52/FE0_Chrom3.png/",
    skills: [
      {
        name: "Emboldened Prince",
        type: "ACT",
        description: "[Flip 2 Bonds] Choose 1 enemy, and move them.",
      },
    ],
  },
  {
    name: "Chrom",
    title: "The Prince of the Haildom of Ylisse",
    illustrator: "Kaoru Hagiya",
    deployCost: 1,
    cardNo: "B01-053HN",
    promoteCost: "-",
    class: "Lord",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "I'll protect you.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/3/3c/FE0_Chrom.png/",
    skills: [
      {
        name: "Brand of the Exalt",
        type: "CONT",
        description: "This unit gains +10 attack for each Class Changed ally.",
      },
    ],
    supportSkills: [
      {
        name: "Hero Emblem",
        type: "SUPP",
        description:
          "Until the end of this battle, the number of orbs your Blue attacking unit would destroy becomes 2.",
      },
    ],
  },
  {
    name: "Lucina",
    title: "The Future Witness",
    illustrator: "Masaki Hirooka",
    deployCost: 4,
    cardNo: "B01-054SR",
    promoteCost: 3,
    class: "Great Lord",
    game: ["Awakening"],
    attack: 70,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "We can change the future. We must...",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/1/11/FE0_Lucina.png/",
    skills: [
      {
        name: "Defiant of Destiny",
        type: "ACT",
        description:
          'Once Per Turn [Flip 1 Bond, Discard 1 "Lucina" from your hand] Draw 2 cards, then choose 1 card in your hand and place it on top of your deck. If this unit is Class Changed into this card, draw 3 cards instead, then choose 2 cards in your hand and place them in any order on top of your deck.',
      },
      {
        name: "Parallel Falchion",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Lucina",
    title: "The Sacred Descendant",
    illustrator: "Maiponpon / INTELLIGENT SYSTEMS",
    deployCost: 2,
    cardNo: "B01-055N",
    promoteCost: "-",
    class: "Lord",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 20,
    quote:
      "No longer am I alone. Surely darkness cannot overcome us this time...",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d3/FE0_Lucina2.png/",
    skills: [
      {
        name: "Royal Bloodline",
        type: "ACT",
        description:
          'Once Per Turn [Flip 1 Bond] Until the end of this turn, this unit and ally "Chrom" gain +10 Attack. This skill cannot be used unless you have an ally "Chrom".',
      },
    ],
  },
  {
    name: "Lucina",
    title: "The Swordsman Known as Marth",
    illustrator: "Yusuke Kozaki",
    deployCost: 1,
    cardNo: "B01-056HN",
    promoteCost: "-",
    class: "Lord",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "Marth. My name is Marth.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/b8/Lucinacipher.jpg/",
    skills: [
      {
        name: "Name of the Hero King",
        type: "SPEC",
        description: 'Treat this card as if this card\'s name is also "Marth".',
      },
      {
        name: "Parallel Falchion",
        type: "CONT",
        description:
          "While this unit is attacking a Dragon, this unit gains +20 attack.",
      },
    ],
    supportSkills: [
      {
        name: "Hero Emblem",
        type: "SUPP",
        description:
          "Until the end of this battle, the number of orbs your Blue attacking unit would destroy becomes 2.",
      },
    ],
  },
  {
    name: "Robin (Female)",
    title: "The Exalted Strategist",
    illustrator: "BISAI",
    deployCost: 4,
    cardNo: "B01-057R",
    promoteCost: 3,
    class: "Grandmaster",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "Because we have friends that believe in us, we can stand against anyone.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d0/FE0_Avatar2.png/",
    skills: [
      {
        name: "Grandmaster Plan",
        type: "AUTO",
        description:
          "When another ally Class Changes, you may choose 1 enemy and move them.",
      },
      {
        name: "All According to Plan",
        type: "ACT",
        description:
          "[Flip 3 Bonds] If you have less orbs than your opponent, add the top card of your deck to your Orbs. (Class Change Skill can only be used when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Robin (Female)",
    title: "The Amnesia-stricken Tactician",
    illustrator: "BISAI",
    deployCost: 1,
    cardNo: "B01-058N",
    promoteCost: "-",
    class: "Tactician",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "I hope more comes back to me in the days to come…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/67/FE0_Avatar.png/",
    skills: [
      {
        name: "Tactical Talents",
        type: "CONT",
        description:
          "If you have less Orbs than your opponent, this unit gains +10 attack.",
      },
    ],
    supportSkills: [
      {
        name: "Tactical Emblem",
        type: "SUPP",
        description:
          "If your attacking unit is Blue, you may choose 1 enemy besides your opponent’s defending unit, and move them.",
      },
    ],
  },
  {
    name: "Lissa",
    title: "The Princess of Ylisse",
    illustrator: "40hara",
    deployCost: 3,
    cardNo: "B01-059R",
    promoteCost: 2,
    class: "War Cleric",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Female Cipher", "Axe"],
    range: 1,
    support: 10,
    quote: "I…I won?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/e/e0/FE0_Lissa2.png/",
    skills: [
      {
        name: "Maiden Fighter",
        type: "AUTO",
        description:
          "When this unit's attack destroys an enemy, choose 1 card in your Retreat Area with a Deployment Cost of 3 or less except “Lissa”, and add it to your hand. (Class Change Skill can only activate when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Lissa",
    title: "The Sprightly Cleric",
    illustrator: "40hara",
    deployCost: 1,
    cardNo: "B01-060N",
    promoteCost: "-",
    class: "Cleric",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Staff"],
    range: "-",
    support: 20,
    quote: "Don’t forget me!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/bd/FE0_Lissa.png/",
    skills: [
      {
        name: "Heal",
        type: "ACT",
        description:
          '[Tap This Unit, Flip 2 Bonds] Choose 1 card besides "Lissa" from your Retreat Area, and add it to your hand.',
      },
    ],
    supportSkills: [
      {
        name: "Miracle Emblem",
        type: "SUPP",
        description:
          "Until the end of this battle, the attacking unit cannot perform a Critical Hit.",
      },
    ],
  },
  {
    name: "Frederick",
    title: "The Warm-hearted Guard Captain",
    illustrator: "Sachie",
    deployCost: 3,
    cardNo: "B01-061N",
    promoteCost: 2,
    class: "Great Knight",
    game: ["Awakening"],
    attack: 70,
    affinities: ["Blue Cipher", "Male Cipher", "Axe", "Mounted", "Armour"],
    range: 1,
    support: 20,
    quote: "I will remain by Prince Chrom's side.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/c3/FE0_Frederick.png/",
    skills: [
      {
        name: "Battlefield Mentor",
        type: "SPEC",
        description: "This card cannot be placed in the Bond Area.",
      },
    ],
  },
  {
    name: "Virion",
    title: "The Duke of Rosanne",
    illustrator: "Sencha",
    deployCost: 3,
    cardNo: "B01-062HN",
    promoteCost: 2,
    class: "Sniper",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Bow"],
    range: 2,
    support: 20,
    quote: "I have concealed my nobleness behind this secret identity…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/dc/FE0_Virion.png/",
    skills: [
      {
        name: "Expert Marksmanship",
        type: "CONT",
        description:
          "For each other Bow ally, this unit gains +10 attack. (Class Change Skill may only be used if this unit has Class Changed.)",
      },
      {
        name: "Anti-Fliers",
        type: "CONT",
        description:
          "While this unit is attacking a Flying, this unit gains +30 attack.",
      },
    ],
  },
  {
    name: "Virion",
    title: "The Aristocratic Archer",
    illustrator: "Sencha",
    deployCost: 1,
    cardNo: "B01-063N",
    promoteCost: "-",
    class: "Archer",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Male Cipher", "Bow"],
    range: 2,
    support: 20,
    quote: "I will remain a gentleman to the very end.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/4/46/FE0_Virion2.png/",
    skills: [
      {
        name: "Steel Bow",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 1 Bond ] Until the end of this turn, this unit gains +10 attack.",
      },
      {
        name: "Anti-Fliers",
        type: "CONT",
        description:
          "While this unit is attacking a Flying, this unit gains +30 attack.",
      },
    ],
  },
  {
    name: "Sully",
    title: "The Crimson-Eyed Ferocious Bull",
    illustrator: "Yoko Matsurica",
    deployCost: 3,
    cardNo: "B01-064HN",
    promoteCost: 2,
    class: "Paladin",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Mounted"],
    range: 1,
    support: 10,
    quote: "Stay right there, chump. Sully's not done with you yet!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/4/44/FE0_Sully2.png/",
    skills: [
      {
        name: "Aegis",
        type: "CONT",
        description:
          "Enemy Rear Guard units with Bow, Tome, or Dragon Stone affinities cannot attack. (Class Change Skill: This ability does not take effect unless this unit was Class Changed.)",
      },
      {
        name: "Bonds of Crimson and Green",
        type: "CONT",
        description:
          "When this unit is supported by “Stahl”, this unit’s attack is increased by 30.",
      },
    ],
  },
  {
    name: "Sully",
    title: "The Courageous Crimson Knight",
    illustrator: "Yoko Matsurica",
    deployCost: 1,
    cardNo: "B01-065N",
    promoteCost: "-",
    class: "Cavalier",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Mounted"],
    range: 1,
    support: 10,
    quote: "",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/8/8c/FE0_Sully.png/",
    skills: [
      {
        name: "Bonds of Crimson and Green",
        type: "CONT",
        description:
          "When this unit is supported by “Stahl”, this unit’s attack is increased by 30.",
      },
    ],
  },
  {
    name: "Stahl",
    title: "The Green-Eyed Black Panther",
    illustrator: "Ariko",
    deployCost: 3,
    cardNo: "B01-066HN",
    promoteCost: 2,
    class: "Paladin",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Male Cipher", "Sword", "Mounted"],
    range: 1,
    support: 10,
    quote: "For Lady Emmeryn…for Chrom!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/06/FE0_Stahl2.png/",
    skills: [
      {
        name: "Aegis",
        type: "CONT",
        description:
          "Enemy Rear Guard units with Bow, Tome, or Dragon Stone affinities cannot attack. (Class Change Skill: This ability does not take effect unless this unit was Class Changed.)",
      },
      {
        name: "Bonds of Crimson and Green",
        type: "CONT",
        description:
          "When this unit is supported by “Sully”, this unit’s attack is increased by 30.",
      },
    ],
  },
  {
    name: "Stahl",
    title: "The Good-Natured Green Knight",
    illustrator: "Ariko",
    deployCost: 1,
    cardNo: "B01-067N",
    promoteCost: "-",
    class: "Cavalier",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Sword", "Mounted"],
    range: 1,
    support: 10,
    quote: "I was so hungry I had to rush out, unkempt hair and all!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/2/25/FE0_Stahl.png/",
    skills: [
      {
        name: "Bonds of Crimson and Green",
        type: "CONT",
        description:
          "When this unit is supported by “Sully”, this unit’s attack is increased by 30.",
      },
    ],
  },
  {
    name: "Sumia",
    title: "The Gentle Flower of the Shepherds",
    illustrator: "Dokkoi",
    deployCost: 3,
    cardNo: "B01-068R",
    promoteCost: 2,
    class: "Falcon Knight",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "I will be your shield whenever you need protection!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/5c/FE0_Sumia2.png/",
    skills: [
      {
        name: "Rally Pegasus",
        type: "CONT",
        description:
          "Your Flying cards give +10 more Support value while supporting another ally. (Class Change Skill: This skill is inactive unless this unit was Class Changed.)",
      },
      {
        name: "Angelic Flight",
        type: "ACT",
        description:
          "Once Per Turn Move this unit. This skill cannot be used if this card is tapped.",
      },
    ],
  },
  {
    name: "Sumia",
    title: "The Maiden of Flower Fortunes",
    illustrator: "Dokkoi",
    deployCost: 1,
    cardNo: "B01-069N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "He loves me… He loves me not…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d0/FE0_Sumia.png/",
    skills: [
      {
        name: "Winged Deliverer",
        type: "ACT",
        description: "[Tap This Unit] Choose an ally, and move it.",
      },
    ],
  },
  {
    name: "Lon'qu",
    title: "The Stoic Swordsman",
    illustrator: "Clover.K",
    deployCost: 3,
    cardNo: "B01-070R",
    promoteCost: 2,
    class: "Swordmaster",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "Were you unworthy, I would have left long ago.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/e/e2/FE0_Lon%27qu.png/",
    skills: [
      {
        name: "Master of the Blade",
        type: "CONT",
        description:
          "This unit gains +10 attack for every other Sword ally. (Class Change Skill is only active when this unit is Class Changed)",
      },
      {
        name: "Killing Edge",
        type: "ACT",
        description:
          "[Flip 3 Bonds] Until the end of this turn, this unit’s attacks cannot be evaded.",
      },
    ],
  },
  {
    name: "Lon'qu",
    title: "The Gynophobic Swordsman",
    illustrator: "Clover.K",
    deployCost: 1,
    cardNo: "B01-071N",
    promoteCost: "-",
    class: "Myrmidon",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "If those are your orders, I shall obey.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/b/ba/FE0_Lon%27qu2.png/",
    skills: [
      {
        name: "Gynophobia",
        type: "CONT",
        description: "This unit's support fails if supported by a Female card.",
      },
    ],
  },
  {
    name: "Maribelle",
    title: "The Sharp-Tongued Noblewoman",
    illustrator: "Akabane",
    deployCost: 1,
    cardNo: "B01-072N",
    promoteCost: "-",
    class: "Troubadour",
    game: ["Awakening"],
    attack: 20,
    affinities: ["Blue Cipher", "Female Cipher", "Staff", "Mounted"],
    range: "-",
    support: 20,
    quote:
      "Oh, hey yourself, Lissa! I've sprouted 14 gray hairs fretting over you!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/c/cf/FE0_Maribelle.png/",
    skills: [
      {
        name: "Heal",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Choose 1 card besides 'Maribelle' from your Retreat Area, and add it to your hand.",
      },
      {
        name: "Women of Nobility",
        type: "CONT",
        description: "During your turn, your ally 'Lissa' gains +20 attack.",
      },
    ],
  },
  {
    name: "Gaius",
    title: "Sweetest Assassin",
    illustrator: "Yugo Okuma",
    deployCost: 3,
    cardNo: "B01-073SR",
    promoteCost: 2,
    class: "Assassin",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "Sure, I'll take the job, but the reward better be sweet.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/91/FE0_Gaius.png/",
    skills: [
      {
        name: "Lethality",
        type: "ACT",
        description:
          "[Tap This Unit] Reveal the top card of the opponent's deck. If that revealed card's Deployment Cost is 3 or higher, you can Flip 2 Bonds to destroy an enemy.",
      },
      {
        name: "Just Desserts",
        type: "AUTO",
        description:
          "When this unit's 'Lethality' destroys an enemy, draw 1 card. (Class Change Skill is only active when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Gaius",
    title: "The Thief with a Sweet-Tooth",
    illustrator: "Yugo Okuma",
    deployCost: 1,
    cardNo: "B01-074N",
    promoteCost: "-",
    class: "Thief",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "Deal...I'll do the job, and have that bag of candy as payment!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/8/88/FE0_Gaius2.png",
    skills: [
      {
        name: "Locktouch",
        type: "ACT",
        description:
          "[Tap This Unit] Reveal the top card of your opponent’s deck. If that card has a Deployment Cost of 3 or higher, you may Flip 1 Bond to draw 1 card.",
      },
    ],
  },
  {
    name: "Cordelia",
    title: "The Pegasus Knight Paragon",
    illustrator: "YangYang",
    deployCost: 3,
    cardNo: "B01-075SR",
    promoteCost: 2,
    class: "Dark Flier",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote:
      "...I'm sorry, but if you're going to get in Chrom's way, I can't hold back.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/0f/FE0_Cordelia3.png/",
    skills: [
      {
        name: "Galeforce",
        type: "AUTO",
        description:
          "[Once Per Turn] When this unit's attack destroys an enemy, untap this unit.",
      },
      {
        name: "Handmade Javelins",
        type: "ACT",
        description:
          "[Flip 1 Bond] Until the end of this turn, all Flying allies gain the Lance affinity and range 1-2. (Class Change Skill can only be used when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Cordelia",
    title: "The Young Prodigy",
    illustrator: "YangYang",
    deployCost: 1,
    cardNo: "B01-076N",
    promoteCost: "-",
    class: "Pegasus Knight",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Lance", "Flying", "Mounted"],
    range: 1,
    support: 30,
    quote: "Losing is not an option!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/68/FE0_Cordelia.png",
    skills: [
      {
        name: "Winged Deliverer",
        type: "ACT",
        description: "[Tap This Unit] Choose 1 other ally, and move them.",
      },
    ],
  },
  {
    name: "Gregor",
    title: "The Fearless Mercenary",
    illustrator: "Mikihiro Taguchi / Crowd Gate",
    deployCost: 2,
    cardNo: "B01-077N",
    promoteCost: "-",
    class: "Mercenary",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "Oy, you break Gregor's heart! Why you treat like villain?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/0e/FE0_Gregor.png/",
    skills: [
      {
        name: "Gregor and the Young Manakete",
        type: "CONT",
        description:
          "When this unit is destroyed by an enemy attack, place this unit in your Bond Area instead of sending it to the Retreat Area.",
      },
    ],
  },
  {
    name: "Nowi",
    title: "The Young Child of Eternity",
    illustrator: "Pisuke",
    deployCost: 3,
    cardNo: "B01-078R",
    promoteCost: "-",
    class: "Manakete",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Female Cipher", "Stone", "Dragon"],
    range: "1-2",
    support: 20,
    quote: "I believe in everyone, to do their best at this crucial moment!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/a/a3/FE0_Nowi2.png/",
    skills: [
      {
        name: "Immature Dragon",
        type: "AUTO",
        description:
          "At the end of your turn, choose 1 of your Bond cards, and add it to your hand.",
      },
      {
        name: "Longevous Dragon Tribe",
        type: "CONT",
        description:
          "While you have 6 or more bond cards, this unit gains +30 attack.",
      },
    ],
  },
  {
    name: "Nowi",
    title: "The Tomboyish Manakete",
    illustrator: "Pisuke",
    deployCost: 1,
    cardNo: "B01-079N",
    promoteCost: "-",
    class: "Manakete",
    game: ["Awakening"],
    attack: 20,
    affinities: ["Blue Cipher", "Female Cipher", "Stone", "Dragon"],
    range: "1-2",
    support: 20,
    quote:
      "Chrom saved me before. So this time, it's my turn to do the saving.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/7d/FE0_Nowi.png/revision/",
    skills: [
      {
        name: "Longevous Dragon Tribe",
        type: "CONT",
        description:
          "While you have 4 or more bond cards, this unit gains +30 attack.",
      },
      {
        name: "Odd Biorhythm",
        type: "CONT",
        description:
          "While you have an odd number of bond cards, this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Tharja",
    title: "The Mage of Dark Obsessions",
    illustrator: "Homare",
    deployCost: 4,
    cardNo: "B01-080SR",
    promoteCost: 3,
    class: "Sorcerer",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "…Plegia has a grudge against Ylisse… that's one curse that I have no interest in.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/64/FE0_Tharja3.png/",
    skills: [
      {
        name: "Ruin",
        type: "ACT",
        description:
          "Once Per Turn [Flip 3 Bonds, Send 1 'Tharja' from your hand to the Retreat Area] Your opponent chooses 2 cards in their hand, and sends them to the Retreat Area. If this unit has class changed, then your opponent chooses 3 cards in their hand, and sends them to the Retreat Area instead.",
      },
      {
        name: "Forbidden Curse",
        type: "CONT",
        description:
          "While there are no cards in your opponent's hand, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Tharja",
    title: "The Bewitching Plegian Shaman",
    illustrator: "Terumii",
    deployCost: 2,
    cardNo: "B01-081N",
    promoteCost: "-",
    class: "Dark Mage",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "I’ve always been quite good at choosing who to hate on my own…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d5/FE0_Tharja2.png/",
    skills: [
      {
        name: "Flux",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Your opponent chooses 1 card in their hand, and sends it to the Retreat Area.",
      },
    ],
  },
  {
    name: "Tharja",
    title: "The Practitioner of Dark Arts",
    illustrator: "Terumii",
    deployCost: 1,
    cardNo: "B01-082HN",
    promoteCost: "-",
    class: "Dark Mage",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "...You would trust me? ...You’ve never met me...",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/55/FE0_Tharja.png/",
    skills: [
      {
        name: "Hex",
        type: "CONT",
        description:
          "During your turn, if the number of cards in your hand is more than your opponent's hand, this unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Olivia",
    title: "The Demure Dancer",
    illustrator: "Masatsugu Saito",
    deployCost: 2,
    cardNo: "B01-083R",
    promoteCost: "-",
    class: "Dancer",
    game: ["Awakening"],
    attack: 20,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "H-how embarrassing…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/0/05/FE0_Olivia.png/",
    skills: [
      {
        name: "Dance",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 2 Bonds] Choose 1 ally that has attacked this turn, and untap them.",
      },
    ],
  },
  {
    name: "Cherche",
    title: "The Guardian of Rosanne",
    illustrator: "Makai no Jyuumin",
    deployCost: 3,
    cardNo: "B01-084R",
    promoteCost: 2,
    class: "Wyvern Lord",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Female Cipher", "Axe", "Flying", "Dragon"],
    range: 1,
    support: 30,
    quote: "Careful or I might just let Minerva eat you~",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/4/4e/FE0_Cherche2.png/",
    skills: [
      {
        name: "Wyvern’s Screech",
        type: "CONT",
        description:
          "All other Flying allies gain +10 attack. (Class Change Skill is only active when this unit is Class Changed.)",
      },
      {
        name: "Angelic Flight",
        type: "ACT",
        description:
          "Once Per Turn Move this unit. This skill cannot be used if this card is tapped.",
      },
    ],
  },
  {
    name: "Cherche",
    title: "The Wyvern Loving Knight",
    illustrator: "Makai no Jyuumin",
    deployCost: 1,
    cardNo: "B01-085N",
    promoteCost: "-",
    class: "Wyvern Rider",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Axe", "Flying", "Dragon"],
    range: 1,
    support: 30,
    quote: "I'll lend a hand as best as I can too.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/4/43/FE0_Cherche.png/",
    skills: [
      {
        name: "Winged Deliverer",
        type: "ACT",
        description: "[Tap This Unit] Choose 1 other ally, and move them.",
      },
    ],
  },
  {
    name: "Henry",
    title: "The Smiling Sorcerer",
    illustrator: "sime",
    deployCost: 3,
    cardNo: "B01-086HN",
    promoteCost: 2,
    class: "Sorcerer",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "Getting hurt is no fun. I don't really want to hurt you...so I'll make sure you don't feel a thing!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/5f/FE0_Henry.png/",
    skills: [
      {
        name: "Mire",
        type: "AUTO",
        description:
          "Each time another ally class changes, both players discard 1 card.",
      },
      {
        name: "Death Wish",
        type: "ACT",
        description:
          "[Tap This Unit, Flip 1 Bond] Destroy this unit. Your opponent discards 2 cards. (Class Change Skill can only be used when this unit is Class Changed)",
      },
    ],
  },
  {
    name: "Henry",
    title: "The Heartless Shaman",
    illustrator: "sime",
    deployCost: 1,
    cardNo: "B01-087N",
    promoteCost: "-",
    class: "Dark Mage",
    game: ["Awakening"],
    attack: 30,
    affinities: ["Blue Cipher", "Male Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote: "If you don't believe me, then I believe I should kill you.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/f/f6/FE0_Henry2.png",
    skills: [
      {
        name: "Anathema",
        type: "CONT",
        description:
          "While your opponent has 4 or less cards in their hand, this unit gains +10 attack.",
      },
    ],
  },
  {
    name: "Morgan",
    title: "The Boy from Another World",
    illustrator: "Yoko Matsurica",
    deployCost: 2,
    cardNo: "B01-088N",
    promoteCost: "-",
    class: "Tactician",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Tome"],
    range: "1-2",
    support: 20,
    quote:
      "I came from…the future…? That's not possible, humans can't travel across time.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/3/3f/FE0_Morgan.png/",
    skills: [
      {
        name: "Tactician's Lineage",
        type: "AUTO",
        description:
          "[ Flip 2 Bonds ] When this unit is deployed, if you have less orbs than your opponent, if you pay the cost, add the top card of your deck to your Orbs. This skill cannot be used unless you have an ally 'Robin (Female)'.",
      },
    ],
  },
  {
    name: "Gerome",
    title: "The Soaring Jet-Black Wings",
    illustrator: "Kitsunen Kurodan",
    deployCost: 4,
    cardNo: "B01-089HN",
    promoteCost: 3,
    class: "Wyvern Lord",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Male Cipher", "Axe", "Flying", "Dragon"],
    range: "1",
    support: 30,
    quote: "I'm sorry, Minerva. I must ask that you let me ride once more.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/8/86/FE0_Gerome2.png",
    skills: [
      {
        name: "Swordbreaker",
        type: "CONT",
        description:
          "While this unit is battling with a Sword, this unit gains +20 attack.",
      },
      {
        name: "Short Axe",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 1 Bond ] Until the end of this turn, this unit gains +10 attack and range 1-2. (Class Change Skill can only be used when this unit is Class Changed.)",
      },
    ],
  },
  {
    name: "Gerome",
    title: "The Wyvern Rider in the Iron Mask",
    illustrator: "Kitsunen Kurodan",
    deployCost: 2,
    cardNo: "B01-090N",
    promoteCost: "-",
    class: "Wyvern Rider",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Axe", "Flying", "Dragon"],
    range: "1",
    support: 30,
    quote: "We never should have met…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/7/77/FE0_Gerome.png/",
    skills: [
      {
        name: "Twin Dragons in Flight",
        type: "CONT",
        description:
          "During your turn, this unit and ally 'Cherche' gain +10 attack. This skill is only active when you have ally 'Cherche' on the field.",
      },
    ],
  },
  {
    name: "Owain",
    title: "The Chosen Warrior of Hope",
    illustrator: "Rika Suzuki",
    deployCost: 4,
    cardNo: "B01-091SR",
    promoteCost: 3,
    class: "Swordmaster",
    game: ["Awakening"],
    attack: 70,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: "1",
    support: 10,
    quote:
      "Damn, this isn’t Mystletainn…I can’t land the killing blow without it!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/3/39/FE0_Owain.png/",
    skills: [
      {
        name: "Holy Demon Sword: Holy Devil Sword",
        type: "ACT",
        description:
          "[Discard one 'Owain' card from your hand] Until the end of this turn, this unit’s attack is doubled.",
      },
      {
        name: "Demon Sword of Ancient Times: Mystletainn",
        type: "CONT",
        description:
          "This unit cannot use critical attacks, but this unit's attacks destroy 2 orbs as a result of battle. (Class Change Skill: This ability does not take effect unless this unit was Class Changed.)",
      },
    ],
  },
  {
    name: "Owain",
    title: "The Successor of Legends",
    illustrator: "Amanachita",
    deployCost: 2,
    cardNo: "B01-092N",
    promoteCost: "-",
    class: "Myrmidon",
    game: ["Awakening"],
    attack: 50,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: "1",
    support: 10,
    quote:
      "Halt! No one lays a hand on my mother!! My sword hand will slay you where you stand!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/92/FE0_Owain3.png/",
    skills: [
      {
        name: "Blue Blaze Sword: Blue Flame Sword",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 1 Bond ] Until the end of the turn, this unit’s attack is increased by 10.",
      },
    ],
  },
  {
    name: "Owain",
    title: "The One of Sealed Power",
    illustrator: "Rika Suzuki",
    deployCost: 1,
    cardNo: "B01-093HN",
    promoteCost: "-",
    class: "Myrmidon",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: "1",
    support: 10,
    quote: "Ah, Mystletainn! I could feel it beckoning me!",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/5/5f/FE0_Owain2.png/",
    skills: [
      {
        name: "Demon Sword of Ancient Times? Missiletainn",
        type: "ACT",
        description:
          "[ Flip 1 Bond ] Until the end of this turn, this unit’s attack is decreased by 10 and this unit's attacks destroy 2 orbs as a result of battle.",
      },
      {
        name: "Attack Support 'Attack Emblem'",
        type: "SUPP",
        description:
          "Until the end of this battle, your attacking unit gains 20 attack.",
      },
    ],
  },
  {
    name: "Severa",
    title: "The Soul-searching Sellsword",
    illustrator: "46",
    deployCost: 3,
    cardNo: "B01-094HN",
    promoteCost: 2,
    class: "Hero",
    game: ["Awakening"],
    attack: 60,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: "1",
    support: 10,
    quote: "Not the snappiest comeback, but I suppose it gets the job done.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/9/98/FE0_Severa2.png",
    skills: [
      {
        name: "Axebreaker",
        type: "CONT",
        description:
          "While this unit is battling an Axe enemy, this unit gains +20 attack.",
      },
      {
        name: "Feminine Wiles",
        type: "CONT",
        description:
          "While this unit is supported by a Male card, that unit gains +10 support. (Class Change Skill may only be used if this unit has Class Changed.)",
      },
    ],
  },
  {
    name: "Severa",
    title: "The Burier of Attachments",
    illustrator: "46",
    deployCost: 1,
    cardNo: "B01-095N",
    promoteCost: "-",
    class: "Mercenary",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: "1",
    support: 10,
    quote:
      "I wanted to see you… probably. It's not my fault you couldn't be there for me.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/d/d6/FE0_Severa.png/",
    skills: [
      {
        name: "True Feelings",
        type: "CONT",
        description:
          "While you have an ally 'Cordelia', this unit gains +10 attack.",
      },
      {
        name: "Attack Support 'Attack Emblem'",
        type: "SUPP",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Noire",
    title: "The Bipolar Archer",
    illustrator: "40hara",
    deployCost: 2,
    cardNo: "B01-096N",
    promoteCost: "-",
    class: "Archer",
    game: ["Awakening"],
    attack: 40,
    affinities: ["Blue Cipher", "Female Cipher", "Bow"],
    range: "1-2",
    support: 10,
    quote: "I'm not going to kill anyone! No one… not ever…",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/60/FE0_Noire.png/",
    skills: [
      {
        name: "On-Target Shot",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 1 Bond ] Until the end of this turn, this unit’s attack is increased by 10 and gains +10 attack for each enemy unit you defeat.",
      },
      {
        name: "Range +1",
        type: "CONT",
        description: "This unit's attack range is increased by 1.",
      },
    ],
  },
  {
    name: "Inigo",
    title: "The Man of Flower's Fragrance",
    illustrator: "Sachiko Wada",
    deployCost: 3,
    cardNo: "B01-097R",
    promoteCost: 2,
    class: "Hero",
    attack: 60,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "If there be a damsel in distress, then I, will do my best…?",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/3/3f/FE0_Inigo2.png/",
    skills: [
      {
        name: "Sol",
        type: "AUTO",
        description:
          "When this unit's attack destroys an enemy, until the end of your opponent’s next turn, this unit gains +20 attack.",
      },
      {
        name: "Destined to Meet",
        type: "CONT",
        description:
          "While this unit is being supported by a Female card, this unit gains +10 attack. (Class Change Skill is only active when this unit is Class Changed.)",
      },
    ],
  },
  {
    name: "Inigo",
    title: "The Cultivator of Smiles",
    illustrator: "Sachiko Wada",
    deployCost: 1,
    cardNo: "B01-098N",
    promoteCost: "-",
    class: "Mercenary",
    attack: 40,
    affinities: ["Blue Cipher", "Male Cipher", "Sword"],
    range: 1,
    support: 20,
    quote: "Fear not, my beautiful flower.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/a/ae/FE0_Inigo.png/",
    skills: [
      {
        name: "Ladies’ Man",
        type: "AUTO",
        description:
          "When this unit attacks, if you have at least one Female ally, until the end of this turn, this unit gains +10 attack.",
      },
      {
        name: "Attack Emblem",
        type: "SUPP",
        description:
          "Until the end of this battle, your attacking unit gains +20 attack.",
      },
    ],
  },
  {
    name: "Tiki",
    title: "The Sentimental Divine Dragon",
    illustrator: "cuboon",
    deployCost: 2,
    cardNo: "B01-099HN",
    promoteCost: "-",
    class: "Manakete",
    attack: 30,
    affinities: ["Blue Cipher", "Female Cipher", "Stone Cipher", "Dragon"],
    range: "1-2",
    support: 20,
    quote: "He is gone now. Lost during my endless sleep...",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/6/65/FE0_Tiki.png/",
    skills: [
      {
        name: "Voice of Naga",
        type: "ACT",
        description:
          "Once Per Turn [ Flip 2 Bonds ] Choose 1 card in your hand, and place it in your Bond Area.",
      },
      {
        name: "Longevous Dragon Tribe",
        type: "CONT",
        description:
          "While you have 5 or more Bond cards, this card gains +30 attack.",
      },
    ],
  },
  {
    name: "Anna",
    title: "The Merchant of Secrets",
    illustrator: "cuboon",
    deployCost: 3,
    cardNo: "B01-100HN",
    promoteCost: 2,
    class: "Trickster",
    attack: 20,
    affinities: ["Blue Cipher", "Female Cipher", "Sword"],
    range: 1,
    support: 10,
    quote: "I assure you, I'm well worth the investment.",
    image:
      "https://static.wikia.nocookie.net/fireemblem/images/a/a7/FE0_Anna.png/",
    skills: [
      {
        name: "Anna Sisters",
        type: "CONT",
        description: "For each ally 'Anna' deployed, this gets +10 attack.",
      },
      {
        name: "Innumerous Annas",
        type: "SPEC",
        description:
          "Even if there is already an ally 'Anna' in play, you can deploy this card. You may still play this card if there are 2 or more 'Anna' in play as well.",
      },
      {
        name: "Support Unit",
        type: "CONT",
        description: "'Anna' cards can be a Support Unit of this card.",
      },
    ],
  },
];

module.exports = cards;
