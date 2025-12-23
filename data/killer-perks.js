// List of Killer perks:
const killerPerks = [
  {
    id: "aNursesCalling",
    name: "A Nurse's Calling",
    image: "images/perks/killer/aNursesCalling.png",
    owner: "",
    description: ``
  },
  {
    id: "agitation",
    name: "Agitation",
    image: "images/perks/killer/agitation.png",
    owner: "",
    description: ``
  },
  {
    id: "alienInstinct",
    name: "Alien Instinct",
    image: "images/perks/killer/alienInstinct.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "allShakingThunder",
    name: "All-Shaking Thunder",
    image: "images/perks/killer/allShakingThunder.png",
    owner: "",
    description: ``
  },
  {
    id: "awakenedAwareness",
    name: "Awakened Awareness",
    image: "images/perks/killer/awakenedAwareness.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "bamboozle",
    name: "Bamboozle",
    image: "images/perks/killer/bamboozle.png",
    owner: "",
    description: ``
  },
  {
    id: "barbecueAndChilli",
    name: "Barbecue & Chilli",
    image: "images/perks/killer/barbecueAndChilli.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "batteriesIncluded",
    name: "Batteries Included",
    image: "images/perks/killer/batteriesIncluded.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "beastOfPrey",
    name: "Beast of Prey",
    image: "images/perks/killer/beastOfPrey.png",
    owner: "",
    description: ``
  },
  {
    id: "bitterMurmur",
    name: "Bitter Murmur",
    image: "images/perks/killer/bitterMurmur.png",
    owner: "",
    description: ``
  },
  {
    id: "bloodEcho",
    name: "Blood Echo",
    image: "images/perks/killer/bloodEcho.png",
    owner: "",
    description: ``
  },
  {
    id: "bloodWarden",
    name: "Blood Warden",
    image: "images/perks/killer/bloodWarden.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    image: "images/perks/killer/bloodhound.png",
    owner: "",
    description: ``
  },
  {
    id: "brutalStrength",
    name: "Brutal Strength",
    image: "images/perks/killer/brutalStrength.png",
    owner: "",
    description: ``
  },
  {
    id: "callOfBrine",
    name: "Call of Brine",
    image: "images/perks/killer/callOfBrine.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "corruptIntervention",
    name: "Corrupt Intervention",
    image: "images/perks/killer/corruptIntervention.png",
    owner: "",
    description: ``
  },
  {
    id: "coulrophobia",
    name: "Coulrophobia",
    image: "images/perks/killer/coulrophobia.png",
    owner: "",
    description: ``
  },
  {
    id: "coupDeGrace",
    name: "Coup de Grâce",
    image: "images/perks/killer/coupDeGrace.png",
    owner: "",
    description: ``
  },
  {
    id: "cruelLimits",
    name: "Cruel Limits",
    image: "images/perks/killer/cruelLimits.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "darkArrogance",
    name: "Dark Arrogance",
    image: "images/perks/killer/darkArrogance.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "darkDevotion",
    name: "Dark Devotion",
    image: "images/perks/killer/darkDevotion.png",
    owner: "",
    description: ``
  },
  {
    id: "darknessRevealed",
    name: "Darkness Revealed",
    image: "images/perks/killer/darknessRevealed.png",
    owner: "",
    description: ``
  },
  {
    id: "deadMansSwitch",
    name: "Dead Man's Switch",
    image: "images/perks/killer/deadMansSwitch.png",
    owner: "",
    description: ``
  },
  {
    id: "deadlock",
    name: "Deadlock",
    image: "images/perks/killer/deadlock.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Hellraiser"
  },
  {
    id: "deathbound",
    name: "Deathbound",
    image: "images/perks/killer/deathbound.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "deerstalker",
    name: "Deerstalker",
    image: "images/perks/killer/deerstalker.png",
    owner: "",
    description: ``
  },
  {
    id: "discordance",
    name: "Discordance",
    image: "images/perks/killer/discordance.png",
    owner: "",
    description: ``
  },
  {
    id: "dissolution",
    name: "Dissolution",
    image: "images/perks/killer/dissolution.png",
    owner: "",
    description: ``
  },
  {
    id: "distressing",
    name: "Distressing",
    image: "images/perks/killer/distressing.png",
    owner: "",
    description: ``
  },
  {
    id: "dominance",
    name: "Dominance",
    image: "images/perks/killer/dominance.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "dragonsGrip",
    name: "Dragon's Grip",
    image: "images/perks/killer/dragonsGrip.png",
    owner: "",
    description: ``
  },
  {
    id: "dyingLight",
    name: "Dying Light",
    image: "images/perks/killer/dyingLight.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "enduring",
    name: "Enduring",
    image: "images/perks/killer/enduring.png",
    owner: "",
    description: ``
  },
  {
    id: "eruption",
    name: "Eruption",
    image: "images/perks/killer/eruption.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "fireUp",
    name: "Fire Up",
    image: "images/perks/killer/fireUp.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "forcedHesitation",
    name: "Forced Hesitation",
    image: "images/perks/killer/forcedHesitation.png",
    owner: "",
    description: ``
  },
  {
    id: "forcedPenance",
    name: "Forced Penance",
    image: "images/perks/killer/forcedPenance.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "foreverEntwined",
    name: "Forever Entwined",
    image: "images/perks/killer/foreverEntwined.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "franklinsDemise",
    name: "Franklin's Demise",
    image: "images/perks/killer/franklinsDemise.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "friendsTilTheEnd",
    name: "Friends 'til the End",
    image: "images/perks/killer/friendsTilTheEnd.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "furtiveChase",
    name: "Furtive Chase",
    image: "images/perks/killer/furtiveChase.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "gameAfoot",
    name: "Game Afoot",
    image: "images/perks/killer/gameAfoot.png",
    owner: "",
    description: ``
  },
  {
    id: "gearhead",
    name: "Gearhead",
    image: "images/perks/killer/gearhead.png",
    owner: "",
    description: ``
  },
  {
    id: "geneticLimits",
    name: "Genetic Limits",
    image: "images/perks/killer/geneticLimits.png",
    owner: "",
    description: ``
  },
  {
    id: "grimEmbrace",
    name: "Grim Embrace",
    image: "images/perks/killer/grimEmbrace.png",
    owner: "",
    description: ``
  },
  {
    id: "haywire",
    name: "Haywire",
    image: "images/perks/killer/haywire.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "helpWanted",
    name: "Help Wanted",
    image: "images/perks/killer/helpWanted.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "hexBloodFavour",
    name: "Hex: Blood Favour",
    image: "images/perks/killer/hexBloodFavour.png",
    owner: "",
    description: ``
  },
  {
    id: "hexCrowdControl",
    name: "Hex: Crowd Control",
    image: "images/perks/killer/hexCrowdControl.png",
    owner: "",
    description: ``
  },
  {
    id: "hexDevourHope",
    name: "Hex: Devour Hope",
    image: "images/perks/killer/hexDevourHope.png",
    owner: "",
    description: ``
  },
  {
    id: "hexFaceTheDarkness",
    name: "Hex: Face the Darkness",
    image: "images/perks/killer/hexFaceTheDarkness.png",
    owner: "",
    description: ``
  },
  {
    id: "hexHauntedGround",
    name: "Hex: Haunted Ground",
    image: "images/perks/killer/hexHauntedGround.png",
    owner: "",
    description: ``
  },
  {
    id: "hexHuntressLullaby",
    name: "Hex: Huntress Lullaby",
    image: "images/perks/killer/hexHuntressLullaby.png",
    owner: "",
    description: ``
  },
  {
    id: "hexNoOneEscapesDeath",
    name: "Hex: No One Escapes Death",
    image: "images/perks/killer/hexNoOneEscapesDeath.png",
    owner: "",
    description: ``
  },
  {
    id: "hexNothingButMisery",
    name: "Hex: Nothing but Misery",
    image: "images/perks/killer/hexNothingButMisery.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "hexOvertureOfDoom",
    name: "Hex: Overture of Doom",
    image: "images/perks/killer/hexOvertureOfDoom.png",
    owner: "",
    description: ``
  },
  {
    id: "hexPentimento",
    name: "Hex: Pentimento",
    image: "images/perks/killer/hexPentimento.png",
    owner: "",
    description: ``
  },
  {
    id: "hexPlaything",
    name: "Hex: Plaything",
    image: "images/perks/killer/hexPlaything.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Hellraiser"
  },
  {
    id: "hexRetribution",
    name: "Hex: Retribution",
    image: "images/perks/killer/hexRetribution.png",
    owner: "",
    description: ``
  },
  {
    id: "hexRuin",
    name: "Hex: Ruin",
    image: "images/perks/killer/hexRuin.png",
    owner: "",
    description: ``
  },
  {
    id: "hexTheThirdSeal",
    name: "Hex: The Third Seal",
    image: "images/perks/killer/hexTheThirdSeal.png",
    owner: "",
    description: ``
  },
  {
    id: "hexThrillOfTheHunt",
    name: "Hex: Thrill of the Hunt",
    image: "images/perks/killer/hexThrillOfTheHunt.png",
    owner: "",
    description: ``
  },
  {
    id: "hexTwoCanPlay",
    name: "Hex: Two Can Play",
    image: "images/perks/killer/hexTwoCanPlay.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "hexUndying",
    name: "Hex: Undying",
    image: "images/perks/killer/hexUndying.png",
    owner: "",
    description: ``
  },
  {
    id: "hexWretchedFate",
    name: "Hex: Wretched Fate",
    image: "images/perks/killer/hexWretchedFate.png",
    owner: "",
    description: ``
  },
  {
    id: "hoarder",
    name: "Hoarder",
    image: "images/perks/killer/hoarder.png",
    owner: "",
    description: ``
  },
  {
    id: "hubris",
    name: "Hubris",
    image: "images/perks/killer/hubris.png",
    owner: "",
    description: ``
  },
  {
    id: "humanGreed",
    name: "Human Greed",
    image: "images/perks/killer/humanGreed.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "hysteria",
    name: "Hysteria",
    image: "images/perks/killer/hysteria.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "imAllEars",
    name: "I'm All Ears",
    image: "images/perks/killer/imAllEars.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "infectiousFright",
    name: "Infectious Fright",
    image: "images/perks/killer/infectiousFright.png",
    owner: "",
    description: ``
  },
  {
    id: "insidious",
    name: "Insidious",
    image: "images/perks/killer/insidious.png",
    owner: "",
    description: ``
  },
  {
    id: "ironGrasp",
    name: "Iron Grasp",
    image: "images/perks/killer/ironGrasp.png",
    owner: "",
    description: ``
  },
  {
    id: "ironMaiden",
    name: "Iron Maiden",
    image: "images/perks/killer/ironMaiden.png",
    owner: "",
    description: ``
  },
  {
    id: "knockOut",
    name: "Knock Out",
    image: "images/perks/killer/knockOut.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "languidTouch",
    name: "Languid Touch",
    image: "images/perks/killer/languidTouch.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "lethalPursuer",
    name: "Lethal Pursuer",
    image: "images/perks/killer/lethalPursuer.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "leverage",
    name: "Leverage",
    image: "images/perks/killer/leverage.png",
    owner: "",
    description: ``
  },
  {
    id: "lightborn",
    name: "Lightborn",
    image: "images/perks/killer/lightborn.png",
    owner: "",
    description: ``
  },
  {
    id: "machineLearning",
    name: "Machine Learning",
    image: "images/perks/killer/machineLearning.png",
    owner: "",
    description: ``
  },
  {
    id: "madGrit",
    name: "Mad Grit",
    image: "images/perks/killer/madGrit.png",
    owner: "",
    description: ``
  },
  {
    id: "makeYourChoice",
    name: "Make Your Choice",
    image: "images/perks/killer/makeYourChoice.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "mercilessStorm",
    name: "Merciless Storm",
    image: "images/perks/killer/mercilessStorm.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "mindbreaker",
    name: "Mindbreaker",
    image: "images/perks/killer/mindbreaker.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "monitorAndAbuse",
    name: "Monitor & Abuse",
    image: "images/perks/killer/monitorAndAbuse.png",
    owner: "",
    description: ``
  },
  {
    id: "nemesis",
    name: "Nemesis",
    image: "images/perks/killer/nemesis.png",
    owner: "",
    description: ``
  },
  {
    id: "noQuarter",
    name: "No Quarter",
    image: "images/perks/killer/noQuarter.png",
    owner: "",
    description: ``
  },
  {
    id: "noWayOut",
    name: "No Way Out",
    image: "images/perks/killer/noWayOut.png",
    owner: "",
    description: ``
  },
  {
    id: "noneAreFree",
    name: "None Are Free",
    image: "images/perks/killer/noneAreFree.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "nowhereToHide",
    name: "Nowhere to Hide",
    image: "images/perks/killer/nowhereToHide.png",
    owner: "",
    description: ``
  },
  {
    id: "oppression",
    name: "Oppression",
    image: "images/perks/killer/oppression.png",
    owner: "",
    description: ``
  },
  {
    id: "overcharge",
    name: "Overcharge",
    image: "images/perks/killer/overcharge.png",
    owner: "",
    description: ``
  },
  {
    id: "overwhelmingPresence",
    name: "Overwhelming Presence",
    image: "images/perks/killer/overwhelmingPresence.png",
    owner: "",
    description: ``
  },
  {
    id: "phantomFear",
    name: "Phantom Fear",
    image: "images/perks/killer/phantomFear.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "playWithYourFood",
    name: "Play with Your Food",
    image: "images/perks/killer/playWithYourFood.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "popGoesTheWeasel",
    name: "Pop Goes the Weasel",
    image: "images/perks/killer/popGoesTheWeasel.png",
    owner: "",
    description: ``
  },
  {
    id: "predator",
    name: "Predator",
    image: "images/perks/killer/predator.png",
    owner: "",
    description: ``
  },
  {
    id: "rancor",
    name: "Rancor",
    image: "images/perks/killer/rancor.png",
    owner: "",
    description: ``
  },
  {
    id: "rapidBrutality",
    name: "Rapid Brutality",
    image: "images/perks/killer/rapidBrutality.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "ravenous",
    name: "Ravenous",
    image: "images/perks/killer/ravenous.png",
    owner: "",
    description: ``
  },
  {
    id: "rememberMe",
    name: "Remember Me",
    image: "images/perks/killer/rememberMe.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "saveTheBestForLast",
    name: "Save the Best for Last",
    image: "images/perks/killer/saveTheBestForLast.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "scourgeHookFloodsOfRage",
    name: "Scourge Hook: Floods of Rage",
    image: "images/perks/killer/scourgeHookFloodsOfRage.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "scourgeHookGiftOfPain",
    name: "Scourge Hook: Gift of Pain",
    image: "images/perks/killer/scourgeHookGiftOfPain.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Hellraiser"
  },
  {
    id: "scourgeHookHangmansTrick",
    name: "Scourge Hook: Hangman's Trick",
    image: "images/perks/killer/scourgeHookHangmansTrick.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "scourgeHookJaggedCompass",
    name: "Scourge Hook: Jagged Compass",
    image: "images/perks/killer/scourgeHookJaggedCompass.png",
    owner: "",
    description: ``
  },
  {
    id: "scourgeHookMonstrousShrine",
    name: "Scourge Hook: Monstrous Shrine",
    image: "images/perks/killer/scourgeHookMonstrousShrine.png",
    owner: "",
    description: ``
  },
  {
    id: "scourgeHookPainResonance",
    name: "Scourge Hook: Pain Resonance",
    image: "images/perks/killer/scourgeHookPainResonance.png",
    owner: "",
    description: ``
  },
  {
    id: "septicTouch",
    name: "Septic Touch",
    image: "images/perks/killer/septicTouch.png",
    owner: "",
    description: ``
  },
  {
    id: "shadowborn",
    name: "Shadowborn",
    image: "images/perks/killer/shadowborn.png",
    owner: "",
    description: ``
  },
  {
    id: "shatteredHope",
    name: "Shattered Hope",
    image: "images/perks/killer/shatteredHope.png",
    owner: "",
    description: ``
  },
  {
    id: "sloppyButcher",
    name: "Sloppy Butcher",
    image: "images/perks/killer/sloppyButcher.png",
    owner: "",
    description: ``
  },
  {
    id: "spiesFromTheShadows",
    name: "Spies from the Shadows",
    image: "images/perks/killer/spiesFromTheShadows.png",
    owner: "",
    description: ``
  },
  {
    id: "spiritFury",
    name: "Spirit Fury",
    image: "images/perks/killer/spiritFury.png",
    owner: "",
    description: ``
  },
  {
    id: "starstruck",
    name: "Starstruck",
    image: "images/perks/killer/starstruck.png",
    owner: "",
    description: ``
  },
  {
    id: "stridor",
    name: "Stridor",
    image: "images/perks/killer/stridor.png",
    owner: "",
    description: ``
  },
  {
    id: "superiorAnatomy",
    name: "Superior Anatomy",
    image: "images/perks/killer/superiorAnatomy.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "surge",
    name: "Surge",
    image: "images/perks/killer/surge.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "surveillance",
    name: "Surveillance",
    image: "images/perks/killer/surveillance.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "thwack",
    name: "THWACK!",
    image: "images/perks/killer/thwack.png",
    owner: "",
    description: ``
  },
  {
    id: "terminus",
    name: "Terminus",
    image: "images/perks/killer/terminus.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "territorialImperative",
    name: "Territorial Imperative",
    image: "images/perks/killer/territorialImperative.png",
    owner: "",
    description: ``
  },
  {
    id: "thanatophobia",
    name: "Thanatophobia",
    image: "images/perks/killer/thanatophobia.png",
    owner: "",
    description: ``
  },
  {
    id: "thrillingTremors",
    name: "Thrilling Tremors",
    image: "images/perks/killer/thrillingTremors.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "tinkerer",
    name: "Tinkerer",
    image: "images/perks/killer/tinkerer.png",
    owner: "",
    description: ``
  },
  {
    id: "trailOfTorment",
    name: "Trail of Torment",
    image: "images/perks/killer/trailOfTorment.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "ultimateWeapon",
    name: "Ultimate Weapon",
    image: "images/perks/killer/ultimateWeapon.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "unbound",
    name: "Unbound",
    image: "images/perks/killer/unbound.png",
    owner: "",
    description: ``
  },
  {
    id: "undone",
    name: "Undone",
    image: "images/perks/killer/undone.png",
    owner: "",
    description: ``
  },
  {
    id: "unforeseen",
    name: "Unforeseen",
    image: "images/perks/killer/unforeseen.png",
    owner: "",
    description: ``
  },
  {
    id: "unnervingPresence",
    name: "Unnerving Presence",
    image: "images/perks/killer/unnervingPresence.png",
    owner: "",
    description: ``
  },
  {
    id: "unrelenting",
    name: "Unrelenting",
    image: "images/perks/killer/unrelenting.png",
    owner: "",
    description: ``
  },
  {
    id: "wanderingEye",
    name: "Wandering Eye",
    image: "images/perks/killer/wanderingEye.png",
    owner: "",
    description: ``
  },
  {
    id: "weaveAttunement",
    name: "Weave Attunement",
    image: "images/perks/killer/weaveAttunement.png",
    owner: "",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "whispers",
    name: "Whispers",
    image: "images/perks/killer/whispers.png",
    owner: "",
    description: ``
  },
  {
    id: "zanshinTactics",
    name: "Zanshin Tactics",
    image: "images/perks/killer/zanshinTactics.png",
    owner: "",
    description: ``
  }
];