// List of Killers (Legendary skins are treated as separate characters)
const killers = [
  {
    id: "theTrapper",
    name: "The Trapper",
    image: "images/killers/theTrapper.png",
    chapter: "Base Game",
    bio: "The Trapper is an area-control Killer, able to apply pressure across the Map by placing deadly Bear Traps for Survivors to step into. His personal Perks, Unnerving Presence, Brutal Strength, and Agitation, allow him to chase and carry Survivors more effectively. He is focused on physical attributes and making use of his strength and the Survivors' fear.",
    legendary: false
  },
  {
    id: "theKrampus",
    name: "The Krampus",
    image: "images/killers/theKrampus.png",
    chapter: "Legendary Outfit for The Trapper",
    bio: "In Eastern Alpine regions located in central Europe, folklore warns of Krampus, an anthropomorphic horned figure resembling a goat, who accompanies Saint Nicolas on the night of the 5th of December. Both figures visit children, but whereas Saint Nicolas rewards well-behaved children with treats, Krampus punishes the misbehaved children by flogging them with birch rods. In some folk tales, The Krampus would trap and kidnap naughty children, holding them in the basket or sack upon his back.",
    legendary: true
  },
  {
    id: "naughtyBear",
    name: "Naughty Bear",
    image: "images/killers/naughtyBear.png",
    chapter: "Legendary Outfit for The Trapper",
    bio: "Naughty Bear is a tattered teddy bear that is seen as the scapegoat for all so-called Teddies on Perfection Island, a island inhabited by living teddy bears. While he usually does not mind his predicament, he snaps after the other Teddies fail to invite him to Daddles' big birthday party and laugh him away after he tries to deliver Daddles a present. Seeking retribution, Naughty begins to hunt down and kill every other teddy bear on Perfection Island, always nudged to do his misdeeds by the voice of a cheerful narrator. Naughty would also not be invited to Paradise Island when the other Teddies went on vacation. Naughty once again sought retribution and went to Paradise Island to enact his revenge on the other teddy bears.",
    legendary: true
  },
  {
    id: "theWraith",
    name: "The Wraith",
    image: "images/killers/theWraith.png",
    chapter: "Base Game",
    bio: "The Wraith is a stealth Killer, able to cloak and uncloak at the ringing of his Wailing Bell. His personal Perks, Predator, Bloodhound, and Shadowborn, give him extra abilities to track and locate Survivors, making him a very efficient Hunter. He focuses on tracking and hunting Survivors, making it easier to catch and kill them.",
    legendary: false
  },
  {
    id: "theHillbilly",
    name: "The Hillbilly",
    image: "images/killers/theHillbilly.png",
    chapter: "Base Game",
    bio: "The Hillbilly is a high-mobility Killer, able to cover large distances in a short amount of time and instantly down Survivors using his Chainsaw. His personal Perks, Enduring, Lightborn, and Tinkerer, allow him to enhance his Power and make him harder to lose during chases. He is about persistence and resilience. This will make it harder for Survivors to foil him.",
    legendary: false
  },
  {
    id: "theNurse",
    name: "The Nurse",
    image: "images/killers/theNurse.png",
    chapter: "CHAPTER 1: The Last Breath Chapter",
    bio: "The Nurse is a warping Killer, able to blink through obstacles and quickly close gaps with her Power. Her personal Perks, Stridor, Thanatophobia, and A Nurse's Calling, allow her to decrease Survivor abilities and track them when they are injured. She is focused on spotting and tracking, making it harder for Survivors to hide.",
    legendary: false
  },
  {
    id: "theShape",
    name: "The Shape",
    image: "images/killers/theShape.png",
    chapter: "CHAPTER 2: The HALLOWEEN® Chapter",
    bio: "The Shape is a haunting Killer who stalks Survivors to feed his power. His personal Perks, Save the Best for Last, Play with Your Food, and Dying Light, select one Survivor to become his Obsession and will trigger deadly effects based on their status.",
    legendary: false,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "theHag",
    name: "The Hag",
    image: "images/killers/theHag.png",
    chapter: "CHAPTER 3: Of Flesh and Mud",
    bio: "The Hag is a cursed Killer, able to place Phantasm Traps and then teleport to them upon activation, using her Power. Her personal Perks, Hex: The Third Seal, Hex: Ruin, and Hex: Devour Hope, apply crippling penalties to Survivors as long as the associated Totem remains uncleansed. Her Perks revolve around Hex Totems. They are focused on cursing the Survivors and sapping their abilities. The curse lasts until the Survivors manage to track the Hex Totem down and cleanse it.",
    legendary: false
  },
  {
    id: "theDoctor",
    name: "The Doctor",
    image: "images/killers/theDoctor.png",
    chapter: "CHAPTER 4: Spark of Madness",
    bio: "The Doctor is a madness-inducing Killer, able to use his Power - Carter's Spark, incapacitating Survivors and causing them to hallucinate and scream in terror, revealing their position. His personal Perks, Overwhelming Presence, Monitor & Abuse, and Overcharge, encourage chases, impact Survivors' ability to repair effectively and make him harder to detect when not in a Chase. His Perks are about hindering and creating problems for the Survivors. The sheer stature of The Doctor infuses fear and terror in those around him.",
    legendary: false
  },
  {
    id: "theLookSee",
    name: "The Look-See",
    image: "images/killers/theLookSee.png",
    chapter: "Legendary Outfit for The Doctor",
    bio: `The Look-See is an evil entity who haunts those unable to let go of their grief. After leaving a cryptic note with the words: "IF YOU YOURSELF CANNOT RELEASE THEN IT WILL COME TO TAKE A PIECE." as a warning of its imminent appearance, The Look-See murders its victim and takes a body part symbolic of the reason for the victim's grief.`,
    legendary: true,
    licensed: true,
    license: "Crypt TV"
  },
  {
    id: "pharaohEddie",
    name: "Pharaoh Eddie",
    image: "images/killers/pharaohEddie.png",
    chapter: "Legendary Outfit for The Doctor",
    bio: "In a golden age long erased from maps and memory, Pharaoh Eddie ruled over a sun-drenched empire with an iron will and divine mandate. Beloved by few but feared by all, his laws were absolute, his enemies erased, and his tomb built as a monument to eternity. That eternity was broken when the Black Plague tore through time itself. Called back into the realm of the living by the imbalance of death without judgment, Pharaoh Eddie considers this invasion of the undead a challenge to his eternal rule. He is no mere corpse, he is law incarnate, risen not by magic, but by purpose.",
    legendary: true,
    licensed: true,
    license: "Iron Maiden"
  },
  {
    id: "theHuntress",
    name: "The Huntress",
    image: "images/killers/theHuntress.png",
    chapter: "CHAPTER 5: A Lullaby for the Dark",
    bio: "The Huntress is a ranged Killer, able to throw Hunting Hatchets at Survivors to injure them from a distance. Her personal Perks, Beast of Prey, Territorial Imperative, and Hex: Huntress Lullaby, allow her to apply pressure through better Map awareness and enhanced chasing abilities. Her Perks revolve around the hunt of the prey, to track and find so that she can get close enough to make the kill.",
    legendary: false
  },
  {
    id: "theMordeo",
    name: "The Mordeo",
    image: "images/killers/theMordeo.png",
    chapter: "Legendary Outfit for The Huntress",
    bio: `The Mordeo is one of several demons serving "The Mordeo Queen". A Mordeo is created whenever a human entering its territory in the woodlands engages in cannibalism, similar to how a "Wendigo" is created.`,
    legendary: true,
    licensed: true,
    license: "Crypt TV"
  },
  {
    id: "theBabaYaga",
    name: "The Baba Yaga",
    image: "images/killers/theBabaYaga.png",
    chapter: "Legendary Outfit for The Huntress",
    bio: "In Slavic folklore, The Baba Yaga is often described as a hag-like old woman, or a trio of sisters. She is said to live in a hut with stilt-like chicken legs, which runs through the forest while spinning. She is said to travel using a giant mortar and pestle, while using a broom to remove all traces of her presence. In other stories, she rides a sentient oven standing on chicken legs. Attached to said oven is a heavy chain, that she will throw at unfortunate victims wandering into her swamp and then proceed to drag them into the muddy soil, riding the oven like a horse.",
    legendary: true
  },
  {
    id: "theWereElk",
    name: "The Were-Elk",
    image: "images/killers/theWereElk.png",
    chapter: "Legendary Outfit for The Huntress",
    bio: "The injured traveler found refuge in a small village, warming himself by the fire of a modest tavern. Shaking in fear, he told the locals about his encounter with a creature lurking in the nearby woods. It walked like a human but had the face of a terrifying beast with antlers, a true abomination of nature.",
    legendary: true
  },
  {
    id: "theCannibal",
    name: "The Cannibal",
    image: "images/killers/theCannibal.png",
    chapter: "CHAPTER 5.5: LEATHERFACE™",
    bio: "The Cannibal is a chainsaw-wielding Killer, able to trigger a deadly frenzy using his Power, immediately downing anyone in its path. His personal Perks, Knock Out, Barbecue & Chilli, and Franklin's Demise, make Survivors easier to locate while robbing them of their tools and abilities.",
    legendary: false,
    licensed: true,
    license: "Leatherface"
  },
  {
    id: "theNightmare",
    name: "The Nightmare",
    image: "images/killers/theNightmare.png",
    chapter: "CHAPTER 6: A Nightmare on Elm Street™",
    bio: "The Nightmare is a nightmare Killer, passively pulling Survivors into his Dream World where Survivors are vulnerable to his Dream Abilities. His Dream Projection ability allows him to quickly appear across the map and put pressure onto Survivors. His personal Perks, Fire Up, Remember Me, and Blood Warden improve his abilities over time and make him stronger as the trial reaches its climax. His Perks revolve around stopping Survivors from fleeing. They will make surviving a real pain for all, and managing to escape the Hunting Ground won't be easy.",
    legendary: false,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "thePig",
    name: "The Pig",
    image: "images/killers/thePig.png",
    chapter: "CHAPTER 7: The SAW™ Chapter",
    bio: "The Pig is a tormenting Killer, able to crouch into stealth mode, then ambush Survivors from a short distance. She can also apply Reverse Bear Traps to downed Survivors, forcing them to remove it before the timer runs out, triggering an instant death. Her personal Perks, Scourge Hook: Hangman's Trick, Surveillance, and Make Your Choice, give her more Map control and expose altruistic Survivors.",
    legendary: false,
    licensed: true,
    license: "SAW"
  },
  {
    id: "theClown",
    name: "The Clown",
    image: "images/killers/theClown.png",
    chapter: "CHAPTER 8: Curtain Call",
    bio: "The Clown is a strategic Killer, able to control and corral Survivors by throwing bottles of The Afterpiece Tonic to create clouds of noxious gas that cover large areas for a short amount of time. Survivors intoxicated by the gas are inflicted with impaired vision and movement speed, and give away their location by coughing loudly. His personal Perks, Bamboozle, Coulrophobia, and Pop Goes the Weasel, provide vaulting advantages and negatively impact Survivor Healing speed and Repairs. He has a surprising agility for a man of his size, along with a terrifying appearance and the ability to sabotage the Survivor's efforts.",
    legendary: false
  },
  {
    id: "theSpirit",
    name: "The Spirit",
    image: "images/killers/theSpirit.png",
    chapter: "CHAPTER 9: Shattered Bloodline",
    bio: "The Spirit is a phase-walking Killer, able to catch Survivors off-guard with her traversal Power, Yamaoka's Haunting. Her Power allows her to teleport from one place to another without being seen. Her personal Perks, Spirit Fury, Hex: Haunted Ground, and Rancor, give her tools to observe and bait Survivors, and deal with obstacles directly in her path. She inherited incredible fury from her ancestors. The wrath that flows through her veins is her legacy. The terrible pain she suffered set it off. Swift and lethal, The Spirit exacts her revenge endlessly.",
    legendary: false
  },
  {
    id: "theWarHammerTitan",
    name: "The War Hammer Titan",
    image: "images/killers/theWarHammerTitan.png",
    chapter: "Legendary Outfit for The Spirit",
    bio: "Lara Tybur is a member of the Tybur family, the highest authority in the nation of Marley and the most respected Eldians of what is otherwise a persecuted ethnic minority, and the wielder of the War Hammer Titan, which was a closely guarded secret.",
    legendary: true,
    licensed: true,
    license: "Attack on Titan"
  },
  {
    id: "tomieKawakami",
    name: "Tomie Kawakami",
    image: "images/killers/tomieKawakami.png",
    chapter: "Legendary Outfit for The Spirit",
    bio: "Tomie Kawakami is a young woman frequently described as almost impossibly beautiful by those she meets. Tomie is a manipulative, hedonistic, and extremely selfish woman, seducing men to do her bidding.",
    legendary: true,
    licensed: true,
    license: "Junji Ito"
  },
  {
    id: "theLegion",
    name: "The Legion",
    image: "images/killers/theLegion.png",
    chapter: "CHAPTER 10: Darkness Among Us",
    bio: "The Legion are a band of merciless Killers, able to rush down helpless Survivors with their power, Feral Frenzy. Attacks made during their frenzy inflict lingering internal damage, downing any Survivors that are not quick enough to react. Their personal Perks, Discordance, Mad Grit, and Iron Maiden, give them the ability to locate their prey and attack savagely while transporting Survivors to the Hook.",
    legendary: false
  },
  {
    id: "hunk",
    name: "HUNK",
    image: "images/killers/hunk.png",
    chapter: "Legendary Outfit for The Legion",
    bio: "HUNK is the code name of a mercenary working for the Umbrella Corporation. Next to nothing is known about the agent, although he is extremely reputable. HUNK is known to have successfully carried out multiple missions, and always coming out as the only survivor, earning him the nickname of the Grim Reaper.",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "thePlague",
    name: "The Plague",
    image: "images/killers/thePlague.png",
    chapter: "CHAPTER 11: Demise of the Faithful",
    bio: "The Plague is a devout Killer, able to infect Survivors from a short distance using her Power, Vile Purge. Survivors inflicted by this contamination risk becoming injured or broken, unless they find a way to cure themselves in a Pool of Devotion. Her personal Perks, Corrupt Intervention, Infectious Fright, and Dark Devotion, give her the ability to hinder Survivor objectives, while simultaneously confusing and frightening those within her presence.",
    legendary: false
  },
  {
    id: "theGhostFace",
    name: "The Ghost Face",
    image: "images/killers/theGhostFace.png",
    chapter: "CHAPTER 12: Ghost Face®",
    bio: "The Ghost Face is a creepy Killer, able to stalk his victims and sneak up silently using his Power, Night Shroud. Affected Survivors will find themselves vulnerable and oblivious to his presence and must use all of their perception and awareness to protect themselves from his approach. His personal Perks, I'm All Ears, Thrilling Tremors, and Furtive Chase, give him the ability to locate Survivors, defend Generators, and make his Chases unpredictable.",
    legendary: false,
    licensed: true,
    license: "Ghost Face"
  },
  {
    id: "theDemogorgon",
    name: "The Demogorgon",
    image: "images/killers/theDemogorgon.png",
    chapter: "CHAPTER 13: Stranger Things",
    bio: "The Demogorgon is an unidentified Killer, able to open multiple Portals and traverse between them to cover large distances. Using its Power, Of the Abyss, it can detect any Survivors within a close proximity to the Portals then unleash a leaping attack to inflict damage from a distance. Its personal Perks, Surge, Mindbreaker, and Cruel Limits, impact the environment close to Generators and affect nearby Survivors in unexpected ways.",
    legendary: false,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "theOni",
    name: "The Oni",
    image: "images/killers/theOni.png",
    chapter: "CHAPTER 14: Cursed Legacy",
    bio: "The Oni is a monstrous Killer, able to absorb the blood energy of his injured foes, and then use that energy to transform into a brutal demon. Using his power, Yamaoka's Wrath, he can rush down Survivors at great speed and deal deadly strikes with his Kanabō. His personal Perks, Zanshin Tactics, Blood Echo, and Nemesis, provide navigational information, punish injured Survivors, and gain advantages over those that interfere.",
    legendary: false
  },
  {
    id: "theMinotaur",
    name: "The Minotaur",
    image: "images/killers/theMinotaur.png",
    chapter: "Legendary Outfit for The Oni",
    bio: "When King Minos of Crete prayed for a sign of Poseidon's favour, he was sent a snow-white bull. He was told to sacrifice it but due to the bull's beauty, he instead kept it. In anger, Poseidon cursed Minos' wife, Pasiphae, to fall in love with the bull and bear a child; the monstrous minotaur. The Minotaur is half man, half bull and dwelt at the centre of Daedalus' Labyrinth, which he had built for King Minos. After winning a war against Athens, King Minos demanded seven boys and seven girls every few years as tribute, which he sent to be fed to The Minotaur.",
    legendary: true
  },
  {
    id: "theArmouredTitan",
    name: "The Armoured Titan",
    image: "images/killers/theArmouredTitan.png",
    chapter: "Legendary Outfit for The Oni",
    bio: `Reiner was born and raised in the large nation of Marley, where he was oppressed and persecuted for being a Eldian, an ethnic group capable of turning into mindless, monstrous beings known as "Titans." He later joined the military's Warriors unit with other Eldians, and inherited the Armoured Titan. Reiner was tasked alongside three other Warriors with infiltrating the island of Paradis, where the majority of Eldians resided. After breaking into one of the walls protecting the island, they disguised themselves as survivors of the attack and joined the Eldians' military, hoping to seek out information about the "Founding Titan".`,
    legendary: true,
    licensed: true,
    license: "Attack on Titan"
  },
  {
    id: "samuraiEddie",
    name: "Samurai Eddie",
    image: "images/killers/samuraiEddie.png",
    chapter: "Legendary Outfit for The Oni",
    bio: "Born of a distant eastern land where discipline and blade are one, Samurai Eddie once served a warlord who valued silence, strength, and absolute loyalty. When betrayal shattered his clan and desecrated his shrine, Eddie wandered into self-imposed exile, taking a vow of vengeance and solitude. Now, years later, the zombie apocalypse has spread across continents, and Samurai Eddie has returned, not to serve, but to punish. With armor bound in blood-oath sigils and a blade that hums with ancestral fury, he walks a path of precise violence. Zombies do not respect code or honor. But they will learn to respect his sword. One cut at a time.",
    legendary: true,
    licensed: true,
    license: "Iron Maiden"
  },
  {
    id: "murderousGrizzly",
    name: "Murderous Grizzly",
    image: "images/killers/murderousGrizzly.png",
    chapter: "Legendary Outfit for The Oni",
    bio: "Murderous Grizzly is a savage manifestation of unchecked fury, born from a twisted legend where beast and bloodlust become one. It embodies raw, animalistic violence; hunting without reason, striking without mercy, and leaving only carnage in its wake.",
    legendary: true,
    licensed: true,
    license: "Nyaight of the Living Cat"
  },
  {
    id: "theDeathslinger",
    name: "The Deathslinger",
    image: "images/killers/theDeathslinger.png",
    chapter: "CHAPTER 15: Chains of Hate",
    bio: "The Deathslinger is a vengeful Killer, able to spear Survivors from a distance and reel them in using his Power, The Redeemer. His personal Perks, Gearhead, Dead Man's Switch, and Hex: Retribution, allow him to locate and impede Survivor objectives, and punish Survivors for destroying Totems.",
    legendary: false
  },
  {
    id: "strangerEddie",
    name: "Stranger Eddie",
    image: "images/killers/strangerEddie.png",
    chapter: "Legendary Outfit for The Deathslinger",
    bio: "Stranger Eddie is a familiar legend made horrifyingly wrong, an alien presence forged from music, madness, and the Entity's will.",
    legendary: true,
    licensed: true,
    license: "Iron Maiden"
  },
  {
    id: "theExecutioner",
    name: "The Executioner",
    image: "images/killers/theExecutioner.png",
    chapter: "CHAPTER 16: Silent Hill",
    bio: "The Executioner is a map-manipulation Killer, able to torment Survivors with the hazards he creates. Affected Survivors will be vulnerable to his special Hook, the Cage of Atonement and his special Mori, Final Judgement. His personal Perks, Forced Penance, Trail of Torment, and Deathbound, allow him to aggressively defend his prey while deceiving and tracking Survivors.",
    legendary: false,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "theBlight",
    name: "The Blight",
    image: "images/killers/theBlight.png",
    chapter: "CHAPTER 17: Descend Beyond",
    bio: "The Blight is an unpredictable Killer, able to rush forward in a burst of speed and carom off obstacles to injure Survivors using his power, Blighted Corruption. His personal Perks, Dragon's Grip, Hex: Blood Favour, and Hex: Undying, allow him to impose powerful effects on Generators, Totems and Pallets.",
    legendary: false
  },
  {
    id: "theFerryman",
    name: "The Ferryman",
    image: "images/killers/theFerryman.png",
    chapter: "Legendary Outfit for The Blight",
    bio: "Charon is a Psychopomp from Greek Mythology, known for transporting dead souls over the River Styx to the realm of Hades. He would charge a gold drachma to the souls wanting to cross or else they would be forced to wander the Styx's shores for a hundred years before being allowed to cross.",
    legendary: true
  },
  {
    id: "williamBirkin",
    name: "William Birkin",
    image: "images/killers/williamBirkin.png",
    chapter: "Legendary Outfit for The Blight",
    bio: "Dr. William Birkin was a leading scientist on the T-Virus project at Umbrella Corporation. Birkin planned to defect to the US military in exchange for the Golgotha Virus and asylum for his family. However, moles within the military managed to out Birkin's treachery, and he was flanked by Umbrella Security Service soldiers led by HUNK. Birkin was fatally wounded after resisting arrest, and the USS team left with his virus samples. Instead of dying, Birkin injected himself with his last remaining G-virus sample, and mutated into a monster, tracking down the USS team and killing all except for HUNK.",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "theTwins",
    name: "The Twins",
    image: "images/killers/theTwins.png",
    chapter: "CHAPTER 18: A Binding of Kin",
    bio: "The Twins are a cooperative pair of Killers, able to divide and hunt together using their Power, Blood Bond. Their personal Perks, Hoarder, Oppression, and Coup de Grâce, allow them to monitor Survivors' actions, impede their progress, and hunt more effectively.",
    legendary: false
  },
  {
    id: "theTrickster",
    name: "The Trickster",
    image: "images/killers/theTrickster.png",
    chapter: "CHAPTER 19: All-Kill",
    bio: "The Trickster is a ranged Killer, able to quickly unleash a flurry of blades by using his power, Showstopper. His personal Perks, Starstruck, Hex: Crowd Control, and No Way Out, allow him to quickly down would-be rescuers and block areas of the environment to his advantage.",
    legendary: false
  },
  {
    id: "theNemesis",
    name: "The Nemesis",
    image: "images/killers/theNemesis.png",
    chapter: "CHAPTER 20: Resident Evil™",
    bio: "The Nemesis is an unrelenting Killer, capable of attacking at mid-range with his tentacle, while receiving support from Zombies roaming the area. His personal Perks, Lethal Pursuer, Hysteria, and Eruption, allow him to quickly ambush Survivors, while sowing confusion and fear when injuring and hooking them.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "theCenobite",
    name: "The Cenobite",
    image: "images/killers/theCenobite.png",
    chapter: "CHAPTER 21: Hellraiser™",
    bio: "The Cenobite is a summoning Killer, able to possess Chain Projectiles and use the Lament Configuration to torture every Survivor at once. His personal Perks, Deadlock, Hex: Plaything, and Scourge Hook: Gift of Pain, allow him to slow Generator Progression and continue to torment Survivors who have experienced his sweet suffering.",
    legendary: false,
    licensed: true,
    license: "Hellraiser"
  },
  {
    id: "theChatterer",
    name: "The Chatterer",
    image: "images/killers/theChatterer.png",
    chapter: "Legendary Outfit for The Cenobite",
    bio: "Once opened, the puzzle box is not so easily closed. Endless trials filled with hooks and suffering, and dozens of Survivors reborn again and again to torment. In The Entity's Realm, Pinhead's unique talents have found a home like no other. With the gateway now open and the Apex Cenobite already spreading sweet pain throughout The Fog, it was only a matter of time before others arrived to join him in his explorations…",
    legendary: true,
    licensed: true,
    license: "Hellraiser"
  },
  {
    id: "theArtist",
    name: "The Artist",
    image: "images/killers/theArtist.png",
    chapter: "CHAPTER 22: Portrait of a Murder",
    bio: "The Artist is a ranged-reconnaissance Killer, able to launch Birds of Torment across the Map to reveal and attack Survivors. Her personal Perks, Grim Embrace, Scourge Hook: Pain Resonance, and Hex: Pentimento, allow her to interrupt Survivor objectives, torment hooked Survivors, and use destroyed Totems to her advantage.",
    legendary: false
  },
  {
    id: "theJabberwock",
    name: "The Jabberwock",
    image: "images/killers/theJabberwock.png",
    chapter: "Legendary Outfit for The Artist",
    bio: `"Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch! And, as in uffish thought he stood, The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood, And burbled as it came."`,
    legendary: true
  },
  {
    id: "missFuchi",
    name: "Miss Fuchi",
    image: "images/killers/missFuchi.png",
    chapter: "Legendary Outfit for The Artist",
    bio: "Miss Fuchi is a grotesque predator hiding behind a flawless smile. Obsessed with beauty and notoriety, she lures victims close before revealing the monstrous truth beneath her appearance. Her presence is intoxicating, terrifying, and impossible to escape.",
    legendary: true,
    licensed: true,
    license: "Junji Ito"
  },
  {
    id: "theLeshen",
    name: "The Leshen",
    image: "images/killers/theLeshen.png",
    chapter: "Legendary Outfit for The Artist",
    bio: "The Leshen is an ancient forest spirit, bound to the wilderness and sustained by fear. It commands the land itself, twisting roots, beasts, and shadows into weapons against those who trespass. To enter its domain is to be hunted by the forest itself.",
    legendary: true,
    licensed: true,
    license: "The Witcher"
  },
  {
    id: "bouletArtist",
    name: "Boulet Artist",
    image: "images/killers/bouletArtist.png",
    chapter: "Legendary Outfit for The Artist",
    bio: "The Boulet Artist is a sadistic visionary who transforms suffering into spectacle. With every stroke, it reshapes flesh and fear alike, turning agony into living art meant to be admired… and endured.",
    legendary: true,
    licensed: true,
    license: "Boulet Brothers"
  },
  {
    id: "theOnryo",
    name: "The Onryō",
    image: "images/killers/theOnryo.png",
    chapter: "CHAPTER 23: Sadako Rising",
    bio: "The Onryō is a vengeful ghost imbued with the power of Nensha, The Onryō is able to silently and invisibly traverse the Realm, manifesting when she is ready to strike. Her personal Perks, Scourge Hook: Floods of Rage, Call of Brine, and Merciless Storm, allow her to expose hidden Survivors, survey Generators, and hamper Repair progress.",
    legendary: false,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "theDredge",
    name: "The Dredge",
    image: "images/killers/theDredge.png",
    chapter: "CHAPTER 24: Roots of Dread",
    bio: "The Dredge is a manifestation of the dark thoughts of a once-vibrant community, able to teleport between Lockers and summon an overwhelming darkness. Its personal Perks, Dissolution, Darkness Revealed, and Septic Touch, allow it to destroy Pallets, spot Survivors near Lockers, and afflict healing Survivors with Blindness and Exhausted.",
    legendary: false
  },
  {
    id: "eddiesTribute",
    name: "Eddie's Tribute",
    image: "images/killers/eddiesTribute.png",
    chapter: "Legendary Outfit for The Dredge",
    bio: "Eddie's Tribute is a relentless embodiment of devotion and wrath. Fueled by rage and loyalty, it stalks its prey with brutal efficiency, honoring a legacy forged in blood and rebellion.",
    legendary: true,
    licensed: true,
    license: "Iron Maiden"
  },
  {
    id: "halfSpiritsTorments",
    name: "Half Spirits' Torments",
    image: "images/killers/halfSpiritsTorments.png",
    chapter: "Legendary Outfit for The Dredge",
    bio: "Everything had gone terribly wrong. He tried to run, but the sand gave way beneath his feet and he fell. He crawled, half-blind from sand in his eyes. In his darkest moments he heard the screaming, echoes from his memory. He was just a kid, but he had survived where they did not. Growing old had been both a blessing and a curse. As his eyes cleared, something flipped him onto his back. He wailed at the sight of those he'd left behind, back to reclaim him.",
    legendary: true,
    licensed: true,
    license: "Junji Ito"
  },
  {
    id: "theMastermind",
    name: "The Mastermind",
    image: "images/killers/theMastermind.png",
    chapter: "CHAPTER 25: Resident Evil™: PROJECT W",
    bio: "Albert Wesker is a brilliant and ruthless mastermind infused with the Power of Uroboros. His personal Perks, Superior Anatomy, Awakened Awareness, and Terminus, allow him to vault faster, see other Survivors' Auras while carrying one, and cause Survivors to be permanently Broken when the Exit Gates are powered.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "theKnight",
    name: "The Knight",
    image: "images/killers/theKnight.png",
    chapter: "CHAPTER 26: Forged in Fog",
    bio: "The Knight is a strategic Killer, able to send his faithful Guards to hunt for Survivors and damage objects on the battlefield. His personal Perks, Nowhere to Hide, Hex: Face the Darkness, and Hubris, allow him to reveal Survivors near Generators, curse Survivors to scream out in fear, and cause a Survivor who stuns you to become Exposed.",
    legendary: false
  },
  {
    id: "theDraugr",
    name: "The Draugr",
    image: "images/killers/theDraugr.png",
    chapter: "Legendary Outfit for The Knight",
    bio: `A Draugr is an undead creature from Scandinavian Saga Literature and Folklore, also known as an "Again-Walker". Draugar are said to live close to their burial mounds, often guarding treasures that they were buried with. Unlike ghosts, which are generally described as intangible spectres, Draugar possess a physical body, seen as they are essentially animated corpses.`,
    legendary: true
  },
  {
    id: "theSkullMerchant",
    name: "The Skull Merchant",
    image: "images/killers/theSkullMerchant.png",
    chapter: "CHAPTER 27: Tools of Torment",
    bio: "The Skull Merchant is a tactical Killer, able to place Drones that detect and debilitate her targets. Her personal Perks, THWACK!, Leverage, and Game Afoot, allow her to gain Haste from pursuing her Obsession, force screams from Survivors when breaking Breakable Walls or Pallets, and reduce Survivors' Healing speed the more times you place them on Hooks.",
    legendary: false
  },
  {
    id: "theSingularity",
    name: "The Singularity",
    image: "images/killers/theSingularity.png",
    chapter: "CHAPTER 28: End Transmission",
    bio: "The Singularity is a relentless Killer, able to launch Biopods to move quickly across the map. His personal Perks, Genetic Limits, Forced Hesitation, and Machine Learning, allow him to exhaust newly injured Survivors, hinder anyone close to a survivor put into the dying state, and compromise Generators.",
    legendary: false
  },
  {
    id: "theXenomorph",
    name: "The Xenomorph",
    image: "images/killers/theXenomorph.png",
    chapter: "CHAPTER 29: Alien",
    bio: "A relentless specimen from a distant planet, The Xenomorph is vicious, agile, and cunning. Its personal Perks, Rapid Brutality, Alien Instinct, and Ultimate Weapon, allow it to cause nearby Survivors to scream, gain Haste after basic attacks, and see Auras of faraway Survivors.",
    legendary: false,
    licensed: true,
    license: "Alien"
  },
  {
    id: "theXenomorphQueen",
    name: "The Xenomorph Queen",
    image: "images/killers/theXenomorphQueen.png",
    chapter: "Legendary Outfit for The Xenomorph",
    bio: "The Xenomorph Queen is one of the largest forms of the Xenomorph species, growing additional arms and a large head crest, acting as the mother and leader of the hive.",
    legendary: true,
    licensed: true,
    license: "Alien"
  },
  {
    id: "theGoodGuy",
    name: "The Good Guy",
    image: "images/killers/theGoodGuy.png",
    chapter: "CHAPTER 30: Chucky",
    bio: "The Good Guy is an elusive Killer, capable of deceiving Survivors with his illusory Footfalls and deadly Slice & Dice. His personal Perks, Hex: Two Can Play, Friends 'til the End, and Batteries Included, allow him to blind those who blind him, relentlessly hunt his Obsession, and get faster around completed Generators.",
    legendary: false,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "theGoodGal",
    name: "The Good Gal",
    image: "images/killers/theGoodGal.png",
    chapter: "Legendary Outfit for The Good Guy",
    bio: "Tiffany was in love with Charles and thought he had intended to propose to her before he disappeared, but Chucky dismissed. Hurt and enraged, Tiffany trapped Chucky in a playpen and taunted him with a puppet-wedding. While she was taking a bath later on, Chucky managed to escape the playpen and killed Tiffany by throwing a portable TV into the bathtub, electrocuting her. Afterward, Chucky uses the same voodoo magic that originally transferred his soul into the Good Guy doll to transfer Tiffany's into that of the puppet with which she had played a puppet-wedding, creating the Good Gal.",
    legendary: true,
    licensed: true,
    license: "Chucky"
  },
  {
    id: "theUnknown",
    name: "The Unknown",
    image: "images/killers/theUnknown.png",
    chapter: "CHAPTER 31: All Things Wicked",
    bio: "The Unknown is a being beyond understanding, though many have tried. Its personal Perks, Unbound, Unforeseen, and Undone, allow it to move quicker, put its Terror Radius on a Generator, and deplete Repair progress.",
    legendary: false
  },
  {
    id: "theLich",
    name: "The Lich",
    image: "images/killers/theLich.png",
    chapter: "CHAPTER 32: Dungeons & Dragons",
    bio: "Few dare speak The Lich's true name, for fear that he may hear — or worse. His personal Perks, Weave Attunement, Languid Touch, and Dark Arrogance, allow him to exploit used Items, exhaust those who disturb the Crows, and increase his Vaulting speed.",
    legendary: false,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "theDarkLord",
    name: "The Dark Lord",
    image: "images/killers/theDarkLord.png",
    chapter: "CHAPTER 33: Castlevania",
    bio: "The Dark Lord, Dracula, is the embodiment of darkness and tragedy. His personal Perks, Hex: Wretched Fate, Human Greed, and Dominance, allow him to slow the Repair speed of the Obsession, reveal the Auras of unopened Chests and nearby Survivors, and temporarily block Chests and Totems.",
    legendary: false,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "trueForm",
    name: "True Form",
    image: "images/killers/trueForm.png",
    chapter: "Legendary Outfit for The Dark Lord",
    bio: "True Form reveals the creature beneath the mask, shedding all pretense of restraint. In this state, raw instinct and overwhelming brutality guide its actions, leaving no room for mercy.",
    legendary: true,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "theHoundmaster",
    name: "The Houndmaster",
    image: "images/killers/theHoundmaster.png",
    chapter: "CHAPTER 34: Doomed Course",
    bio: "The Houndmaster is a force to be feared, with an equally fearsome dog at her side. Her personal Perks, All-Shaking Thunder, Scourge Hook: Jagged Compass, and No Quarter, help her increase her lunge attack distance, create scourge hooks, and overwhelm Survivors with healing Skill Checks.",
    legendary: false
  },
  {
    id: "theGhoul",
    name: "The Ghoul",
    image: "images/killers/theGhoul.png",
    chapter: "CHAPTER 35: Tokyo Ghoul",
    bio: "The Ghoul has been pushed to his limits and he's hungry for more. His personal Perks, Hex: Nothing but Misery, Forever Entwined, and None Are Free, help him to Hinder Survivors, hook them more quickly, and block Windows and Pallets when all Generators are completed.",
    legendary: false,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "rizeKamishiro",
    name: "Rize Kamishiro",
    image: "images/killers/rizeKamishiro.png",
    chapter: "Legendary Outfit for The Ghoul",
    bio: `Rize was born into the Washuu family as a part of a contingency plan to preserve their ghoul bloodline. Neglected and disgusted at her fate, Rize escaped the family and began living nomadically across Tokyo. As a she grew up, her hunger became so insatiable that she began overeating, which resulted in her becoming a wanted Ghoul under the name of "The Binge Eater".`,
    legendary: true,
    licensed: true,
    license: "Tokyo Ghoul"
  },
  {
    id: "theAnimatronic",
    name: "The Animatronic",
    image: "images/killers/theAnimatronic.png",
    chapter: "CHAPTER 36: Five Nights at Freddy's",
    bio: "The Animatronic always comes back. His personal Perks, Help Wanted, Phantom Fear, and Haywire, help him compromise Generators, make Survivors scream, and regress Exit Gate Switches.",
    legendary: false,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "yellowRabbit",
    name: "Yellow Rabbit",
    image: "images/killers/yellowRabbit.png",
    chapter: "Legendary Outfit for The Animatronic",
    bio: "William Afton is a very clever and calculated individual. Every outcome of every move he makes is thoroughly thought out and determined. He is careful with his murderous rampages and recalls details about them well. Forever locked in his springlock cage after suffering at the hand of his creations, he wears the suit with pride, always ready to kill again.",
    legendary: true,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "glitchtrap",
    name: "Glitchtrap",
    image: "images/killers/glitchtrap.png",
    chapter: "Legendary Outfit for The Animatronic",
    bio: "Glitchtrap takes on a twisted form of a Spring Bonnie costume - who is a grinning, bipedal, golden-yellow rabbit. They wear a purple star-speckled vest, a purple bow tie, and two black buttons near the top of their chest. They also have stitches stretching across their waving hand. They initially appear translucent, progressing into a less spectral form over time. Glitchtrap was born when unchecked computer code was put into a game to be reused. Little did they know the Virus had other plans, when the fog swept him up, the Entity birthed him anew, a copy made of flesh.",
    legendary: true,
    licensed: true,
    license: "Five Nights at Freddy's"
  },
  {
    id: "theKrasue",
    name: "The Krasue",
    image: "images/killers/theKrasue.png",
    chapter: "CHAPTER 37: Sinister Grace",
    bio: "A shape-changing Killer, able to inflict Survivors with an effect that weakens them to her Intestinal Whip attack. Her personal Perks, Ravenous, Wandering Eye, and Hex: Overture of Doom, help her increase mid-trial pressure, spot injured Survivors, and cause confusion to her whereabouts.",
    legendary: false
  }
];
