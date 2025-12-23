// List of Survivors (Legendary skins are treated as separate characters)
const survivors = [
  {
    id: "dwightFairfield",
    name: "Dwight Fairfield",
    image: "images/survivors/dwightFairfield.png",
    chapter: "Base Game",
    bio: "Dwight Fairfield is a nervous Leader, able to locate his allies and increase their effectiveness. His personal Perks, Bond, Prove Thyself, and Leader, allow him to get in proximity of other Survivors and provide bonuses to their actions as well as his own. He is skilled at finding others and working as a group. His Perks help him and others by keeping them together and alive.",
    legendary: false
  },
  {
    id: "megThomas",
    name: "Meg Thomas",
    image: "images/survivors/megThomas.png",
    chapter: "Base Game",
    bio: "Meg Thomas is an energetic Athlete, able to outrun most Killers. Her personal Perks, Quick & Quiet, Sprint Burst, and Adrenaline, give her advantages to escape chases and put distance between herself and the Killer. She is all about escaping and avoiding bad situations. She can greatly surprise the Killer with her speed, when she is in a bad situation.",
    legendary: false
  },
  {
    id: "claudetteMorel",
    name: "Claudette Morel",
    image: "images/survivors/claudetteMorel.png",
    chapter: "Base Game",
    bio: "Claudette Morel is a studious Botanist, able to boost her team's survivability as well as her own. Her personal Perks, Empathy, Botany Knowledge, and Self-Care, allow her to spot injured Survivors and heal both herself and her team more effectively. She uses her time out of the fog to collect potent plants found around the Campfire to create tinctures that can stop bleeding.",
    legendary: false
  },
  {
    id: "jakePark",
    name: "Jake Park",
    image: "images/survivors/jakePark.png",
    chapter: "Base Game",
    bio: "Jake Park is a solitary Survivalist, able to hold his own in most situations. His personal Perks, Iron Will, Calm Spirit, and Saboteur, allow him to more effectively move about the environment and survive while injured. He is all about keeping calm as you face true terror. He is one with nature and used to surviving by any makeshift way possible.",
    legendary: false
  },
  {
    id: "neaKarlsson",
    name: "Nea Karlsson",
    image: "images/survivors/neaKarlsson.png",
    chapter: "CHAPTER 1: The Last Breath Chapter",
    bio: "Nea Karlsson is an Urban Artist, able to easily escape and hide. Her personal Perks, Balanced Landing, Urban Evasion, and Streetwise, make her well suited to completing Objectives and rapid evasion. She is focused around movement - making her faster, more balanced, and better at evading the Killer.",
    legendary: false
  },
  {
    id: "laurieStrode",
    name: "Laurie Strode",
    image: "images/survivors/laurieStrode.png",
    chapter: "CHAPTER 2: The HALLOWEEN® Chapter",
    bio: "Laurie Strode is a determined Survivor, prepared to weather any challenge. Her personal Perks, Sole Survivor, Object of Obsession, and Decisive Strike, grant her powerful survival abilities at the cost of leaving her exposed. Her Perks are tied to the Killer's Obsession and surviving - no matter what.",
    legendary: false,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "aceVisconti",
    name: "Ace Visconti",
    image: "images/survivors/aceVisconti.png",
    chapter: "CHAPTER 3: Of Flesh and Mud",
    bio: "Ace Visconti is a lucky Gambler, improving the odds of the entire team. His personal Perks, Open-Handed, Up the Ante, and Ace in the Hole, boost the Luck of all Survivors and help with Chest searches. He is one lucky bastard or at the very least he believes he is. Therefore, he's always ready to make a gamble. Often, he's right.",
    legendary: false
  },
  {
    id: "williamBillOverbeck",
    name: "William \"Bill\" Overbeck",
    image: "images/survivors/williamBillOverbeck.png",
    chapter: "CHAPTER 3.5: Left Behind",
    bio: `William '"Bill" Overbeck is an old Soldier, accustomed to dealing with critical situations. His personal Perks, Left Behind, Borrowed Time, and Unbreakable, make him more powerful in dire moments. He is tough as nails and knows how to survive just about anything. He'll do whatever it takes to help others live to see another day and he's not afraid to take one for the team.`,
    legendary: false,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "fengMin",
    name: "Feng Min",
    image: "images/survivors/fengMin.png",
    chapter: "CHAPTER 4: Spark of Madness",
    bio: "Feng Min is an objective-focused competitor who can quickly adapt her strategy to meet a vast range of challenging situations. Her personal Perks, Technician, Lithe, and Alert, help her with repairing Generators and locating the Killer. She can silently work on Generators and thus can notice the Killer long before they notice her. She will be long gone before the Killer can do anything.",
    legendary: false
  },
  {
    id: "davidKing",
    name: "David King",
    image: "images/survivors/davidKing.png",
    chapter: "CHAPTER 5: A Lullaby for the Dark",
    bio: "David King is a rugged Scrapper, rewarding high-risk play. His personal Perks, We're Gonna Live Forever, Dead Hard, and No Mither, reward an aggressive, confrontational play style, but leave him vulnerable. His Perks are a result of his years playing rugby and stem from his strong physique and his need for Adrenaline. But being fast isn't everything, he's - sometimes - also a team player. But that side is seldom seen.",
    legendary: false
  },
  {
    id: "quentinSmith",
    name: "Quentin Smith",
    image: "images/survivors/quentinSmith.png",
    chapter: "CHAPTER 6: A Nightmare on Elm Street™",
    bio: "Quentin Smith is a resolute Dreamwalker, increasing the survivability and recovery of his team. His personal Perks, Wake Up!, Pharmacy, and Vigil, help Survivors locate Exit Gates and recover more easily. His Perks focus on survival and helping others - providing a kind of support in this nightmare.",
    legendary: false,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "detectiveDavidTapp",
    name: "Detective David Tapp",
    image: "images/survivors/detectiveDavidTapp.png",
    chapter: "CHAPTER 7: The SAW™ Chapter",
    bio: "David Tapp is an obsessed Detective, able to locate and complete Objectives faster. His personal Perks, Tenacity, Detective's Hunch, and Stake Out, make him objective-focused and able to rapidly recover. His Perks are all about determination and not giving up. You are dead set on reaching your goal and survive no matter what.",
    legendary: false,
    licensed: true,
    license: "SAW"
  },
  {
    id: "kateDenson",
    name: "Kate Denson",
    image: "images/survivors/kateDenson.png",
    chapter: "CHAPTER 8: Curtain Call",
    bio: "Kate Denson is a hopeful songbird, able to make the most of her surroundings. Her personal Perks, Dance With Me, Windows of Opportunity, and Boil Over, grant her the foresight and feistiness to escape even the most dire situations.",
    legendary: false
  },
  {
    id: "adamFrancis",
    name: "Adam Francis",
    image: "images/survivors/adamFrancis.png",
    chapter: "CHAPTER 9: Shattered Bloodline",
    bio: "Adam Francis is a resourceful Teacher, able to adapt to new circumstances and develop strategies accordingly. His personal Perks, Diversion, Deliverance, and Autodidact, help him to distract the Killer, survive desperate situations and become more skilled as the trial continues.",
    legendary: false
  },
  {
    id: "jeffJohansen",
    name: "Jeff Johansen",
    image: "images/survivors/jeffJohansen.png",
    chapter: "CHAPTER 10: Darkness Among Us",
    bio: "Jeff Johansen is a quiet artist with a heart of gold, standing steadfast against impossible odds. He has a dark past but led a quiet, simple life until his father passed, leaving things to sort out. His personal Perks, Breakdown, Aftercare, and Distortion, give him observational advantages and help to hide his presence from the Killer.",
    legendary: false
  },
  {
    id: "janeRomero",
    name: "Jane Romero",
    image: "images/survivors/janeRomero.png",
    chapter: "CHAPTER 11: Demise of the Faithful",
    bio: "Jane Romero is an influential celebrity, going against the grain to tackle challenges head on. Her personal Perks, Solidarity, Poised, and Head On, give her a flexible set of skills that allow her to help others, as well as herself, to escape dangerous situations.",
    legendary: false
  },
  {
    id: "ashleyJWilliams",
    name: "Ashley J. Williams",
    image: "images/survivors/ashleyJWilliams.png",
    chapter: "CHAPTER 11.5: Ash vs Evil Dead",
    bio: "Ash Williams is a lone wolf, cocky and headstrong; a man built for survival. His personal Perks, Flip-Flop, Buckle Up, and Mettle of Man, give him additional resilience to pain and hardship, as well as the ability to help his friends out of sticky situations.",
    legendary: false,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "nancyWheeler",
    name: "Nancy Wheeler",
    image: "images/survivors/nancyWheeler.png",
    chapter: "CHAPTER 13: Stranger Things",
    bio: "Nancy Wheeler is an aspiring journalist, able to make acute observations and gain insights that others may miss. Her personal Perks, Better Together, Fixated, and Inner Strength, give her the information and courage she needs to tackle unexpected challenges.",
    legendary: false,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "steveHarrington",
    name: "Steve Harrington",
    image: "images/survivors/steveHarrington.png",
    chapter: "CHAPTER 13: Stranger Things",
    bio: "Steve Harrington is a former jock, able to protect and support his fellow Survivors while providing his own brand of humour. His personal Perks, Babysitter, Camaraderie, and Second Wind, enable him to distract Killers, tolerate pain, and get back into the fight.",
    legendary: false,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "jonathanByers",
    name: "Jonathan Byers",
    image: "images/survivors/jonathanByers.png",
    chapter: "Legendary Outfit for Steve Harrington",
    bio: `Jonathan Byers is an anti-social photographer in Hawkins, Indiana. His life is turned upside down with the disappearance and "death" of his brother Will. Initially dismissing his mother's claims of something supernatural having claimed Will, Jonathan then realizes that she may not be delusional after all when Nancy Wheeler claims that her best friend Barbara Holland disappeared too; and saw a man with no face at the site of her disappearance. They begin to search for their friends, and later, with the help of Steve Harrington, his (now former) bully, defeat the creature that had taken the both of them.`,
    legendary: true,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "yuiKimura",
    name: "Yui Kimura",
    image: "images/survivors/yuiKimura.png",
    chapter: "CHAPTER 14: Cursed Legacy",
    bio: "Yui Kimura is a hardened street racer, able to gain advantages for her and her fellow Survivors in challenging situations. Her personal Perks, Lucky Break, Any Means Necessary, and Breakout, enable her to cover her blood trails, reset dropped Pallets, and assist helpless Survivors.",
    legendary: false
  },
  {
    id: "zarinaKassir",
    name: "Zarina Kassir",
    image: "images/survivors/zarinaKassir.png",
    chapter: "CHAPTER 15: Chains of Hate",
    bio: "Zarina Kassir is a plucky documentarian, able to use her street smarts to avoid detection and greatly assist other Survivors. Her personal Perks, Off the Record, Red Herring, and For the People, help her remain hidden in the face of danger, create distractions, and quickly heal others by forgoing her own safety.",
    legendary: false
  },
  {
    id: "cherylMason",
    name: "Cheryl Mason",
    image: "images/survivors/cherylMason.png",
    chapter: "CHAPTER 16: Silent Hill",
    bio: "Cheryl Mason is a young Veteran of Terror, emboldening both herself and her team. Her personal Perks, Soul Guard, Blood Pact, and Repressed Alliance, allow her to survive through immense hardship, stay in contact with team members, and plan objectives.",
    legendary: false,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "lisaGarland",
    name: "Lisa Garland",
    image: "images/survivors/lisaGarland.png",
    chapter: "Legendary Outfit for Cheryl Mason",
    bio: "Lisa Garland was a nurse at the Alchemilla Hospital. She was found by Cheryl's adoptive father, Harry Mason, hiding under a table. Having no recollection about the events prior to meeting Harry, Lisa thought she just lost consciousness and found the whole hospital already deserted. Eventually, the disturbing truth about her past were revealed by the end of the game, which also showed her horrifying fate and subsequent state that left Lisa and Harry in total despair.",
    legendary: true,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "cybilBennett",
    name: "Cybil Bennett",
    image: "images/survivors/cybilBennett.png",
    chapter: "Legendary Outfit for Cheryl Mason",
    bio: "Cybil Bennett is a police officer in Silent Hill's neighbouring town of Brahms. She was sent to Silent Hill to investigate the sudden lack of communication between Brahm's police precinct and Silent Hill's. Along the way, she met Harry Mason, who is Cheryl Mason's adoptive father, as he was trying to find his missing daughter.",
    legendary: true,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "jamesSunderland",
    name: "James Sunderland",
    image: "images/survivors/jamesSunderland.png",
    chapter: "Legendary Outfit for Cheryl Mason",
    bio: `James Sunderland is an office clerk, married to Mary Shepherd-Sunderland. His wife tragically died to an illness three years prior to the events of Silent Hill 2. During the events of Silent Hill 2, James strangely receives a letter from his late wife, telling him to meet her in their "special place" in Silent Hill. Upon arrival at the desolate town, he uncovers many clues about the truth of his disturbing past. He also meets Maria, a mysterious woman who has the uncanny resemblance of his wife. Eventually, he finds himself sinking deeper and deeper into the unknown, and toward a despair from which he may never return.`,
    legendary: true,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "maria",
    name: "Maria",
    image: "images/survivors/maria.png",
    chapter: "Legendary Outfit for Cheryl Mason",
    bio: "Maria is a mysterious woman encountered by James Sunderland while he wanders the town of Silent Hill, whose voice and appearance are strangely close to his dead wife, Mary. During the events of Silent Hill 2, she is first met by James at Rosewater Park and accompanies him as he explores Silent Hill and searches for his thought-to-be dead wife, Mary. She is helpful in solving puzzles and provides a source of comfort and companionship for James in the desolate town.",
    legendary: true,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "felixRichter",
    name: "Felix Richter",
    image: "images/survivors/felixRichter.png",
    chapter: "CHAPTER 17: Descend Beyond",
    bio: "Felix Richter is a visionary architect, able to use his relentless determination to form a plan and help other Survivors. His personal Perks, Visionary, Desperate Measures, and Built to Last, help him reveal Generators, rescue Survivors and get the most from his tools.",
    legendary: false
  },
  {
    id: "elodieRakoto",
    name: "Élodie Rakoto",
    image: "images/survivors/elodieRakoto.png",
    chapter: "CHAPTER 18: A Binding of Kin",
    bio: "Élodie Rakoto is an occult investigator, able to use cunning tricks and stubborn resolve to keep herself alive. Her personal Perks, Appraisal, Deception, and Power Struggle, allow her to interact with objects in new ways, all while having a backup plan to escape Killers.",
    legendary: false
  },
  {
    id: "yunJinLee",
    name: "Yun-Jin Lee",
    image: "images/survivors/yunJinLee.png",
    chapter: "CHAPTER 19: All-Kill",
    bio: "Yun-Jin Lee is a self-interested music producer, able to advance her goals during turbulent times. Her personal Perks, Fast Track, Smash Hit, and Self-Preservation, allow her to improve her abilities when others are harmed, and quickly escape from a chase.",
    legendary: false
  },
  {
    id: "jillValentine",
    name: "Jill Valentine",
    image: "images/survivors/jillValentine.png",
    chapter: "CHAPTER 20: Resident Evil™",
    bio: "Jill Valentine is a founding member of S.T.A.R.S who has triumphed over countless bio-organic weapons. Her personal Perks, Counterforce, Resurgence, and Blast Mine, allow her to indirectly fight back, while offering strong support to her teammates.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "claireRedfield",
    name: "Claire Redfield",
    image: "images/survivors/claireRedfield.png",
    chapter: "Legendary Outfit for Jill Valentine",
    bio: "Claire Redfield left university to find her brother, Chris Redfield, whom she had not heard from in weeks. Arriving in the city just before the end of the month, she stopped by a seemingly unoccupied gas station to refill her motorcycle. Quickly discovering the zombie outbreak, she was saved just in time by an officer named Leon S. Kennedy, and drove into the city to take refuge at the local police station. Both were separated however, forcing the two to fight their way out. Claire, alongside a little girl she took in named Sherry Birkin, escaped the city a day later and reunited with Leon.",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "shevaAlomar",
    name: "Sheva Alomar",
    image: "images/survivors/shevaAlomar.png",
    chapter: "Legendary Outfit for Jill Valentine",
    bio: "In 2009, Sheva Alomar was partnered up with Chris Redfield in order to take down Ricardo Irving, a suspected arms dealer. The two travelled to the city of Kijuju, but the mission quickly went south due to a security breach and their lack of preparation for the citizen's attacks. Though they managed to overcome the odds and defeated Irving, Redfield sought to keep moving forward to look for Jill Valentine, his former partner who was believed to be dead. In finding her, both Chris and Sheva found a conspiracy that could threaten the entire world as they knew it.",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "leonSKennedy",
    name: "Leon S. Kennedy",
    image: "images/survivors/leonSKennedy.png",
    chapter: "CHAPTER 20: Resident Evil™",
    bio: "Leon S. Kennedy is a rookie police officer who went beyond the call of duty during the outbreak in Raccoon City. His personal Perks, Bite the Bullet, Flashbang, and Rookie Spirit, allow him to ignore pain, disorient the Killer, and track objectives being lost.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "chrisRedfield",
    name: "Chris Redfield",
    image: "images/survivors/chrisRedfield.png",
    chapter: "Legendary Outfit for Leon S. Kennedy",
    bio: "In the summer of 1998, Raccoon City was plagued by a series of cannibalistic murders. With nothing explaining these occurences, the Raccoon Police Department sent S.T.A.R.S. Bravo Team to the Arklay Mountains to investigate. When Bravo Team went missing, Chris Redfield and the Alpha Team went into the mountains themselves to search for the missing team and continue their investigation. In the woods, they found the crashed helicopter of Bravo Team with the mutilated corpse of their pilot. A pack of seemingly rabid dogs chased Alpha Team, who lost one member, and were run into a strange nearby mansion where strange monsters ran rampant.",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "carlosOliveira",
    name: "Carlos Oliveira",
    image: "images/survivors/carlosOliveira.png",
    chapter: "Legendary Outfit for Leon S. Kennedy",
    bio: "Carlos Oliveira was assigned to Raccoon City to rescue civilians, where a zombie outbreak had just taken place. There, he meets Jill Valentine and helps her escape from the Nemesis T-Type. While partnered up with Jill to rescue civilian lives, Carlos eventually realizes that his employers aren't as innocent as he thought... ",
    legendary: true,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "mikaelaReid",
    name: "Mikaela Reid",
    image: "images/survivors/mikaelaReid.png",
    chapter: "CHAPTER 21.5: Hour of the Witch",
    bio: "Mikaela Reid is a young mystic, able to alter the trial with supernatural abilities. Her personal Perks, Clairvoyance, Boon: Circle of Healing, and Boon: Shadow Step, allow her to oversee the area while creating areas of refuge.",
    legendary: false
  },
  {
    id: "jonahVasquez",
    name: "Jonah Vasquez",
    image: "images/survivors/jonahVasquez.png",
    chapter: "CHAPTER 22: Portrait of a Murder",
    bio: "Jonah Vasquez is a mathematical mastermind, able to use logic to help his team. His personal Perks, Overcome, Corrective Action, and Boon: Exponential, allow him to quickly flee, correct failed Skill Checks, and treat dying Survivors.",
    legendary: false
  },
  {
    id: "yoichiAsakawa",
    name: "Yoichi Asakawa",
    image: "images/survivors/yoichiAsakawa.png",
    chapter: "CHAPTER 23: Sadako Rising",
    bio: "Yoichi Asakawa is a brilliant marine biologist and psychic whose knowledge and abilities allow him to protect himself and assist others. His personal Perks, Parental Guidance, Empathic Connection, and Boon: Dark Theory, allow him to hide from Killers, call out to injured Survivors, and help others move faster.",
    legendary: false,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "haddieKaur",
    name: "Haddie Kaur",
    image: "images/survivors/haddieKaur.png",
    chapter: "CHAPTER 24: Roots of Dread",
    bio: "Haddie Kaur is a brave and determined podcaster with the ability to see and feel places of great suffering she calls Overlaps. Her personal Perks, Inner Focus, Residual Manifest, and Overzealous, allow her to track Survivors and Killers after an attack, use Flashlights more effectively, and repair Generators more efficiently.",
    legendary: false
  },
  {
    id: "adaWong",
    name: "Ada Wong",
    image: "images/survivors/adaWong.png",
    chapter: "CHAPTER 25: Resident Evil™: PROJECT W",
    bio: "Ada Wong is a mysterious secret agent whose skill in espionage makes her a dangerous foe. Her personal Perks, Wiretap, Reactive Healing, and Low Profile, allow her to spy on a Killer, gain a surge of healing when her allies are hurt, and leave no trace when the becoming the final Survivor.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "rebeccaChambers",
    name: "Rebecca Chambers",
    image: "images/survivors/rebeccaChambers.png",
    chapter: "CHAPTER 25: Resident Evil™: PROJECT W",
    bio: "Rebecca Chambers is a gifted medic and squad member whose presence soothes those around her. Her personal Perks, Better than New, Reassurance, and Hyperfocus, allow her to give her team mates speed boosts, give temporary relief to struggling allies, and complete Skill Checks at increased speed.",
    legendary: false,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "vittorioToscano",
    name: "Vittorio Toscano",
    image: "images/survivors/vittorioToscano.png",
    chapter: "CHAPTER 26: Forged in Fog",
    bio: "Vittorio Toscano has endlessly wandered through The Fog, attempting to learn its secrets, for ages. His personal Perks, Potential Energy, Fogwise, and Quick Gambit, allow him to store Generator progress to use later, reveal the Killer's location after a Great Skill Check, and give others a speed boost while repairing",
    legendary: false
  },
  {
    id: "geraltOfRivia",
    name: "Geralt of Rivia",
    image: "images/survivors/geraltOfRivia.png",
    chapter: "Legendary Outfit for Vittorio Toscano",
    bio: `As a child, Geralt was subjected to the Trial of The Grasses. He managed to survive the many blistering mutations required to grant Witchers their abilities. After displaying unusual tolerance, Geralt was selected for further experimental mutations which granted him considerably greater strength, speed, endurance, resilience, healing, senses, complete immunity to diseases and conventional poisons, and extreme resistance to pain. This resulted in his hair turning white, and he received the nickname "White Wolf".`,
    legendary: true,
    licensed: true,
    license: "The Witcher"
  },
  {
    id: "thalitaLyra",
    name: "Thalita Lyra",
    image: "images/survivors/thalitaLyra.png",
    chapter: "CHAPTER 27: Tools of Torment",
    bio: "Thalita Lyra has mastered the art of competitive flair, fighting kites with skill and flourish. Her personal Perks, Friendly Competition, Teamwork: Power of Two, and Cut Loose, allow her to perform a series of stealthy fast vaults, inspire faster repairs from teammates, and help allies move faster after they are healed by you.",
    legendary: false
  },
  {
    id: "renatoLyra",
    name: "Renato Lyra",
    image: "images/survivors/renatoLyra.png",
    chapter: "CHAPTER 27: Tools of Torment",
    bio: "Renato Lyra always keeps his eyes on the prize, and he expects the same from his teammates. His personal Perks, Blood Rush, Teamwork: Collective Stealth, and Background Player, allow him to move faster when near a chase, recover from Exhaustion instantly, and hide his and an allies Scratch Marks after healing.",
    legendary: false
  },
  {
    id: "tubarao",
    name: "Tubarão",
    image: "images/survivors/tubarao.png",
    chapter: "Legendary Outfit for Renato Lyra",
    bio: "Isaac Nunes Oliveira was born in an area where earthquakes and underwater eruptions were frequent, and learned firsthand the importance of helping other people in times of trouble. On boating trips with his father, Nunes quickly became enamored with the freedom that came with wakeboarding and decided to join the marines. Because of his identity as a transgender person, Nunes had to work even harder to prove himself, and he did, being particularly notable for his insistence on civilian safety. Global counter terrorist unit Rainbow took note of one of his inventions, and he was recruited into the group under the callsign Tubarão to assist in operations against the terrorist Deimos.",
    legendary: true,
    licensed: true,
    license: "Rainbow Six Siege"
  },
  {
    id: "gabrielSoma",
    name: "Gabriel Soma",
    image: "images/survivors/gabrielSoma.png",
    chapter: "CHAPTER 28: End Transmission",
    bio: "Gabriel Soma is a resourceful engineer, ready to make the most out of any situation. His personal Perks, Troubleshooter, Made for This, and Scavenger, help him see things during a Chase, gain Endurance after healing Survivors, and recharge his Toolbox.",
    legendary: false
  },
  {
    id: "nicolasCage",
    name: "Nicolas Cage",
    image: "images/survivors/nicolasCage.png",
    chapter: "CHAPTER 28.5: Nicolas Cage",
    bio: "Nicolas Cage is a superstar, trapped in the role of a lifetime. His personal Perks, Dramaturgy, Scene Partner, and Plot Twist, help him make a quick escape, see the Killer's Aura, and pretend to be dying.",
    legendary: false,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "ellenRipley",
    name: "Ellen Ripley",
    image: "images/survivors/ellenRipley.png",
    chapter: "CHAPTER 29: Alien",
    bio: "Ellen Ripley, Warrant Officer of the Nostromo, is capable and pragmatic. Her personal Perks, Chemical Trap, Light-Footed, and Lucky Star, let her hide her pools of blood and grunts of pain, slow Killers with trapped Pallets, and run silently.",
    legendary: false,
    licensed: true,
    license: "Alien"
  },
  {
    id: "rainCarradine",
    name: "Rain Carradine",
    image: "images/survivors/rainCarradine.png",
    chapter: "Legendary Outfit for Ellen Ripley",
    bio: "Rain Carradine lives and works together with her step-brother Andy, a Synthetic her late father had reprogrammed to be her caretaker, at a Weyland-Yutani Mining Colony on a ringed planet orbiting Jackson's Star. Desperate to get off the planet and travel to Yvaga III after her release from her working contract was not granted, she joins several friends on a mission to an allegedly decommissioned space station orbiting the planet and retrieve its cryo-chambers that would allow them to survive the nine years of travel time to Yvaga III.",
    legendary: true,
    licensed: true,
    license: "Alien"
  },
  {
    id: "alanWake",
    name: "Alan Wake",
    image: "images/survivors/alanWake.png",
    chapter: "CHAPTER 30.5: Alan Wake®",
    bio: "Alan Wake, bestselling author, knows what it means to push back the darkness. His personal Perks, Champion of Light, Boon: Illumination, and Deadline, make Flashlights more powerful, reveal chests and generators, and create more frequent Skill Checks.",
    legendary: false,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "sagaAnderson",
    name: "Saga Anderson",
    image: "images/survivors/sagaAnderson.png",
    chapter: "Legendary Outfit for Alan Wake",
    bio: `Saga Anderson is an FBI agent with a gifted track record due to her supernatural abilities of profiling victims and suspects in her "Mind Place" through telepathy. In 2023, she arrives to Bright Falls, Washington with her partner Agent Alex Casey to investigate the murder of former FBI Agent Robert Nightingale by the Cult of the Tree.`,
    legendary: true,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "roseMarigold",
    name: "Rose Marigold",
    image: "images/survivors/roseMarigold.png",
    chapter: "Legendary Outfit for Alan Wake",
    bio: `Rose Marigold is a waitress of the Oh Deer Diner and caregiver at the Valhalla Nursing Home in Bright Falls, Washington. She is also known for her obsession with the writer Alan Wake. When Alan arrived in Bright Falls in 2010, she was touched by the Dark Presence to lure him into a trap. The Dark Presence also possessed and killed her boyfriend, Rusty Johnston. After Alan disappeared into the Dark Place, Rose regained her sanity. Still affected by the Dark Presence, Rose became the town's "Lady of the Light", protecting the townspeople against the Taken like Cynthia Weaver before her.`,
    legendary: true,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "sableWard",
    name: "Sable Ward",
    image: "images/survivors/sableWard.png",
    chapter: "CHAPTER 31: All Things Wicked",
    bio: "Sable Ward is not afraid to embrace the darkness, or the power that lies within it. Her personal Perks, Invocation: Weaving Spiders, Strength in Shadows, and Wicked, allow her to quicken Repair progress, heal herself without a Med-Kit, and escape the Basement Hooks.",
    legendary: false
  },
  {
    id: "aestriYazar",
    name: "Aestri Yazar",
    image: "images/survivors/aestriYazar.png",
    chapter: "CHAPTER 32: Dungeons & Dragons",
    bio: "Aestri, fellow bard Baermar, and their troupe never back down from any adventure. Their personal Perks, Mirrored Illusion, Bardic Inspiration, and Still Sight, allow them to create illusions, help others repair Generators quicker, and see nearby Generators, Totems, and Chests.",
    legendary: false,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "baermarUraz",
    name: "Baermar Uraz",
    image: "images/survivors/baermarUraz.png",
    chapter: "CHAPTER 32: Dungeons & Dragons",
    bio: "Baermar, fellow bard Aestri, and their troupe never back down from any adventure. Their personal Perks, Mirrored Illusion, Bardic Inspiration, and Still Sight, allow them to create illusions, help others repair Generators quicker, and see nearby Generators, Totems, and Chests.",
    legendary: false,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "laraCroft",
    name: "Lara Croft",
    image: "images/survivors/laraCroft.png",
    chapter: "CHAPTER 32.5: Tomb Raider™",
    bio: "Lara Croft's instincts have been honed by her many dangerous expeditions. Her personal Perks, Finesse, Hardened, and Specialist, allow her to reveal the Killer instead of screaming, repair Generators more efficiently, and Rush Vault faster.",
    legendary: false,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "trevorBelmont",
    name: "Trevor Belmont",
    image: "images/survivors/trevorBelmont.png",
    chapter: "CHAPTER 33: Castlevania",
    bio: "Trevor Belmont, vampire hunter, knows his destiny is to vanquish evil. His personal Perks, Exultation, Moment of Glory, and Eyes of Belmont, allow him to see the Killer's aura, increase an item's rarity, and heal one health state.",
    legendary: false,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "alucard",
    name: "Alucard",
    image: "images/survivors/alucard.png",
    chapter: "Legendary Outfit for Trevor Belmont",
    bio: "After his mother was executed by local townspeople for supposedly being a witch, his father, Dracula, trained Adrian to become a warrior for the side of evil, versed in the Dark Arts. But the human side he inherited from Lisa alongside her words made Adrian question his father's will, and he eventually rebelled, aiming to destroy his army and hopefully make him reconsider his stance. That is when he decided to go by the name Alucard, a palindrome of his father's name, to represent his opposing beliefs.",
    legendary: true,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "somaCruz",
    name: "Soma Cruz",
    image: "images/survivors/somaCruz.png",
    chapter: "Legendary Outfit for Trevor Belmont",
    bio: "Soma Cruz is a seemingly normal young man who was caught in an eclipse which brought him to Dracula's castle. Guided by Genya Arikado, he ventures through the castle and later discovers the horrible truth: he is the reincarnation of Dracula. However, he resists his fate as the Dark Lord and manages to come out safely as a normal human.",
    legendary: true,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "richterBelmont",
    name: "Richter Belmont",
    image: "images/survivors/richterBelmont.png",
    chapter: "Legendary Outfit for Trevor Belmont",
    bio: "A descendant of Simon Belmont, Richter's life was shaped by witnessing his mother's murder by the vampire Olox, fueling his quest for vengeance and justice.",
    legendary: true,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "taurieCain",
    name: "Taurie Cain",
    image: "images/survivors/taurieCain.png",
    chapter: "CHAPTER 34: Doomed Course",
    bio: "Taurie Cain was raised as a Disciple of the Black Talon, condemned to be a sacrifice. Her personal Perks, Invocation: Treacherous Crows, Clean Break, and Shoulder the Burden, allow her to reveal the Killer's aura, heal after being Broken, and take on another Survivor's hook state.",
    legendary: false
  },
  {
    id: "orelaRose",
    name: "Orela Rose",
    image: "images/survivors/orelaRose.png",
    chapter: "CHAPTER 35.5: Steady Pulse",
    bio: "Orela Rose is a paramedic with a love for horror and a calming demeanor. Her personal Perks, Do No Harm, Duty of Care, and Rapid Response, allow her to heal Survivors faster, give Haste to other Survivors, and see the Killer's Aura upon gaining Exhausted.",
    legendary: false
  },
  {
    id: "rickGrimes",
    name: "Rick Grimes",
    image: "images/survivors/rickGrimes.png",
    chapter: "CHAPTER 36.5: The Walking Dead",
    bio: "Rick Grimes is the leader of a group of post-apocalyptic survivors. His personal Perks, Apocalyptic Ingenuity, Come and Get Me!, and Teamwork: Toughen Up, allow him to remake broken pallets, help vulnerable teammates, and be discreet when injured.",
    legendary: false,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "darylDixon",
    name: "Daryl Dixon",
    image: "images/survivors/darylDixon.png",
    chapter: "Legendary Outfit for Rick Grimes",
    bio: "Daryl Dixon is a skilled, crossbow-wielding hunter with a tough, redneck past, initially loyal to his abusive brother Merle but evolving into Rick Grimes' trusted right-hand man, known for his quiet intensity, survival prowess, and deep bond with Carol Peletier, ultimately becoming a pivotal leader.",
    legendary: true,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "michonneGrimes",
    name: "Michonne Grimes",
    image: "images/survivors/michonneGrimes.png",
    chapter: "CHAPTER 36.5: The Walking Dead",
    bio: "Michonne Grimes is a relentless protector living in a community of post-apocalyptic survivors. Her personal Perks, Conviction, Last Stand, and Teamwork: Throw Down, allow her to make one last push after being downed, stun the killer with a fast vault, and empower other Survivors after a tense chase.",
    legendary: false,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "maggieRhee",
    name: "Maggie Rhee",
    image: "images/survivors/maggieRhee.png",
    chapter: "Legendary Outfit for Michonne Grimes",
    bio: "Maggie Rhee (née Greene) is a resilient survivor, known for her strength, leadership as Hilltop Colony leader, marriage to Glenn Rhee, and motherhood, evolving from a sheltered farm girl to a hardened survivor.",
    legendary: true,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "veeBoonyasak",
    name: "Vee Boonyasak",
    image: "images/survivors/veeBoonyasak.png",
    chapter: "CHAPTER 37: Sinister Grace",
    bio: "Vee Boonyasak is an energetic drummer whose adventurous nature led to a doomed concert. Her personal Perks, Road Life, One-Two-Three-Four!, and Ghost Notes, allow her to leverage repair work into faster healing, strengthen allies' ability to repair and heal, and recover from Exhausted faster.",
    legendary: false
  }
];
