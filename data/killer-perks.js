// List of Killer perks:
const killerPerks = [
  {
    id: "aNursesCalling",
    name: "A Nurse's Calling",
    image: "images/perks/killer/aNursesCalling.png",
    owner: "The Nurse",
    description: ``
  },
  {
    id: "agitation",
    name: "Agitation",
    image: "images/perks/killer/agitation.png",
    owner: "The Trapper",
    description: ``
  },
  {
    id: "alienInstinct",
    name: "Alien Instinct",
    image: "images/perks/killer/alienInstinct.png",
    owner: "The Xenomorph",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "allShakingThunder",
    name: "All-Shaking Thunder",
    image: "images/perks/killer/allShakingThunder.png",
    owner: "The Houndmaster",
    description: ``
  },
  {
    id: "awakenedAwareness",
    name: "Awakened Awareness",
    image: "images/perks/killer/awakenedAwareness.png",
    owner: "The Mastermind",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "bamboozle",
    name: "Bamboozle",
    image: "images/perks/killer/bamboozle.png",
    owner: "The Clown",
    description: ``
  },
  {
    id: "barbecueAndChilli",
    name: "Barbecue & Chilli",
    image: "images/perks/killer/barbecueAndChilli.png",
    owner: "The Cannibal",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "batteriesIncluded",
    name: "Batteries Included",
    image: "images/perks/killer/batteriesIncluded.png",
    owner: "The Good Guy",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "beastOfPrey",
    name: "Beast of Prey",
    image: "images/perks/killer/beastOfPrey.png",
    owner: "The Huntress",
    description: ``
  },
  {
    id: "bitterMurmur",
    name: "Bitter Murmur",
    image: "images/perks/killer/bitterMurmur.png",
    description: ``
  },
  {
    id: "bloodEcho",
    name: "Blood Echo",
    image: "images/perks/killer/bloodEcho.png",
    owner: "The Oni",
    description: ``
  },
  {
    id: "bloodWarden",
    name: "Blood Warden",
    image: "images/perks/killer/bloodWarden.png",
    owner: "The Nightmare",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    image: "images/perks/killer/bloodhound.png",
    owner: "The Wraith",
    description: ``
  },
  {
    id: "brutalStrength",
    name: "Brutal Strength",
    image: "images/perks/killer/brutalStrength.png",
    owner: "The Trapper",
    description: ``
  },
  {
    id: "callOfBrine",
    name: "Call of Brine",
    image: "images/perks/killer/callOfBrine.png",
    owner: "The Onryō",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "corruptIntervention",
    name: "Corrupt Intervention",
    image: "images/perks/killer/corruptIntervention.png",
    owner: "The Plague",
    description: ``
  },
  {
    id: "coulrophobia",
    name: "Coulrophobia",
    image: "images/perks/killer/coulrophobia.png",
    owner: "The Clown",
    description: ``
  },
  {
    id: "coupDeGrace",
    name: "Coup de Grâce",
    image: "images/perks/killer/coupDeGrace.png",
    owner: "The Twins",
    description: ``
  },
  {
    id: "cruelLimits",
    name: "Cruel Limits",
    image: "images/perks/killer/cruelLimits.png",
    owner: "The Demogorgon",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "darkArrogance",
    name: "Dark Arrogance",
    image: "images/perks/killer/darkArrogance.png",
    owner: "The Lich",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "darkDevotion",
    name: "Dark Devotion",
    image: "images/perks/killer/darkDevotion.png",
    owner: "The Plague",
    description: ``
  },
  {
    id: "darknessRevealed",
    name: "Darkness Revealed",
    image: "images/perks/killer/darknessRevealed.png",
    owner: "The Dredge",
    description: ``
  },
  {
    id: "deadMansSwitch",
    name: "Dead Man's Switch",
    image: "images/perks/killer/deadMansSwitch.png",
    owner: "The Deathslinger",
    description: ``
  },
  {
    id: "deadlock",
    name: "Deadlock",
    image: "images/perks/killer/deadlock.png",
    owner: "The Cenobite",
    description: ``,
    licensed: true,
    license: "Hellraiser",
    variants: [
      {
        id: "noHoldsBarred",
        name: "No Holds Barred",
        image: "images/perks/killer/noHoldsBarred.png",
        licensed: false
      }
    ]
  },
  {
    id: "deathbound",
    name: "Deathbound",
    image: "images/perks/killer/deathbound.png",
    owner: "The Executioner",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "deerstalker",
    name: "Deerstalker",
    image: "images/perks/killer/deerstalker.png",
    description: ``
  },
  {
    id: "discordance",
    name: "Discordance",
    image: "images/perks/killer/discordance.png",
    owner: "The Legion",
    description: ``
  },
  {
    id: "dissolution",
    name: "Dissolution",
    image: "images/perks/killer/dissolution.png",
    owner: "The Dredge",
    description: ``
  },
  {
    id: "distressing",
    name: "Distressing",
    image: "images/perks/killer/distressing.png",
    description: ``
  },
  {
    id: "dominance",
    name: "Dominance",
    image: "images/perks/killer/dominance.png",
    owner: "The Dark Lord",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "dragonsGrip",
    name: "Dragon's Grip",
    image: "images/perks/killer/dragonsGrip.png",
    owner: "The Blight",
    description: ``
  },
  {
    id: "dyingLight",
    name: "Dying Light",
    image: "images/perks/killer/dyingLight.png",
    owner: "The Shape",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "enduring",
    name: "Enduring",
    image: "images/perks/killer/enduring.png",
    owner: "The Hillbilly",
    description: ``
  },
  {
    id: "eruption",
    name: "Eruption",
    image: "images/perks/killer/eruption.png",
    owner: "The Nemesis",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "fireUp",
    name: "Fire Up",
    image: "images/perks/killer/fireUp.png",
    owner: "The Nightmare",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "forcedHesitation",
    name: "Forced Hesitation",
    image: "images/perks/killer/forcedHesitation.png",
    owner: "The Singularity",
    description: ``
  },
  {
    id: "forcedPenance",
    name: "Forced Penance",
    image: "images/perks/killer/forcedPenance.png",
    owner: "The Executioner",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "foreverEntwined",
    name: "Forever Entwined",
    image: "images/perks/killer/foreverEntwined.png",
    owner: "The Ghoul",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "franklinsDemise",
    name: "Franklin's Demise",
    image: "images/perks/killer/franklinsDemise.png",
    owner: "The Cannibal",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "friendsTilTheEnd",
    name: "Friends 'til the End",
    image: "images/perks/killer/friendsTilTheEnd.png",
    owner: "The Good Guy",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "furtiveChase",
    name: "Furtive Chase",
    image: "images/perks/killer/furtiveChase.png",
    owner: "The Ghost Face",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "gameAfoot",
    name: "Game Afoot",
    image: "images/perks/killer/gameAfoot.png",
    owner: "The Skull Merchant",
    description: ``
  },
  {
    id: "gearhead",
    name: "Gearhead",
    image: "images/perks/killer/gearhead.png",
    owner: "The Deathslinger",
    description: ``
  },
  {
    id: "geneticLimits",
    name: "Genetic Limits",
    image: "images/perks/killer/geneticLimits.png",
    owner: "The Singularity",
    description: ``
  },
  {
    id: "grimEmbrace",
    name: "Grim Embrace",
    image: "images/perks/killer/grimEmbrace.png",
    owner: "The Artist",
    description: ``
  },
  {
    id: "haywire",
    name: "Haywire",
    image: "images/perks/killer/haywire.png",
    owner: "The Animatronic",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "helpWanted",
    name: "Help Wanted",
    image: "images/perks/killer/helpWanted.png",
    owner: "The Animatronic",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "hexBloodFavour",
    name: "Hex: Blood Favour",
    image: "images/perks/killer/hexBloodFavour.png",
    owner: "The Blight",
    description: ``
  },
  {
    id: "hexCrowdControl",
    name: "Hex: Crowd Control",
    image: "images/perks/killer/hexCrowdControl.png",
    owner: "The Trickster",
    description: ``
  },
  {
    id: "hexDevourHope",
    name: "Hex: Devour Hope",
    image: "images/perks/killer/hexDevourHope.png",
    owner: "The Hag",
    description: ``
  },
  {
    id: "hexFaceTheDarkness",
    name: "Hex: Face the Darkness",
    image: "images/perks/killer/hexFaceTheDarkness.png",
    owner: "The Knight",
    description: ``
  },
  {
    id: "hexHauntedGround",
    name: "Hex: Haunted Ground",
    image: "images/perks/killer/hexHauntedGround.png",
    owner: "The Spirit",
    description: ``
  },
  {
    id: "hexHuntressLullaby",
    name: "Hex: Huntress Lullaby",
    image: "images/perks/killer/hexHuntressLullaby.png",
    owner: "The Huntress",
    description: ``
  },
  {
    id: "hexNoOneEscapesDeath",
    name: "Hex: No One Escapes Death",
    image: "images/perks/killer/hexNoOneEscapesDeath.png",
    description: ``
  },
  {
    id: "hexNothingButMisery",
    name: "Hex: Nothing but Misery",
    image: "images/perks/killer/hexNothingButMisery.png",
    owner: "The Ghoul",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "hexOvertureOfDoom",
    name: "Hex: Overture of Doom",
    image: "images/perks/killer/hexOvertureOfDoom.png",
    owner: "The Krasue",
    description: ``
  },
  {
    id: "hexPentimento",
    name: "Hex: Pentimento",
    image: "images/perks/killer/hexPentimento.png",
    owner: "The Artist",
    description: ``
  },
  {
    id: "hexPlaything",
    name: "Hex: Plaything",
    image: "images/perks/killer/hexPlaything.png",
    owner: "The Cenobite",
    description: ``,
    licensed: true,
    license: "Hellraiser",
    variants: [
      {
        id: "hexFortunesFool",
        name: "Hex: Fortune's Fool",
        image: "images/perks/killer/hexFortunesFool.png",
        licensed: false
      }
    ]
  },
  {
    id: "hexRetribution",
    name: "Hex: Retribution",
    image: "images/perks/killer/hexRetribution.png",
    owner: "The Deathslinger",
    description: ``
  },
  {
    id: "hexRuin",
    name: "Hex: Ruin",
    image: "images/perks/killer/hexRuin.png",
    owner: "The Hag",
    description: ``
  },
  {
    id: "hexTheThirdSeal",
    name: "Hex: The Third Seal",
    image: "images/perks/killer/hexTheThirdSeal.png",
    owner: "The Hag",
    description: ``
  },
  {
    id: "hexThrillOfTheHunt",
    name: "Hex: Thrill of the Hunt",
    image: "images/perks/killer/hexThrillOfTheHunt.png",
    description: ``
  },
  {
    id: "hexTwoCanPlay",
    name: "Hex: Two Can Play",
    image: "images/perks/killer/hexTwoCanPlay.png",
    owner: "The Good Guy",
    description: ``,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "hexUndying",
    name: "Hex: Undying",
    image: "images/perks/killer/hexUndying.png",
    owner: "The Blight",
    description: ``
  },
  {
    id: "hexWretchedFate",
    name: "Hex: Wretched Fate",
    image: "images/perks/killer/hexWretchedFate.png",
    owner: "The Dark Lord",
    description: ``
  },
  {
    id: "hoarder",
    name: "Hoarder",
    image: "images/perks/killer/hoarder.png",
    owner: "The Twins",
    description: ``
  },
  {
    id: "hubris",
    name: "Hubris",
    image: "images/perks/killer/hubris.png",
    owner: "The Knight",
    description: ``
  },
  {
    id: "humanGreed",
    name: "Human Greed",
    image: "images/perks/killer/humanGreed.png",
    owner: "The Dark Lord",
    description: ``,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "hysteria",
    name: "Hysteria",
    image: "images/perks/killer/hysteria.png",
    owner: "The Nemesis",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "imAllEars",
    name: "I'm All Ears",
    image: "images/perks/killer/imAllEars.png",
    owner: "The Ghost Face",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "infectiousFright",
    name: "Infectious Fright",
    image: "images/perks/killer/infectiousFright.png",
    owner: "The Plague",
    description: ``
  },
  {
    id: "insidious",
    name: "Insidious",
    image: "images/perks/killer/insidious.png",
    description: ``
  },
  {
    id: "ironGrasp",
    name: "Iron Grasp",
    image: "images/perks/killer/ironGrasp.png",
    description: ``
  },
  {
    id: "ironMaiden",
    name: "Iron Maiden",
    image: "images/perks/killer/ironMaiden.png",
    owner: "The Legion",
    description: ``
  },
  {
    id: "knockOut",
    name: "Knock Out",
    image: "images/perks/killer/knockOut.png",
    owner: "The Cannibal",
    description: ``,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "languidTouch",
    name: "Languid Touch",
    image: "images/perks/killer/languidTouch.png",
    owner: "The Lich",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "lethalPursuer",
    name: "Lethal Pursuer",
    image: "images/perks/killer/lethalPursuer.png",
    owner: "The Nemesis",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "leverage",
    name: "Leverage",
    image: "images/perks/killer/leverage.png",
    owner: "The Skull Merchant",
    description: ``
  },
  {
    id: "lightborn",
    name: "Lightborn",
    image: "images/perks/killer/lightborn.png",
    owner: "The Hillbilly",
    description: ``
  },
  {
    id: "machineLearning",
    name: "Machine Learning",
    image: "images/perks/killer/machineLearning.png",
    owner: "The Singularity",
    description: ``
  },
  {
    id: "madGrit",
    name: "Mad Grit",
    image: "images/perks/killer/madGrit.png",
    owner: "The Legion",
    description: ``
  },
  {
    id: "makeYourChoice",
    name: "Make Your Choice",
    image: "images/perks/killer/makeYourChoice.png",
    owner: "The Pig",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "mercilessStorm",
    name: "Merciless Storm",
    image: "images/perks/killer/mercilessStorm.png",
    owner: "The Onryō",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "mindbreaker",
    name: "Mindbreaker",
    image: "images/perks/killer/mindbreaker.png",
    owner: "The Demogorgon",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "monitorAndAbuse",
    name: "Monitor & Abuse",
    image: "images/perks/killer/monitorAndAbuse.png",
    owner: "The Doctor",
    description: ``
  },
  {
    id: "nemesis",
    name: "Nemesis",
    image: "images/perks/killer/nemesis.png",
    owner: "The Oni",
    description: ``
  },
  {
    id: "noQuarter",
    name: "No Quarter",
    image: "images/perks/killer/noQuarter.png",
    owner: "The Houndmaster",
    description: ``
  },
  {
    id: "noWayOut",
    name: "No Way Out",
    image: "images/perks/killer/noWayOut.png",
    owner: "The Trickster",
    description: ``
  },
  {
    id: "noneAreFree",
    name: "None Are Free",
    image: "images/perks/killer/noneAreFree.png",
    owner: "The Ghoul",
    description: ``,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "nowhereToHide",
    name: "Nowhere to Hide",
    image: "images/perks/killer/nowhereToHide.png",
    owner: "The Knight",
    description: ``
  },
  {
    id: "oppression",
    name: "Oppression",
    image: "images/perks/killer/oppression.png",
    owner: "The Twins",
    description: ``
  },
  {
    id: "overcharge",
    name: "Overcharge",
    image: "images/perks/killer/overcharge.png",
    owner: "The Doctor",
    description: ``
  },
  {
    id: "overwhelmingPresence",
    name: "Overwhelming Presence",
    image: "images/perks/killer/overwhelmingPresence.png",
    owner: "The Doctor",
    description: ``
  },
  {
    id: "phantomFear",
    name: "Phantom Fear",
    image: "images/perks/killer/phantomFear.png",
    owner: "The Animatronic",
    description: ``,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "playWithYourFood",
    name: "Play with Your Food",
    image: "images/perks/killer/playWithYourFood.png",
    owner: "The Shape",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "popGoesTheWeasel",
    name: "Pop Goes the Weasel",
    image: "images/perks/killer/popGoesTheWeasel.png",
    owner: "The Clown",
    description: ``
  },
  {
    id: "predator",
    name: "Predator",
    image: "images/perks/killer/predator.png",
    owner: "The Wraith",
    description: ``
  },
  {
    id: "rancor",
    name: "Rancor",
    image: "images/perks/killer/rancor.png",
    owner: "The Spirit",
    description: ``
  },
  {
    id: "rapidBrutality",
    name: "Rapid Brutality",
    image: "images/perks/killer/rapidBrutality.png",
    owner: "The Xenomorph",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "ravenous",
    name: "Ravenous",
    image: "images/perks/killer/ravenous.png",
    owner: "The Krasue",
    description: ``
  },
  {
    id: "rememberMe",
    name: "Remember Me",
    image: "images/perks/killer/rememberMe.png",
    owner: "The Nightmare",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "saveTheBestForLast",
    name: "Save the Best for Last",
    image: "images/perks/killer/saveTheBestForLast.png",
    owner: "The Shape",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "scourgeHookFloodsOfRage",
    name: "Scourge Hook: Floods of Rage",
    image: "images/perks/killer/scourgeHookFloodsOfRage.png",
    owner: "The Onryō",
    description: ``,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "scourgeHookGiftOfPain",
    name: "Scourge Hook: Gift of Pain",
    image: "images/perks/killer/scourgeHookGiftOfPain.png",
    owner: "The Cenobite",
    description: ``,
    licensed: true,
    license: "Hellraiser",
    variants: [
      {
        id: "scourgeHookWeepingWounds",
        name: "Scourge Hook: Weeping Wounds",
        image: "images/perks/killer/scourgeHookWeepingWounds.png",
        licensed: false
      }
    ]
  },
  {
    id: "scourgeHookHangmansTrick",
    name: "Scourge Hook: Hangman's Trick",
    image: "images/perks/killer/scourgeHookHangmansTrick.png",
    owner: "The Pig",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "scourgeHookJaggedCompass",
    name: "Scourge Hook: Jagged Compass",
    image: "images/perks/killer/scourgeHookJaggedCompass.png",
    owner: "The Houndmaster",
    description: ``
  },
  {
    id: "scourgeHookMonstrousShrine",
    name: "Scourge Hook: Monstrous Shrine",
    image: "images/perks/killer/scourgeHookMonstrousShrine.png",
    description: ``
  },
  {
    id: "scourgeHookPainResonance",
    name: "Scourge Hook: Pain Resonance",
    image: "images/perks/killer/scourgeHookPainResonance.png",
    owner: "The Artist",
    description: ``
  },
  {
    id: "septicTouch",
    name: "Septic Touch",
    image: "images/perks/killer/septicTouch.png",
    owner: "The Dredge",
    description: ``
  },
  {
    id: "shadowborn",
    name: "Shadowborn",
    image: "images/perks/killer/shadowborn.png",
    owner: "The Wraith",
    description: ``
  },
  {
    id: "shatteredHope",
    name: "Shattered Hope",
    image: "images/perks/killer/shatteredHope.png",
    description: ``
  },
  {
    id: "sloppyButcher",
    name: "Sloppy Butcher",
    image: "images/perks/killer/sloppyButcher.png",
    description: ``
  },
  {
    id: "spiesFromTheShadows",
    name: "Spies from the Shadows",
    image: "images/perks/killer/spiesFromTheShadows.png",
    description: ``
  },
  {
    id: "spiritFury",
    name: "Spirit Fury",
    image: "images/perks/killer/spiritFury.png",
    owner: "The Spirit",
    description: ``
  },
  {
    id: "starstruck",
    name: "Starstruck",
    image: "images/perks/killer/starstruck.png",
    owner: "The Trickster",
    description: ``
  },
  {
    id: "stridor",
    name: "Stridor",
    image: "images/perks/killer/stridor.png",
    owner: "The Nurse",
    description: ``
  },
  {
    id: "superiorAnatomy",
    name: "Superior Anatomy",
    image: "images/perks/killer/superiorAnatomy.png",
    owner: "The Mastermind",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "surge",
    name: "Surge",
    image: "images/perks/killer/surge.png",
    owner: "The Demogorgon",
    description: ``,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "surveillance",
    name: "Surveillance",
    image: "images/perks/killer/surveillance.png",
    owner: "The Pig",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "thwack",
    name: "THWACK!",
    image: "images/perks/killer/thwack.png",
    owner: "The Skull Merchant",
    description: ``
  },
  {
    id: "terminus",
    name: "Terminus",
    image: "images/perks/killer/terminus.png",
    owner: "The Mastermind",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "territorialImperative",
    name: "Territorial Imperative",
    image: "images/perks/killer/territorialImperative.png",
    owner: "The Huntress",
    description: ``
  },
  {
    id: "thanatophobia",
    name: "Thanatophobia",
    image: "images/perks/killer/thanatophobia.png",
    owner: "The Nurse",
    description: ``
  },
  {
    id: "thrillingTremors",
    name: "Thrilling Tremors",
    image: "images/perks/killer/thrillingTremors.png",
    owner: "The Ghost Face",
    description: ``,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "tinkerer",
    name: "Tinkerer",
    image: "images/perks/killer/tinkerer.png",
    owner: "The Hillbilly",
    description: ``
  },
  {
    id: "trailOfTorment",
    name: "Trail of Torment",
    image: "images/perks/killer/trailOfTorment.png",
    owner: "The Executioner",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "ultimateWeapon",
    name: "Ultimate Weapon",
    image: "images/perks/killer/ultimateWeapon.png",
    owner: "The Xenomorph",
    description: ``,
    licensed: true,
    license: "Alien"
  },
  {
    id: "unbound",
    name: "Unbound",
    image: "images/perks/killer/unbound.png",
    owner: "The Unknown",
    description: ``
  },
  {
    id: "undone",
    name: "Undone",
    image: "images/perks/killer/undone.png",
    owner: "The Unknown",
    description: ``
  },
  {
    id: "unforeseen",
    name: "Unforeseen",
    image: "images/perks/killer/unforeseen.png",
    owner: "The Unknown",
    description: ``
  },
  {
    id: "unnervingPresence",
    name: "Unnerving Presence",
    image: "images/perks/killer/unnervingPresence.png",
    owner: "The Trapper",
    description: ``
  },
  {
    id: "unrelenting",
    name: "Unrelenting",
    image: "images/perks/killer/unrelenting.png",
    description: ``
  },
  {
    id: "wanderingEye",
    name: "Wandering Eye",
    image: "images/perks/killer/wanderingEye.png",
    owner: "The Krasue",
    description: ``
  },
  {
    id: "weaveAttunement",
    name: "Weave Attunement",
    image: "images/perks/killer/weaveAttunement.png",
    owner: "The Lich",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "whispers",
    name: "Whispers",
    image: "images/perks/killer/whispers.png",
    description: ``
  },
  {
    id: "zanshinTactics",
    name: "Zanshin Tactics",
    image: "images/perks/killer/zanshinTactics.png",
    owner: "The Oni",
    description: ``
  }
];