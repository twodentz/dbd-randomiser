// List of Survivor perks:
const survivorPerks = [
  { 
    id: "aceInTheHole", 
    name: "Ace in the Hole", 
    image: "images/perks/survivor/aceInTheHole.png", 
    owner: "Ace Visconti", 
    description: `Causes all regular Items you retrieve from a Chest to come equipped with 1 to 2 Add-ons:

    • First Slot: 100 % chance to be equipped with an Add-on of Visceral Rarity or lower.
    • Second Slot: 50/75/100 % chance to be equipped with an Add-on of Uncommon Rarity or lower.
    
    Ace in the Hole prevents any attached Add-ons on your currently held Item to be consumed upon escaping the Trial.`
  },
  { 
    id: "adrenaline", 
    name: "Adrenaline", 
    image: "images/perks/survivor/adrenaline.png", 
    owner: "Meg Thomas", 
    description: `Once the Exit Gates are powered, Adrenaline activates and triggers the following effects:

    • Heals you to the next Health State.
    • Grants a +50 % Haste Status Effect for 3 seconds.
    
    Adrenaline can be used while Exhausted and ignores an existing Status Effect. Adrenaline causes the Exhausted Status Effect for 60/50/40 seconds after use.` 
  },
  { 
    id: "aftercare", 
    name: "Aftercare", 
    image: "images/perks/survivor/aftercare.png", 
    owner: "Jeff Johansen", 
    description: `Unlocks potential in your Aura-reading ability:

    • You see the Auras of the 1/2/3 most recent Survivor(s) that helped you or vice versa:
        Rescued from a Hook.
        Completed a Healing action on.
    • They also see your Aura.
    
    Aftercare resets its effects when you are hooked by the Killer.`
  },
  { 
    id: "alert", 
    name: "Alert", 
    image: "images/perks/survivor/alert.png", 
    owner: "Feng Min", 
    description: `Whenever the Killer performs the Break or Damage Action, Alert triggers:
    • Their Aura is revealed to you for 3/4/5 seconds.`
  },
  { 
    id: "anyMeansNecessary", 
    name: "Any Means Necessary", 
    image: "images/perks/survivor/anyMeansNecessary.png", 
    owner: "Yui Kimura", 
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of dropped Pallets in the environment are revealed to you.
    
    While standing next to a dropped Pallet, press and hold the Active Ability button to trigger the following effect:
    • Resets the Pallet to its upright position over 5/4/3 seconds.`
  },
  { 
    id: "apocalypticIngenuity", 
    name: "Apocalyptic Ingenuity", 
    image: "images/perks/survivor/apocalypticIngenuity.png", 
    owner: "Rick Grimes", 
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of broken Pallets are revealed to you within 24/28/32 metres.
    
    After unlocking or rummaging through 2 Chests, Apocalyptic Ingenuity gains a special ability.

    While standing next to the location of a broken Pallet, press and hold the Active Ability button for 4 seconds to use it:
    • Rebuilds it as a Fragile Pallet. 
    • Fragile Pallets instantly break when dropped.`,
    licensed: true,
    license: "The Walking Dead"
  },
  { 
    id: "appraisal", 
    name: "Appraisal", 
    image: "images/perks/survivor/appraisal.png", 
    owner: "Élodie Rakoto", 
    description: `Start the Trial with 4 Tokens.

    While standing next to an unlocked and empty Chest, press and hold the Interaction button to perform the Rummage action:
    • Grants the ability to retrieve an extra Item from that Chest.
    • This consumes -1 Token and is limited to twice per Chest.

    Increases the Rummaging speed by 40/60/80 %.` 
  },
  { 
    id: "autodidact", 
    name: "Autodidact", 
    image: "images/perks/survivor/autodidact.png", 
    owner: "Adam Francis", 
    description: `Succeeding a Skill Check while healing another Survivor grants +1 Token, up to a maximum of 3/4/5 Tokens:

    • Suppresses Great Healing Skill Checks.
    • Causes Good Healing Skill Checks to grant Healing progress based on the number of accumulated Tokens:
        0 Tokens: -15 %.
        1 Token: +0 %.
        2 Tokens: +15 %.
        3 Tokens: +30 % (limit of Tier I).
        4 Tokens: +45 % (limit of Tier II).
        5 Tokens: +60 % (limit of Tier III).
    
    Autodidact is inactive when healing using a Med-Kit.` 
  },
  {
    id: "babysitter",
    name: "Babysitter",
    image: "images/perks/survivor/babysitter.png",
    owner: "Steve Harrington",
    description: `Whenever you unhook another Survivor, you benefit from the following effect:
    • The Aura of the Killer is revealed to you for 8 seconds.
    
    The unhooked Survivor benefits from the following effects instead for 20/25/30 seconds:
    • Suppresses the creation of their Scratch Marks and Pools of Blood
    • Increases the strength of their Haste Status Effect by +10 %.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "backgroundPlayer",
    name: "Background Player",
    image: "images/perks/survivor/backgroundPlayer.png",
    owner: "Renato Lyra",
    description: `Whenever the Killer picks up any other Survivor in the Dying State, Background Player activates for 10 seconds.
    
    While active, starting to run triggers the following effect:
    • Grants a +50 % Haste Status Effect for 5 seconds.
    
    Background Player cannot be used while Exhausted.
    Background Player causes the Exhausted Status Effect for 30/25/20 seconds after use.`
  },
  {
    id: "balancedLanding",
    name: "Balanced Landing",
    image: "images/perks/survivor/balancedLanding.png",
    owner: "Nea Karlsson",
    description: `While falling from height, you benefit from the following effects:

    • Suppresses all noises related to falling and landing.
    • Reduces the duration of the Stagger upon landing by -75 %.
    • Grants a +50 % Haste Status Effect for 3 seconds.
    
    Balanced Landing cannot be used while Exhausted.
    Balanced Landing causes the Exhausted Status Effect for 60/50/40 seconds after use.`
  },
  {
    id: "bardicInspiration",
    name: "Bardic Inspiration",
    image: "images/perks/survivor/bardicInspiration.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: `It's time to give your audience a show.
    Will you bring the house down or will you choke?
    Press the Active Ability button while standing and motionless to enter the Performance interaction that lasts up to 15 seconds and empowers other Survivors within 16 metres of your location.
    
    The empowering effect depends on the result of you rolling a d20 and lasts for 90 seconds after completing the Performance:

    • 1: You scream, but without notifying the Killer.
    • 2 - 10: Skill Checks grant +1 % Progression.
    • 11 - 19: Skill Checks grant +2 % Progression.
    • 20: Skill Checks grant +3 % Progression.
    
    Bardic Inspiration has a cool-down of 110/100/90 seconds after completing the Performance or cancelling it.`,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "betterTogether",
    name: "Better Together",
    image: "images/perks/survivor/betterTogether.png",
    owner: "Nancy Wheeler",
    description: `While repairing any Generator, you and the other Survivors benefit from the following primary effect:
    • The Aura of that Generator is revealed to all Survivors and highlighted in yellow.
    
    Whenever the Killer downs another Survivor while you are repairing, you benefit from the following secondary effect:
    • The Auras of all Survivors are revealed to you for 20/25/30 seconds.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "betterThanNew",
    name: "Better than New",
    image: "images/perks/survivor/betterThanNew.png",
    owner: "Rebecca Chambers",
    description: `Completing a Healing action on another Survivor grants them the following benefits until they receive damage again:
    • Increases their Action speeds for Blessing, Cleansing, Healing, and Unlocking by 12/14/16 %.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "biteTheBullet",
    name: "Bite the Bullet",
    image: "images/perks/survivor/biteTheBullet.png",
    owner: "Leon S. Kennedy",
    description: `Pain hurts you as much as anyone, but you would prefer others do not know that.
    When healing yourself or another Survivor, you benefit from the following effects:

    • Suppresses all noises related to Healing and Grunts of Pain.
    • Failed Healing Skill Checks do not trigger a Loud Noise Notification.
        Reduces the Penalty to 3/2/1 % of the total Progression.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "blastMine",
    name: "Blast Mine",
    image: "images/perks/survivor/blastMine.png",
    owner: "Jill Valentine",
    description: `After repairing Generators for the equivalent of 40 % of Progression, Blast Mine activates.
    
    While active, press the Active Ability button while standing next to a Generator to install a trap to it with a countdown of 100/110/120 seconds:
    • Trips half-way through the Killer attempting to damage the Trapped Generator:
        Stuns the Killer for 4 seconds.
        Blinds all Players within 12.5 metres of the Trapped Generator.
    
    The trap is deactivated after its countdown has elapsed or it is tripped.
    
    The Auras of Trapped Generators are revealed to all Survivors in yellow. `,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "bloodPact",
    name: "Blood Pact",
    image: "images/perks/survivor/bloodPact.png",
    owner: "Cheryl Mason",
    description: `It is as if a latent part of yourself has awakened.
    You feel like you can reach out beyond yourself for assistance.
    
    When either you or the Obsession become injured by any means, Blood Pact activates:

    • Your Auras are constantly revealed to one another.
    • Completing a Healing Action on the Obsession or having them complete one on yourself, grants both of you a 5/6/7 % Haste Status Effect.
        This effect lasts for as long as you both remain within 16 metres of one another.
    
    Blood Pact is temporarily disabled if you yourself are the Obsession.
    
    Reduces your chance of becoming the initial Obsession by reducing the default value by -100 %.
    The Killer can only be obsessed with one Survivor at a time.`,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "bloodRush",
    name: "Blood Rush",
    image: "images/perks/survivor/bloodRush.png",
    owner: "Renato Lyra",
    description: `After being unhooked by any means, Blood Rush activates for 40/50/60 seconds.
    While active, press the Active Ability button to trigger the following effect:

    • Instantly recover from an existing Exhausted Status Effect.
    
    Blood Rush does not cause the Exhausted Status Effect.
    Blood Rush is deactivated prematurely when performing a Conspicuous Action.
    Blood Rush deactivates after use and is disabled for the remainder of the Trial once the Exit Gates are powered.`
  },
  {
    id: "boilOver",
    name: "Boil Over",
    image: "images/perks/survivor/boilOver.png",
    owner: "Kate Denson",
    description: `You are a battler and do everything to escape a foe's grasp.
    
    While being carried by the Killer, the following effects apply:

    • Increases the strength of the Struggle Effects on the Killer from your Wiggling by 60/70/80 %.
    • Suppresses the ability of the Killer to read the Auras of all Hooks within 16 metres.
    • Grants +33 % of your current Wiggle progression upon landing, if the Killer drops from height.`
  },
  {
    id: "bond",
    name: "Bond",
    image: "images/perks/survivor/bond.png",
    owner: "Dwight Fairfield",
    description: `Unlocks potential in your Aura-reading ability:
    • The Auras of all other Survivors are revealed to you within 20/28/36 metres.`
  },
  {
    id: "boonCircleOfHealing",
    name: "Boon: Circle of Healing",
    image: "images/perks/survivor/boonCircleOfHealing.png",
    owner: "Mikaela Reid",
    description: `A Boon that offers comfort amidst the terror.
    
    Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Increases the Altruistic Healing speeds by 50/75/100 % when not using a Med-Kit.
    • If a Survivor is injured, their Aura is revealed to all other Survivors.
    
    Survivors can only be affected by one instance of Boon: Circle of Healing at a time.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`
  },
  {
    id: "boonDarkTheory",
    name: "Boon: Dark Theory",
    image: "images/perks/survivor/boonDarkTheory.png",
    owner: "Yoichi Asakawa",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Grants a +3 % Haste Status Effect.
        This effect lingers for 2/3/4 seconds after leaving the Boon Totem's range.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "boonExponential",
    name: "Boon: Exponential",
    image: "images/perks/survivor/boonExponential.png",
    owner: "Jonah Vasquez",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Increases the Recovery speed while in the Dying State by 90/95/100 %.
    • Unlocks the Self-Recovery ability, allowing them to fully recover from the Dying State.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem. `
  },
  {
    id: "boonIllumination",
    name: "Boon: Illumination",
    image: "images/perks/survivor/boonIllumination.png",
    owner: "Alan Wake",
    description: `Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem. 
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • The Auras of all Chests and Generators are highlighted to you in blue.
    
    Increases your Action speeds for Blessing and Cleansing by 6/8/10 % while you have a lit Boon Totem.
    Survivors can only be affected by one instance of Boon: Illumination at a time.
    
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem. `,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "boonShadowStep",
    name: "Boon: Shadow Step",
    image: "images/perks/survivor/boonShadowStep.png",
    owner: "Mikaela Reid",
    description: `A Boon that conceals the truth.
    
    Press and hold the Active Ability button on a Dull or Hex Totem to bless it and create a Boon Totem.
    All Survivors within 24 metres hear soft chimes ringing out and benefit from its Boon Effects:

    • Scratch Marks are suppressed.
    • Auras are hidden from The Killer.
        Both effects linger for 2/3/4 seconds after leaving the Boon Totem's range.
  
    Only one Totem can be blessed by your Boon Perks at a time and all of their effects are active on the same Boon Totem.`
  },
  {
    id: "borrowedTime",
    name: "Borrowed Time",
    image: "images/perks/survivor/borrowedTime.png",
    owner: 'William "Bill" Overbeck',
    description: `Whenever you unhook another Survivor, they benefit from the following effects:

    • Extends the duration of the Endurance Status Effect by 6/8/10 seconds to 16/18/20 seconds.
        Endurance is cancelled prematurely when performing a Conspicuous Action of any kind.
    • Extends the duration of the Haste Status Effect by +10 seconds to 20 seconds.`,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "botanyKnowledge",
    name: "Botany Knowledge",
    image: "images/perks/survivor/botanyKnowledge.png",
    owner: "Claudette Morel",
    description: `You benefit from the following permanent effect:
    • Increases your Healing speed by 30/40/50 %.`
  },
  {
    id: "breakdown",
    name: "Breakdown",
    image: "images/perks/survivor/breakdown.png",
    owner: "Jeff Johansen",
    description: `After you are unhooked by any means, Breakdown triggers its effects:
    
    • Instantly breaks that Hook.
        Increases its Auto-Repair timer to 180 seconds.
    • The Aura of the Killer is revealed to you for 4/5/6 seconds.`
  },
  {
    id: "breakout",
    name: "Breakout",
    image: "images/perks/survivor/breakout.png",
    owner: "Yui Kimura",
    description: `While within 5 metres of the Killer carrying another Survivor, the following effects apply:

    • Grants you a 6/8/10 % Haste Status Effect.
    • Increases the Wiggling speed of the carried Survivor by +25 %.
    
    Survivors can only be affected by one instance of Breakout at a time.`
  },
  {
    id: "buckleUp",
    name: "Buckle Up",
    image: "images/perks/survivor/buckleUp.png",
    owner: "Ashley J. Williams",
    description: `Whenever you are healing a dying Survivor, Buckle Up activates:
    During the Healing action, you and the dying Survivor benefit from the following primary effect:
    • The Aura of the Killer is revealed to you both.
    
    After completing the Healing action, the other Survivor benefits from the following secondary effects for 3/4/5 seconds:
    • Suppresses the creation of their Scratch Marks.
    • Grants them a +50 % Haste Status Effect.
    
    Buckle Up does not cause the Exhausted Status Effect.`,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "builtToLast",
    name: "Built to Last",
    image: "images/perks/survivor/builtToLast.png",
    owner: "Felix Richter",
    description: `While hiding inside a Locker with a depleted Item equipped, Built to Last triggers the following effect after 12/10/8 seconds:

    • Recharges the Item to one of the following percentages:
        First time: 99 %.
        Second time: 66 %.
        Third time: 33 %.
        
    Built to Last is disabled for the remainder of the Trial after triggering its effect for the third time.`
  },
  {
    id: "calmSpirit",
    name: "Calm Spirit",
    image: "images/perks/survivor/calmSpirit.png",
    owner: "Jake Park",
    description: `You experience the following effects during a Trial:

    • Nearby Crows no longer fly off and alert others to your presence, unless you come within touching distance.
    • Suppresses the urge to scream from any cause at all times.
    • Suppresses all noises related to interacting with the following Props:
        Chests
        Totems
    • Reduces the Action speeds for Blessing, Cleansing, and Unlocking by 40/35/30 %.`
  },
  {
    id: "camaraderie",
    name: "Camaraderie",
    image: "images/perks/survivor/camaraderie.png",
    owner: "Steve Harrington",
    description: `If you are hooked and enter the Struggle Phase, Camaraderie activates:

    • Pauses the Struggle Phase timer for 26/30/34 seconds as soon as any Survivor comes within 16 metres of your Hook.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "championOfLight",
    name: "Champion of Light",
    image: "images/perks/survivor/championOfLight.png",
    owner: "Alan Wake",
    description: `While shining a Flashlight, Champion of Light triggers its primary effect:

    • Grants a +50 % Haste Status Effect.
    
    After blinding the Killer by any means, Champion of Light triggers its secondary effect:

    • Causes the Killer to suffer from a -20 % Hindered Status Effect for 6 seconds. This effect does not stack.
    
    Champion of Light applies a cool-down of 60/50/40 seconds after blinding the Killer.`,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "chemicalTrap",
    name: "Chemical Trap",
    image: "images/perks/survivor/chemicalTrap.png",
    owner: "Ellen Ripley",
    description: `After repairing Generators for a total of 20 %, Chemical Trap activates:

    • Press the Active Ability button while near a dropped Pallet to install a Trap, which stays active for 40/50/60 seconds.
    • When the Killer breaks the Trapped Pallet, its Trap explodes, spraying the Killer with a chemical compound that causes the Killer to suffer from a -50 % Hindered Status Effect for 4 seconds.
    
    Chemical Trap deactivates after triggering successfully or once the timer runs out.
    
    The Auras of Trapped Pallets are revealed to all Survivors in yellow.`,
    licensed: true,
    license: "Alien"
  },
  {
    id: "clairvoyance",
    name: "Clairvoyance",
    image: "images/perks/survivor/clairvoyance.png",
    owner: "Mikaela Reid",
    description: `After cleansing or blessing a Totem, Clairvoyance activates.
    
    While active, press and hold the Use Item button when empty-handed to unlock your full Aura-reading potential:

    • The Auras of the following objects within 64 metres are revealed to you for as long as you uphold the interaction, up to a maximum of 10/11/12 seconds:
        Chests
        Exit Gate Switches
        Generators
        Hatch
        Hooks`
  },
  {
    id: "cleanBreak",
    name: "Clean Break",
    image: "images/perks/survivor/cleanBreak.png",
    owner: "Taurie Cain",
    description: `After completing a Healing action on another Survivor, Clean Break activates. Press the Active Ability button while being healed by another Survivor to trigger the following effects:

    • Suffer from the Broken Status Effect.
    • You are automatically healed 1 Health State after 80/70/60 seconds. This effect is cancelled prematurely if you enter the Dying State.
    
    Clean Break does not activate if you already suffer from Broken.
    
    Clean Break deactivates after healing you. `
  },
  {
    id: "comeAndGetMe",
    name: "Come and Get Me!",
    image: "images/perks/survivor/comeAndGetMe.png",
    owner: "Rick Grimes",
    description: `After unhooking a Survivor, while crouched and stationary, press the Active Ability button to trigger the following effects:

    • Suppresses the creation of Grunts of Pain, Pools of Blood, and Scratch Marks for all injured or dying Survivors within 24 metres of your location for the next 10/12.5/15 seconds.
    • Causes you to scream and reveal your Aura to the Killer for 5 seconds.`,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "conviction",
    name: "Conviction",
    image: "images/perks/survivor/conviction.png",
    owner: "Michonne Grimes",
    description: `After having completed a Healing action on another Survivor, whenever you are in the Dying State, Conviction activates.
    
    While active, press the Active Ability button after reaching at least 25 % Recovery progress to trigger the following effects:

    • Unlocks the Self-Recovery ability, allowing you to fully recover from the Dying State.
        Inflicts the Broken Status Effect.
        Causes you to automatically re-enter the Dying State after 20/25/30 seconds.`,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "correctiveAction",
    name: "Corrective Action",
    image: "images/perks/survivor/correctiveAction.png",
    owner: "Jonah Vasquez",
    description: `You start the Trial with 1/2/3 Token(s) and succeeding a Great Skill Check grants +1 Token, up to a maximum of 5 Tokens.
    
    While any other Survivor performs a skilful interaction that can trigger Skill Checks, they benefit from the following effects:

    • Converts any Failed Skill Check into a Good Skill Check.
        This consumes -1 Token.
    • The Aura of that Survivor is revealed to you for 6 seconds.
    
    Corrective Action does not apply to special Skill Checks.`
  },
  {
    id: "counterforce",
    name: "Counterforce",
    image: "images/perks/survivor/counterforce.png",
    owner: "Jill Valentine",
    description: `You benefit from the following permanent effect:

    • Increases the default value of your Cleansing speed to 125 %.
    
    Whenever you cleanse a Totem, Counterforce triggers the following effects:

    • Increases your Cleansing speed by a stack-able +25 %.
    • The Aura of the Totem farthest from your current location is revealed to you for 10/12/14 seconds.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "cutLoose",
    name: "Cut Loose",
    image: "images/perks/survivor/cutLoose.png",
    owner: "Thalita Lyra",
    description: `After performing a Rushed Vault action while being chased, Cut Loose activates for 4/5/6 seconds:

    • Suppresses all noises related to the Rushed Vault action, including the Loud Noise Notification for the Killer.
    
    While active, performing another Rushed Vault action resets the timer each time.
    
    Cut Loose has a cool-down of 45 seconds after use and the timer has elapsed. `
  },
  {
    id: "danceWithMe",
    name: "Dance With Me",
    image: "images/perks/survivor/danceWithMe.png",
    owner: "Kate Denson",
    description: `When performing a Rushed action to vault a Window or exit a Locker, Dance With Me triggers its effect:

    • Suppresses the creation of your Scratch Marks for 5 seconds.
    
    Dance With Me has a cool-down of 20/20/15 seconds.`
  },
  {
    id: "darkSense",
    name: "Dark Sense",
    image: "images/perks/survivor/darkSense.png",
    description: `Unlocks potential in your Aura-reading ability.
    
    Whenever a Generator is completed, Dark Sense activates:

    • The Aura of the Killer is revealed to you for 5/7/10 seconds once they come within 24 metres of your location.
    
    Dark Sense deactivates after use.`
  },
  {
    id: "deadHard",
    name: "Dead Hard",
    image: "images/perks/survivor/deadHard.png",
    owner: "David King",
    description: `After being unhooked by any means, Dead Hard activates:
    
    While injured and running, press the Active Ability button to trigger the following effect:

    • Grants the Endurance Status Effect for 0.5 seconds.
    
    Dead Hard cannot be used while Exhausted.
    
    Dead Hard causes the ExhaustedStatus Effect for 60/50/40 seconds.`
  },
  {
    id: "deadline",
    name: "Deadline",
    image: "images/perks/survivor/deadline.png",
    owner: "Alan Wake",
    description: `Whenever you are in the Injured State, Deadline activates:

    • Increases the Odds of triggering Skill Checks by 6/8/10 % while repairing or healing.
        Causes Skill Checks to appear in random places.
    • Reduces the penalty for missed Skill Checks by -50 %.`,
    licensed: true,
    license: "Alan Wake"
  },
  {
    id: "deception",
    name: "Deception",
    image: "images/perks/survivor/deception.png",
    owner: "Élodie Rakoto",
    description: `Press and hold the Sprint button while interacting with a Locker for the following effects:

    • Suppresses the creation of your Scratch Marks and Pools of Blood for 5 seconds.
    • Causes you to run past the targeted Locker, instead of entering it.
    • Causes its doors to swiftly open and close again, feining you having entered it in a rush.
    • Triggers a Loud Noise Notification for the Killer at its location.
    
    Deception has a cool-down of 25/20/15 seconds.`
  },
  {
    id: "decisiveStrike",
    name: "Decisive Strike",
    image: "images/perks/survivor/decisiveStrike.png",
    owner: "Laurie Strode",
    description: `Using whatever is at hand, you stab your aggressor in an ultimate attempt to escape.
    
    After being unhooked or unhooking yourself, Decisive Strike activates for the next 40/50/60 seconds:

    • When grabbed or picked up by the Killer, succeed a Skill Check to stab the Killer and escape from their grasp.
        Stuns the Killer for 4 seconds.
    • Causes you to become the next Obsession.
    
    Decisive Strike is deactivated once the Exit Gates are powered.
    
    Decisive Strike is disabled for the remainder of the Trial after use.
    
    Decisive Strike is deactivated prematurely when performing a Conspicuous Action.
    
    Increases your chance of becoming the initial Obsession by increasing the default value by +100 %.
    
    The Killer can only be obsessed with one Survivor at a time.`,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "dejaVu",
    name: "Déjà Vu",
    image: "images/perks/survivor/dejaVu.png",
    description: `Unlocks potential in your Aura-reading ability:

    • The Auras of whichever 3 Generators are currently in closest proximity to one another are revealed to you.
    • Increases your Repair speed on those Generators by 4/5/6 %.`
  },
  {
    id: "deliverance",
    name: "Deliverance",
    image: "images/perks/survivor/deliverance.png",
    owner: "Adam Francis",
    description: `After safely unhooking another Survivor, Deliverance activates:

    • Grants the ability to perform a successful Self-Unhook at any point during the first Hook Stage.
    • Causes the Broken Status Effect for 100/80/60 seconds after unhooking yourself.
    
    Deliverance cannot be used during the second Hook Stage or if you are hooked as the Last Survivor Standing.
    
    Deliverance is disabled for the remainder of the Trial after use.`
  },
  {
    id: "desperateMeasures",
    name: "Desperate Measures",
    image: "images/perks/survivor/desperateMeasures.png",
    owner: "Felix Richter",
    description: `Whenever any Survivor, including yourself, is not in the Healthy State, Desperate Measures activates:

    • Increases your Action speeds for Healing and Unhooking by a stack-able 16/18/20 % per injured, dying, or hooked Survivor, up to a maximum of 64/72/80 %.`
  },
  {
    id: "detectivesHunch",
    name: "Detective's Hunch",
    image: "images/perks/survivor/detectivesHunch.png",
    owner: "Detective David Tapp",
    description: `Unlocks potential in your Aura-reading ability.
    
    Whenever a Generator is completed, Detective's Hunch triggers its effect:

    • The Auras of the following objects within 32/48/64 metres of your location are revealed to you for 20 seconds:
        Chests
        Generators
        Totems`,
    licensed: true,
    license: "SAW"
  },
  {
    id: "distortion",
    name: "Distortion",
    image: "images/perks/survivor/distortion.png",
    owner: "Jeff Johansen",
    description: `Start the Trial with 1 Token.
    
    Whenever the Killer attempts to read your Aura, Distortion automatically consumes -1 Token to trigger the following effects for 8/10/12 seconds:

    • Blocks your Aura from being read.
    • Suppresses the creation of your Scratch Marks.
    
    Distortion recharges +1 Token every 15 seconds of being chased by the Killer, and can hold 2 Tokens.
    
    Distortion does not trigger its effects while in the Dying State.`
  },
  {
    id: "diversion",
    name: "Diversion",
    image: "images/perks/survivor/diversion.png",
    owner: "Adam Francis",
    description: `After staying in the Terror Radius without being chased for 30/25/20 seconds, Diversion activates.
    
    While active, press the Active Ability button while crouched and motionless to throw a pebble in the direction you are facing:

    • Creates a distraction for the Killer at its landing location 20 metres away:
        Triggers a Loud Noise Notification.
        Creates fake Scratch Marks.
    
    Diversion deactivates after use.`
  },
  {
    id: "doNoHarm",
    name: "Do No Harm",
    image: "images/perks/survivor/doNoHarm.png",
    owner: "Orela Rose",
    description: `When healing another Survivor, depending on their accumulated Hook Stages, you benefit from the following effects:

    • Increases your Altruistic Healing speed by 30/40/50 % per Hook Stage, up to a maximum of 60/80/100 %.
    • Increases the Progression bonus of Great Healing Skill Checks by +3 % per Hook Stage, up to a maximum of +6 %.`
  },
  {
    id: "dramaturgy",
    name: "Dramaturgy",
    image: "images/perks/survivor/dramaturgy.png",
    owner: "Nicolas Cage",
    description: `Whenever you are at full health, Dramaturgy activates.
    
    While active, press the Active Ability button while running to run with knees high for 0.5 seconds before benefitting from the following primary effect:

    • Grants a +25 Haste Status Effect for 2 seconds.
    
    Afterwards, Dramaturgy triggers any one of the following secondary effects, but never the same one twice in a row:

    • Grants a second instance of the primary Haste Status Effect.
    • Inflicts the Exposed Status Effect for 12 seconds.
    • Causes you to scream.
    • Grants a randomly selected Rare Item pre-equipped with a random selection of Add-ons.
        This causes you to automatically drop any previously held Item.
      
    Dramaturgy cannot be used while Exhausted.
    
    Dramaturgy causes the Exhausted Status Effect for 60/50/40 seconds.`,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "dutyOfCare",
    name: "Duty of Care",
    image: "images/perks/survivor/dutyOfCare.png",
    owner: "Orela Rose",
    description: `While healthy, taking a Protection Hit causes all other Survivors within 12 metres of your location to benefit from the following effect:

    • Grants them a +25 % Haste Status Effect for 4/5/6 seconds.`
  },
  {
    id: "empathicConnection",
    name: "Empathic Connection",
    image: "images/perks/survivor/empathicConnection.png",
    owner: "Yoichi Asakawa",
    description: `You benefit from the following permanent primary effect:

    • Increases your Altruistic Healing speed by 25/30/35 %.
    
    Whenever any other Survivor is injured, Empathic Connection applies its secondary effect:

    • Your Aura as a potential Healer is revealed to them.`,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "empathy",
    name: "Empathy",
    image: "images/perks/survivor/empathy.png",
    owner: "Claudette Morel",
    description: `Unlocks potential in your Aura-reading ability:

    • The Auras of injured or dying Survivors are revealed to you within 64/96/128 metres.`
  },
  {
    id: "exultation",
    name: "Exultation",
    image: "images/perks/survivor/exultation.png",
    owner: "Trevor Belmont",
    description: `While holding an Item, stunning the Killer by dropping a Pallet causes the following effects:

    • Recharges the Item by +75 %.
    • Upgrades its Rarity to the next available Tier.
    
    Exultation has a cool-down of 30/25/20 seconds.`,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "eyesOfBelmont",
    name: "Eyes of Belmont",
    image: "images/perks/survivor/eyesOfBelmont.png",
    owner: "Trevor Belmont",
    description: `Whenever a Generator is completed, the Aura of the Killer is revealed to you for 1/2/3 seconds.

    Extends the duration of all instances of the Killer's Aura being revealed to you by +2 seconds.
    
    Eyes of Belmont benefits from its own effect.`,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "fastTrack",
    name: "Fast Track",
    image: "images/perks/survivor/fastTrack.png",
    owner: "Yun-Jin Lee",
    description: `Whenever a Survivor other than yourself is hooked, Fast Track is granted 1/2/3 Token(s), up to a maximum of 9/18/27 Tokens.

    • Succeeding a Great Repair Skill Check consumes all accumulated Tokens.
    • Increases the bonus Progression awarded for succeeding that Skill Check by a stack-able +1 % per Token.`
  },
  {
    id: "finesse",
    name: "Finesse",
    image: "images/perks/survivor/finesse.png",
    owner: "Lara Croft",
    description: `The threat of danger can motivate any creature to strengthen its resolve.
    
    Whenever you are healthy, Finesse activates:
    • Increases your Vaulting speed for a Fast Vault by +20 %.
    
    Finesse has a cool-down of 40/35/30 seconds after performing a Fast Vault.`,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "fixated",
    name: "Fixated",
    image: "images/perks/survivor/fixated.png",
    owner: "Nancy Wheeler",
    description: `You benefit from the following permanent effects:

    • Increases your Walking speed by 10/15/20 %.
    • Unlocks the ability to see your own Scratch Marks.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "flashbang",
    name: "Flashbang",
    image: "images/perks/survivor/flashbang.png",
    owner: "Leon S. Kennedy",
    description: `You have adapted to a world in chaos and making what you can from the debris.
    
    After repairing Generators for a total of 50/45/40 %, Flashbang activates:
    • Press the Active Ability button while hiding inside a Locker to craft a Flash Grenade.
    
    Flashbang deactivates after use.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "flipFlop",
    name: "Flip-Flop",
    image: "images/perks/survivor/flipFlop.png",
    owner: "Ashley J. Williams",
    description: `Recovering in the Dying State also charges the Wiggle Meter at 50 % of the Recovery rate and up to a maximum of 40/45/50 % of Wiggle Progression.`,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "fogwise",
    name: "Fogwise",
    image: "images/perks/survivor/fogwise.png",
    owner: "Vittorio Toscano",
    description: `Unlocks potential in your Aura-reading ability while repairing Generators:
    
    • The Aura of the Killer is revealed to you for 4/5/6 seconds after succeeding a Great Repair Skill Check.`
  },
  {
    id: "forThePeople",
    name: "For the People",
    image: "images/perks/survivor/forThePeople.png",
    owner: "Zarina Kassir",
    description: `While healthy and healing another Survivor without using a Med-Kit, press the Active Ability button to trigger the following effects:

    • Trade 1 Health State with the other Survivor:
        Instantly heals them to the Injured State, if they were dying or suffering from the Deep Wound Status Effect.
        Instantly heals them to full health, if they were injured.
    • You yourself become injured and suffer from the Broken Status Effect for 80/70/60 seconds.
    • You become the Killer's Obsession, if not already.
    
    Reduces your chance of becoming the initial Obsession by reducing the default value by -100 %.
    
    The Killer can only be obsessed with one Survivor at a time.`
  },
  {
    id: "friendlyCompetition",
    name: "Friendly Competition",
    image: "images/perks/survivor/friendlyCompetition.png",
    owner: "Thalita Lyra",
    description: `Each time you complete a Generator together with at least one other Survivor, Friendly Competition activates:

    • Increases the Repair speed of all participating Survivors, including yourself, by +5 % for 100/110/120 seconds.`
  },
  {
    id: "ghostNotes",
    name: "Ghost Notes",
    image: "images/perks/survivor/ghostNotes.png",
    owner: "Vee Boonyasak",
    description: `While suffering from the Exhausted Status Effect, you benefit from the following effects:

    • Causes your Scratch Marks to disappear +50 % faster.
    • Increases your Recovery rate from that Status Effect by 5/7.5/10 %.
    
    Ghost Notes does not cause the Exhausted Status Effect.`
  },
  {
    id: "hardened",
    name: "Hardened",
    image: "images/perks/survivor/hardened.png",
    owner: "Lara Croft",
    description: `Live long enough, and survival will run in your blood.
    
    After unlocking a Chest and either blessing or cleansing a Totem, Hardened activates:

    • Suppresses the urge to scream from any cause and instead causes the Aura of the Killer to be revealed to you for 3/4/5 seconds.`,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "headOn",
    name: "Head On",
    image: "images/perks/survivor/headOn.png",
    owner: "Jane Romero",
    description: `After hiding in a Locker for 3 seconds, Head On activates.
    
    While active, hold the Sprint button while exiting the Locker to trigger its effect:

    • Causes you to forcefully launch yourself from the Locker, stunning the Killer if they are too close to it:
        Has a Stun range of 2.5 metres.
        Has a Stun duration of 3 seconds.
    • Triggers a Loud Noise Notification for the Killer upon missing.
    
    Head On cannot be used while Exhausted.
    
    Head On causes the Exhausted Status Effect for 60/50/40 seconds on a successful stun.`
  },
  {
    id: "hope",
    name: "Hope",
    image: "images/perks/survivor/hope.png",
    description: `Once the Exit Gates are powered, Hope activates for the remainder of the Trial:
    • Grants a 3/4/5 % Haste Status Effect.`
  },
  {
    id: "hyperfocus",
    name: "Hyperfocus",
    image: "images/perks/survivor/hyperfocus.png",
    owner: "Rebecca Chambers",
    description: `Succeeding a Great Skill Check while repairing or healing grants +1 Token, up to a maximum of 6 Tokens:

    • Increases the Skill Check Trigger odds and Pointer-Rotation speed by +4 % per Token each, up to a maximum of +24 %.
    • Increases the Skill Check Bonus progression by 10/20/30 % of its base value per Token, up to a maximum of 60/120/180 %.
    
    Hyperfocus loses all Tokens after succeeding just a Good Skill Check, failing one, or if the action is interrupted by any means.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "innerFocus",
    name: "Inner Focus",
    image: "images/perks/survivor/innerFocus.png",
    owner: "Haddie Kaur",
    description: `You have honed your ability to see through the haze of the Ravage.

    • Grants the ability to see the Scratch Marks of other Survivors.
    • Whenever another Survivor loses a Health State due to the Killer, the Aura of the latter is revealed to your for 6/8/10 seconds.`
  },
  {
    id: "innerStrength",
    name: "Inner Strength",
    image: "images/perks/survivor/innerStrength.png",
    owner: "Nancy Wheeler",
    description: `After cleansing a Totem of any kind, Inner Strength activates.
    
    While active, hiding inside a Locker for 10/9/8 seconds triggers the following effect:

    • Heals you to the next Health State.
    
    Inner Strength deactivates after use.
    
    Inner Strength cannot be used while suffering from the Broken.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "invocationTreacherousCrows",
    name: "Invocation: Treacherous Crows",
    image: "images/perks/survivor/invocationTreacherousCrows.png",
    owner: "Taurie Cain",
    description: `When in the Basement near the circle, press the Active Ability button to begin the Invocation, which takes 60 seconds to complete.
    
    During an Invocation, your Aura is revealed to all other Survivors and they can join in, accelerating the process by +100 %, if they too have an Invocation Perk equipped, or by +50 %, if they have not.
    
    Once the Invocation is completed, the following effects apply:

    • Whenever the Killer scares a Crow while a Survivor is inside their Terror Radius, their Aura is revealed to all Survivors for 1/1.5/2 seconds.
    • You automatically enter the Injured State from any previous Health State, and suffer from the Broken Status Effect for the remainder of the Trial.`
  },
  {
    id: "invocationWeavingSpiders",
    name: "Invocation: Weaving Spiders",
    image: "images/perks/survivor/invocationWeavingSpiders.png",
    owner: "Sable Ward",
    description: `When in the Basement near the circle, press the Active Ability button to begin the Invocation, which takes 60 seconds to complete.
    
    During an Invocation, your Aura is revealed to all other Survivors and they can join in, accelerating the process by +100 %, if they too have an Invocation Perk equipped, or by +50 %, if they have not.
    
    Once the Invocation is completed, the following effects apply:

    • Permanently reduces the Repair Charges requirement of all Generators in the Trial by 8/9/10 Charges.
    • You automatically enter the Injured State from any previous Health State, and suffer from the Broken Status Effect for the remainder of the Trial.
    
    Completing this Invocation disables all other instances of Invocation: Weaving Spiders for the remainder of the Trial.`
  },
  {
    id: "ironWill",
    name: "Iron Will",
    image: "images/perks/survivor/ironWill.png",
    owner: "Jake Park",
    description: `While injured, you benefit from the following effects:

    • Reduces the volume of Grunts of Pain by 80/90/100 %.
    
    Iron Will cannot be used while Exhausted, but does not cause the Status Effect.`
  },
  {
    id: "kindred",
    name: "Kindred",
    image: "images/perks/survivor/kindred.png",
    description: `Unlocks potential in your Aura-reading ability.
    
    Whenever any Survivor is hooked, Kindred activates and applies the following effects:

    • The Aura of the Killer is revealed to all Survivors whenever the Killer comes within 8/12/16 metres of the Hook.
    • If you are the Hooked Survivor, the Auras of all Survivors are revealed to each other.
    • If you are not the Hooked Survivor, the Auras of all other Survivors are only revealed to you.`
  },
  {
    id: "lastStand",
    name: "Last Stand",
    image: "images/perks/survivor/lastStand.png",
    owner: "Michonne Grimes",
    description: `After staying in the Terror Radius without being chased for 120/105/90 seconds, Last Stand activates.
    
    While active, perform a Rushed Vault action to trigger its effect:

    • Stuns the Killer for 3 seconds, if they are within 2.5 metres of that Vault location.
    
    Last Stand is disabled for the remainder of the Trial after use.`,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "leader",
    name: "Leader",
    image: "images/perks/survivor/leader.png",
    owner: "Dwight Fairfield",
    description: `All other Survivors within 10 metres of your location benefit from the following effect:

    • Increases their Action speeds for Cleansing, Gate-Opening, Healing, Sabotaging, Unhooking, and Unlocking by 20/25/30 %.
        This effect lingers for 15 seconds after leaving its Area of Effect.
        
    Survivors can only be affected by one instance of Leader at a time.`
  },
  {
    id: "leftBehind",
    name: "Left Behind",
    image: "images/perks/survivor/leftBehind.png",
    owner: 'William "Bill" Overbeck',
    description: `Once you are the Last Survivor Standing, Left Behind activates:
    • The Aura is revealed to you within 24/28/32 metres.`,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "lightFooted",
    name: "Light-Footed",
    image: "images/perks/survivor/lightFooted.png",
    owner: "Ellen Ripley",
    description: `Whenever you are healthy, Light-Footed activates:
    • Suppresses the sound of your footsteps while running.
    
    Light-Footed has a cool-down of 14/12/10 seconds after performing a Rush Vault action.`,
    licensed: true,
    license: "Alien"
  },
  {
    id: "lightweight",
    name: "Lightweight",
    image: "images/perks/survivor/lightweight.png",
    description: `Your running is light and soft, making your tracks harder to follow.

    • Reduces the Lifetime of your Scratch Marks by 3/4/5 seconds.
    • Reduces the Spawn chance of patches of Scratch Marks by -60 %, making their spacing inconsistent.`
  },
  {
    id: "lithe",
    name: "Lithe",
    image: "images/perks/survivor/lithe.png",
    owner: "Feng Min",
    description: `Whenever you perform a Rushed Vault action, Lithe triggers its effect:
    • Grants a +50 % Haste Status Effect for 3 seconds.
    
    Lithe cannot be used while Exhausted.
    
    Lithe causes the Exhausted Status Effect for 60/50/40 seconds.`
  },
  {
    id: "lowProfile",
    name: "Low Profile",
    image: "images/perks/survivor/lowProfile.png",
    owner: "Ada Wong",
    description: `Whenever you are the only Survivor in the Trial not currently incapacitated by either being downed, carried, or hooked, Low Profile activates:
    • Suppresses your Grunts of Pain and the creation of Pools of Blood and Scratch Marks for 70/80/90 seconds.
    
    Low Profile deactivates after use and only accounts for Survivors still participating in the Trial.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "luckyBreak",
    name: "Lucky Break",
    image: "images/perks/survivor/luckyBreak.png",
    owner: "Yui Kimura",
    description: `Whenever you are in the Injured State, Lucky Break activates:
    • Suppresses the creation of Pools of Blood and Scratch Marks for up to 40/50/60 seconds.
    
    Whenever you are healing another Survivor, Lucky Break recharges by the same amount of time spent performing the Healing action, up to its initial maximum.
    
    Lucky Break deactivates once its timer runs out or whenever your Health State updates to any other but the Injured State.`
  },
  {
    id: "luckyStar",
    name: "Lucky Star",
    image: "images/perks/survivor/luckyStar.png",
    owner: "Ellen Ripley",
    description: `While hiding inside a Locker, you benefit from the following effect:
    • Suppresses your Grunts of Pain.
    
    After exiting the Locker you benefit from the following effects for 30 seconds:

    • Suppresses your Grunts of Pain and the creation of Pools of Blood.
    • The Auras of all other Survivors are revealed to you.
    • The Aura of the nearest Generator is revealed to you and highlighted in yellow.
    
    Lucky Star has a cool-down of 35/30/25 seconds.`,
    licensed: true,
    license: "Alien"
  },
  {
    id: "madeForThis",
    name: "Made for This",
    image: "images/perks/survivor/madeForThis.png",
    owner: "Gabriel Soma",
    description: `Whenever you are in the Injured State, Made for This activates.
    
    While active, completing a Healing action on another Survivor triggers the following primary effect:

    • Grants the Endurance Status Effect for 6/8/10 seconds.
        Endurance is cancelled prematurely when performing a Conspicuous Action of any kind.
        
    While active and suffering from the Deep Wound Status Effect, running triggers the following secondary effect:

    • Grants a 1/2/3 % Haste Status Effect.`
  },
  {
    id: "mettleOfMan",
    name: "Mettle of Man",
    image: "images/perks/survivor/mettleOfMan.png",
    owner: "Ashley J. Williams",
    description: `After triggering a third Protection Hit by any means, Mettle of Man activates:

    • While in the Injured State, Mettle of Man shields you from the next attack that would put you into the Dying State.
    • After healing back to full health by any means, Mettle of Man reveals your Aura to the Killer whenever you are farther than 12/14/16 metres from their location.
    
    Mettle of Man deactivates after entering the Dying State by any means.
    
    Increases your chance of becoming the initial Obsession by increasing the default value by +100 %.
    
    The Killer can only be obsessed with one Survivor at a time.`,
    licensed: true,
    license: "Ash vs. Evil Dead"
  },
  {
    id: "mirroredIllusion",
    name: "Mirrored Illusion",
    image: "images/perks/survivor/mirroredIllusion.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: `A familiar spell made unfamiliar in this corrupted landscape.
    
    After repairing Generators for a total of 20 %, Mirrored Illusion activates:
    • Press the Active Ability button when next to either a Chest, Exit Gate, Generator, or a Totem to spawn a Static Illusion that lasts for 40/50/60 seconds.
    
    Mirrored Illusion deactivates after triggering successfully.`,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "momentOfGlory",
    name: "Moment of Glory",
    image: "images/perks/survivor/momentOfGlory.png",
    owner: "Trevor Belmont",
    description: `After performing the Unlocking or Rummaging action on Chests a total of 2 times, Moment of Glory activates:

    • When you become injured, you instantly suffer from the Broken Status Effect.
    • You are automatically healed 1 Health State after 80/70/60 seconds.
        This effect is cancelled prematurely if you enter the Dying State.
        
    Moment of Glory does not activate if you already suffer from the Broken Status Effect.
    
    Moment of Glory deactivates after healing you.`,
    licensed: true,
    license: "Castlevania"
  },
  {
    id: "noMither",
    name: "No Mither",
    image: "images/perks/survivor/noMither.png",
    owner: "David King",
    description: `You suffer permanently from the Broken Status Effect in exchange for the following benefits:

    • Suppresses the creation of Pools of Blood.
    • Suppresses your Grunts of Pain while in the Injured State or in the Dying State.
    • Unlocks the Self-Recovery ability, allowing you to fully recover from the Dying State:
        Increases the Recovery speed by 15/20/25 %.`
  },
  {
    id: "noOneLeftBehind",
    name: "No One Left Behind",
    image: "images/perks/survivor/noOneLeftBehind.png",
    description: `Once the Exit Gates are powered, No One Left Behind activates:

    • The Auras of all other Survivors are revealed to you.
    • Increases your Action speeds for Healing and Unhooking by 50/75/100 %.
    • Increases the strength and duration of the Haste Status Effect granted to Survivors you unhook by +10 % and +5 seconds respectively:
        Causes them to benefit from a 20 % Haste Status Effect for 15 seconds.`
  },
  {
    id: "objectOfObsession",
    name: "Object of Obsession",
    image: "images/perks/survivor/objectOfObsession.png",
    owner: "Laurie Strode",
    description: `Whenever the Killer reads your Aura, Object of Obsession activates for the same duration as their Aura-reading action:

    • The Aura of the Killer is revealed to you.
    • Increases your Action speeds for Cleansing, Healing, and Repairing actions by 2/4/6 %.
    
    If you are the Killer's current Obsession, the following effect triggers automatically every 30 seconds:

    • Your Aura is revealed to the Killer for 3 seconds.
    
    Increases your chance of becoming the initial Obsession by increasing the default value by +100 %.
    
    The Killer can only be obsessed with one Survivor at a time.`,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "offTheRecord",
    name: "Off the Record",
    image: "images/perks/survivor/offTheRecord.png",
    owner: "Zarina Kassir",
    description: `After being unhooked or unhooking yourself, Off the Record activates for 30/35/40 seconds:

    • Blocks your Aura from being revealed.
    • Suppresses your Grunts of Pain while in the Injured State.
    • Suppresses the creation of your Scratch Marks.
    • Grants the Endurance Status Effect.
        Endurance is cancelled prematurely when performing a Conspicuous Action of any kind.
        
    Off the Record deactivates prematurely and is disabled for the remainder of the Trial upon powering the Exit Gates.`
  },
  {
    id: "oneTwoThreeFour",
    name: "One-Two-Three-Four!",
    image: "images/perks/survivor/oneTwoThreeFour.png",
    owner: "Vee Boonyasak",
    description: `While standing and idle, press the Active Ability button to start a Performance:

    • Lasts for up to 15 seconds.
    • Empowers Survivors within 16 metres of your location.
    • Triggers continuous Skill Checks.
    
    After successfully completing the Performance, empowered Survivors performing Healing or Repairing actions benefit from the following effect for 90 seconds:

    • Increases the chances of triggering Skill Checks by +20 %.
    
    One-Two-Three-Four! has a cool-down of 110/100/90 seconds after cancelling or completing the Performance.`
  },
  {
    id: "openHanded",
    name: "Open-Handed",
    image: "images/perks/survivor/openHanded.png",
    owner: "Ace Visconti",
    description: `All Survivors benefit from the following permanent effect:

    • Increases the radius of all Aura-reading abilities by 8/12/16 metres.
    
    Open-Handed only affects Auras that emanate from the Survivor causing them.
    
    Survivors can only be affected by one instance of Open-Handed at a time.`
  },
  {
    id: "overcome",
    name: "Overcome",
    image: "images/perks/survivor/overcome.png",
    owner: "Jonah Vasquez",
    description: `Whenever you enter the Injured State from full health, Overcome triggers its effect:

    • Extends the duration of the On-hit Sprint boost by +2 seconds.
    
    Overcome cannot be used while Exhausted.
    
    Overcome causes the Exhausted Status Effect for 60/50/40 seconds.`
  },
  {
    id: "overzealous",
    name: "Overzealous",
    image: "images/perks/survivor/overzealous.png",
    owner: "Haddie Kaur",
    description: `Fighting back against the Ravage motivates and inspires you.
    
    After cleansing or blessing a Totem, Overzealous activates:

    • Dull Totem: Increases your Repair speed by 8/9/10 %.
    • Hex Totem: Increases your Repair speed by 16/18/20 %.
    
    Overzealous deactivates after losing a Health State by any means.`
  },
  {
    id: "parentalGuidance",
    name: "Parental Guidance",
    image: "images/perks/survivor/parentalGuidance.png",
    owner: "Yoichi Asakawa",
    description: `After stunning the Killer by any means, Parental Guidance triggers its effect:

    • Suppresses your Grunts of Pain and the creation of Scratch Marks and Pools of Blood for 5/6/7 seconds.`,
    licensed: true,
    license: "The Ring"
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    image: "images/perks/survivor/pharmacy.png",
    owner: "Quentin Smith",
    description: `While unlocking a Chest, you benefit from the following effects:

    • Increases the Unlocking speed by 75/100/125 %.
    • Reduces the audible range of all noises related to the Unlocking interaction by -12 metres.
    • Guarantees an Emergency Med-Kit after completing the interaction.`,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "plotTwist",
    name: "Plot Twist",
    image: "images/perks/survivor/plotTwist.png",
    owner: "Nicolas Cage",
    description: `Whenever you are in the Injured State, Plot Twist activates.
    
    While active, press the Active Ability button while crouching and stationary to trigger the following primary effects:

    • Silently enter the Dying State without notifying the Killer.
    • Suppresses your Grunts of Pain and the creation of Pools of Blood.
    • Unlocks the Self-Recovery ability, allowing you to fully recover from the Dying State:
        Increases the Recovery speed by +25 %.
        
    After self-recovering from the Dying State, you benefit from the following secondary effects:

    • Instantly heals you to full health.
    • Grants a +50 % Haste Status Effect for 2/3/4 seconds.
    
    Plot Twist is disabled after recovering by any means, but can be reactivated once more upon powering the Exit Gates.`,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "plunderersInstinct",
    name: "Plunderer's Instinct",
    image: "images/perks/survivor/plunderersInstinct.png",
    description: `Unlocks potential in your Aura-reading ability:

    • The Auras of the following objects are revealed to you within 32/48/64 metres:
        Closed Chests located in the environment.
        Items sitting inside opened Chests.
        Items dropped in the environment.
        
    When unlocking or rummaging through Chests, you benefit from the following effect:

    • Increases the chances of finding rarer Items by +50 %.`
  },
  {
    id: "poised",
    name: "Poised",
    image: "images/perks/survivor/poised.png",
    owner: "Jane Romero",
    description: `Whenever a Generator is completed, Poised triggers its primary effect:

    • Suppresses the creation of your Scratch Marks for 20/25/30 seconds.
    
    Whenever you start repairing a Generator for the first time, Poised triggers its secondary effect:

    • The Aura of the Killer is revealed to you for 8 seconds.`
  },
  {
    id: "potentialEnergy",
    name: "Potential Energy",
    image: "images/perks/survivor/potentialEnergy.png",
    owner: "Vittorio Toscano",
    description: `While repairing a Generator, press the Active Ability button to Store Potential Energy:

    • Repair Charges no longer progress the Generator and are instead converted into Tokens:
        Gain 1 Token for the equivalent of 1 % Progression, up to a maximum of 10/15/20 Tokens.
    • Failed Repair Skill Checks incur a penalty depending on how many Tokens have been accumulated:
        Not at Token Limit: Reduces the number of accumulated Tokens by -20 %.
        At Token Limit: Regresses the Generator by -10 %.
        
    Having accumulated at least 1 Token, press the Active Ability button again on the same or a different Generator to Release Potential Energy:

    • Consumes all accumulated Tokens.
    • Instantly progresses that Generator by +1 % per Token.
    
    Potential Energy deactivates after use or losing a Health State by any means, and will lose all accumulated Tokens in case of the latter.`
  },
  {
    id: "powerStruggle",
    name: "Power Struggle",
    image: "images/perks/survivor/powerStruggle.png",
    owner: "Élodie Rakoto",
    description: `Whenever you are in the Dying State, you benefit from the following primary effect:

    • The Auras of upright Pallets are revealed to you.
    
    After reaching 25/20/15 % of Wiggle progression, Power Struggle unlocks the following secondary effect:

    • Grants the ability to drop a nearby Pallet while being carried by the Killer.
        Stuns the Killer and causes them to release you from their grasp.
        
    Power Struggle deactivates after use.`
  },
  {
    id: "premonition",
    name: "Premonition",
    image: "images/perks/survivor/premonition.png",
    description: `Projects an invisible cone in the direction you are looking, with a Detection angle of 45 ° and a range of 36 metres:

    • Triggers an audio cue when detecting the Killer within it.
    
    Premonition has a cool-down of 60/45/30 seconds.`
  },
  {
    id: "proveThyself",
    name: "Prove Thyself",
    image: "images/perks/survivor/proveThyself.png",
    owner: "Dwight Fairfield",
    description: `Increases the Repair speed by a stack-able 6/8/10 % per other Survivor within 4 metres of your location, up to a maximum of 18/24/30 %.
    
    Prove Thyself extends its effect to all Survivors within its range.
    
    Survivors can only be affected by one instance of Prove Thyself at a time.`
  },
  {
    id: "quickAndQuiet",
    name: "Quick & Quiet",
    image: "images/perks/survivor/quickAndQuiet.png",
    owner: "Meg Thomas",
    description: `When performing a Rushed action to vault across Pallets or Windows, or to enter or exit Lockers, Quick & Quiet triggers its effect:

    • Suppresses all noises related to those interactions and the accompanying Loud Noise Notification.
    
    Quick & Quiet has a cool-down of 25/20/15 seconds.`
  },
  {
    id: "quickGambit",
    name: "Quick Gambit",
    image: "images/perks/survivor/quickGambit.png",
    owner: "Vittorio Toscano",
    description: `While being chased by the Killer, the following effects apply:

    • The Auras of other Survivors are revealed to you.
    • Increases the Repair speed of other Survivors by 3/4/5 %.
    
    Quick Gambit has a cool-down of 40 seconds upon losing a Health State.`
  },
  {
    id: "rapidResponse",
    name: "Rapid Response",
    image: "images/perks/survivor/rapidResponse.png",
    owner: "Orela Rose",
    description: `Whenever you become afflicted by the Exhausted Status Effect, Rapid Response triggers its effect:

    • The Aura of the Killer is revealed to you for 2 seconds.
    
    Perform a Rushed action to exit a Locker to voluntarily trigger the Status Effect for 30/25/20 seconds.
    
    Rapid Response cannot be used to override an existing Exhausted Status Effect.`
  },
  {
    id: "reactiveHealing",
    name: "Reactive Healing",
    image: "images/perks/survivor/reactiveHealing.png",
    owner: "Ada Wong",
    description: `Whenever another Survivor within 32 metres of your location loses a Health State by any means while you are in the Injured State, you benefit from the following effect:

    • Grants 40/45/50 % of your missing Healing Progression towards your Health Bar.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "reassurance",
    name: "Reassurance",
    image: "images/perks/survivor/reassurance.png",
    owner: "Rebecca Chambers",
    description: `While within 6 metres of a hooked Survivor, press the Active Ability button to trigger the following effects for 20/25/30 seconds:

    • Pauses the Sacrifice Process.
        This also pauses the Struggle Skill Checks for Survivors in the Struggle Phase.
    • Causes the outline of that Survivor to be highlighted in white.
    
    Reassurance can only be used once per Survivor per Hook Instance.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "redHerring",
    name: "Red Herring",
    image: "images/perks/survivor/redHerring.png",
    owner: "Zarina Kassir",
    description: `After repairing a Generator for at least 1 second, Red Herring triggers its primary effect:

    • The Aura of that Generator is highlighted to you in yellow.
    • The highlight persists until either of the following occurs:
        The Generator is completed.
        You start repairing a different Generator.
        You enter a Locker.
        
    When entering a Locker, Red Herring triggers its secondary effect:

    • Triggers a Loud Noise Notification for the Killer on the highlighted Generator.
    
    Red Herring has a cool-down of 25/20/15 seconds.`
  },
  {
    id: "repressedAlliance",
    name: "Repressed Alliance",
    image: "images/perks/survivor/repressedAlliance.png",
    owner: "Cheryl Mason",
    description: `You are accustomed to being hunted by malicious forces, and you have begun using it to your advantage.
    
    After repairing Generators for a total of 55/50/45 seconds, Repressed Alliance activates:

    • Press the Active Ability button to call upon The Entity to block the Generator you are currently repairing for 30 seconds, after which Repressed Alliance deactivates.
    • The Aura of the blocked Generator is revealed to all Survivors in white.
    
    Repressed Alliance can only be triggered when no other Survivors are repairing your Generator.`,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "residualManifest",
    name: "Residual Manifest",
    image: "images/perks/survivor/residualManifest.png",
    owner: "Haddie Kaur",
    description: `A lifetime of chasing the darkness has taught you that the best disinfectant is light.

    • After a successful Killer Blind, the Killer suffers from the Blindness Status Effect for 20/25/30 seconds.
    • Residual Manifest grants the ability to rummage through an opened Chest once per Trial and will guarantee a basic Flashlight.`
  },
  {
    id: "resilience",
    name: "Resilience",
    image: "images/perks/survivor/resilience.png",
    description: `Whenever you are in the Injured State, Resilience activates:

    • Increases the Action speeds for the following interactions by 3/6/9 %:
        Blessing or Cleansing Totems.
        Healing yourself or other Survivors.
        Opening Exit Gates.
        Repairing Generators.
        Sabotaging Hooks.
        Searching Chests.
        Unhooking other Survivors.
        Vaulting Windows.`
  },
  {
    id: "resurgence",
    name: "Resurgence",
    image: "images/perks/survivor/resurgence.png",
    owner: "Jill Valentine",
    description: `After you are unhooked by any means, Resurgence triggers the following effect:

    • Grants you 50/60/70 % of Healing progression.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "roadLife",
    name: "Road Life",
    image: "images/perks/survivor/roadLife.png",
    owner: "Vee Boonyasak",
    description: `While injured and repairing a Generator, regular Skill Checks have the following effects:

    • Gain +1 Token for Great Repair Skill Checks.
    • Gain 0 Tokens for Good Repair Skill Checks.
    • Lose -1 Token for Failed Repair Skill Checks.
    
    Once you accumulate 6/5/4 Tokens, consume all Tokens to benefit from the following effect:

    • Increases your Healing speed by +100 % until you stop healing.
    
    Road Life deactivates after use and does not activate while suffering from the Broken Status Effect.
    
    Road Life does not interact with special Skill Checks triggered by outside effects.`
  },
  {
    id: "rookieSpirit",
    name: "Rookie Spirit",
    image: "images/perks/survivor/rookieSpirit.png",
    owner: "Leon S. Kennedy",
    description: `You keep a careful eye on objectives when they are slipping away.
    
    While repairing Generators, succeed 5/4/3 Good or Great Skill Checks to activate Rookie Spirit for the remainder of the Trial:

    • The Auras of any regressing Generators are revealed to you until they stop regressing by any means.`,
    licensed: true,
    license: "Resident Evil"
  },
  {
    id: "saboteur",
    name: "Saboteur",
    image: "images/perks/survivor/saboteur.png",
    owner: "Jake Park",
    description: `Unlocks potential in your Aura-reading ability:

    • While the Killer is carrying another Survivor, the Auras of all Hooks within 56 metres of their original Pick-up location are revealed to you:
        The Auras of normal Hooks are white.
        The Auras of Scourge Hooks are yellow.
        
    Unlocks the ability to sabotage Hooks without Toolboxes:

    • Increases the Sabotage speed without a Toolbox by +30 %.
        This effect has a cool-down of 70/65/60 seconds after use.`
  },
  {
    id: "scavenger",
    name: "Scavenger",
    image: "images/perks/survivor/scavenger.png",
    owner: "Gabriel Soma",
    description: `While holding a depleted Toolbox, Scavenger activates:

    • Succeeding at Great Repairing Skill Checks grants 1 Token, up to a maximum of 5 Tokens.
    • Reaching the maximum number of Tokens automatically consumes them and fully recharges the Toolbox.
    • Recharging a Toolbox will reduce your Repair speed by -50 % for the next 40/35/30 seconds.
    
    Scavenger grants the ability to rummage through an opened Chest once per Trial and will guarantee a basic Toolbox.`
  },
  {
    id: "scenePartner",
    name: "Scene Partner",
    image: "images/perks/survivor/scenePartner.png",
    owner: "Nicolas Cage",
    description: `Whenever you are inside the Terror Radius, Scene Partner activates:

    • Looking at the Killer causes you to scream, which reveals their Aura for 4/5/6 seconds.
    • There is a chance of 50 % that you will scream again, extending the Aura-reveal duration by another +2 seconds.
    
    Scene Partner has a cool-down of 40 seconds.`,
    licensed: true,
    license: "Nicolas Cage"
  },
  {
    id: "secondWind",
    name: "Second Wind",
    image: "images/perks/survivor/secondWind.png",
    owner: "Steve Harrington",
    description: `When you heal another Survivor for the equivalent of 1 Health State, Second Wind activates:

    • The next time you are unhooked or unhook yourself, you suffer from the Broken Status Effect until Second Wind deactivates.
    • You are automatically healed 1 Health State after 28/24/20 seconds.
    
    While Second Wind is active, the following conditions will deactivate it:

    • Successfully being healed by Second Wind.
    • Being put into the Dying State before the timer elapses.
    
    Second Wind does not activate if you already suffer from the Broken Status Effect.`,
    licensed: true,
    license: "Stranger Things"
  },
  {
    id: "selfCare",
    name: "Self-Care",
    image: "images/perks/survivor/selfCare.png",
    owner: "Claudette Morel",
    description: `Unlocks the Self-Care ability:

    • Grants the ability to self-heal without needing a Med-Kit at 25/30/35 % of the regular Healing speed.`
  },
  {
    id: "selfPreservation",
    name: "Self-Preservation",
    image: "images/perks/survivor/selfPreservation.png",
    owner: "Yun-Jin Lee",
    description: `Whenever another Survivor within 16 metres of your location is hit by a Basic or Special Attack, Self-Preservation triggers its effect:

    • Suppresses your Grunts of Pain, and the creation of Pools of Blood and Scratch Marks for 6/8/10 seconds.`
  },
  {
    id: "shoulderTheBurden",
    name: "Shoulder the Burden",
    image: "images/perks/survivor/shoulderTheBurden.png",
    owner: "Taurie Cain",
    description: `Once per Trial, and while you are not on Death Hook, press the Active Ability button while standing in front of a Hooked Survivor to unhook them and trigger the following effects:

    • Trade 1 Hook Stage with the other Survivor to their benefit.
    • Causes you to scream and suffer from the Exposed Status Effect for 60/50/40 seconds.`
  },
  {
    id: "slipperyMeat",
    name: "Slippery Meat",
    image: "images/perks/survivor/slipperyMeat.png",
    description: `You have developed an efficient way to get off Hooks.

    • Grants the ability to attempt +3 additional Self-Unhooks during the first Hook Stage.
    • Increases the chances to successfully perform a Self-Unhook by 2/3/4 %.`
  },
  {
    id: "smallGame",
    name: "Small Game",
    image: "images/perks/survivor/smallGame.png",
    description: `Projects an invisible cone in the direction you are looking, with a Detection angle of 45 ° and a range of 8/10/12 metres:

    • Triggers an audio cue when detecting any type of Totem within it.
        This effect has a cool-down of 14/12/10 seconds after use.
        
    Each time a Totem is cleansed, Small Game gains +1 Token, up to a maximum of 5 Tokens:

    • Reduces the Detection angle of the cone by a stack-able -5 ° per Token, up to a maximum of -25 °.`
  },
  {
    id: "smashHit",
    name: "Smash Hit",
    image: "images/perks/survivor/smashHit.png",
    owner: "Yun-Jin Lee",
    description: ``
  },
  {
    id: "soleSurvivor",
    name: "Sole Survivor",
    image: "images/perks/survivor/soleSurvivor.png",
    owner: "Laurie Strode",
    description: ``,
    licensed: true,
    license: "Halloween"
  },
  {
    id: "solidarity",
    name: "Solidarity",
    image: "images/perks/survivor/solidarity.png",
    owner: "Jane Romero",
    description: ``
  },
  {
    id: "soulGuard",
    name: "Soul Guard",
    image: "images/perks/survivor/soulGuard.png",
    owner: "Cheryl Mason",
    description: ``,
    licensed: true,
    license: "Silent Hill"
  },
  {
    id: "specialist",
    name: "Specialist",
    image: "images/perks/survivor/specialist.png",
    owner: "Lara Croft",
    description: ``,
    licensed: true,
    license: "Tomb Raider"
  },
  {
    id: "spineChill",
    name: "Spine Chill",
    image: "images/perks/survivor/spineChill.png",
    description: ``
  },
  {
    id: "sprintBurst",
    name: "Sprint Burst",
    image: "images/perks/survivor/sprintBurst.png",
    owner: "Meg Thomas",
    description: ``
  },
  {
    id: "stakeOut",
    name: "Stake Out",
    image: "images/perks/survivor/stakeOut.png",
    owner: "Detective David Tapp",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "stillSight",
    name: "Still Sight",
    image: "images/perks/survivor/stillSight.png",
    owner: "Aestri Yazar & Baermar Uraz",
    description: ``,
    licensed: true,
    license: "Dungeons & Dragons"
  },
  {
    id: "streetwise",
    name: "Streetwise",
    image: "images/perks/survivor/streetwise.png",
    owner: "Nea Karlsson",
    description: ``
  },
  {
    id: "strengthInShadows",
    name: "Strength in Shadows",
    image: "images/perks/survivor/strengthInShadows.png",
    owner: "Sable Ward",
    description: ``
  },
  {
    id: "teamworkCollectiveStealth",
    name: "Teamwork: Collective Stealth",
    image: "images/perks/survivor/teamworkCollectiveStealth.png",
    owner: "Renato Lyra",
    description: ``
  },
  {
    id: "teamworkPowerOfTwo",
    name: "Teamwork: Power of Two",
    image: "images/perks/survivor/teamworkPowerOfTwo.png",
    owner: "Thalita Lyra",
    description: ``
  },
  {
    id: "teamworkThrowDown",
    name: "Teamwork: Throw Down",
    image: "images/perks/survivor/teamworkThrowDown.png",
    owner: "Michonne Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "teamworkToughenUp",
    name: "Teamwork: Toughen Up",
    image: "images/perks/survivor/teamworkToughenUp.png",
    owner: "Rick Grimes",
    description: ``,
    licensed: true,
    license: "The Walking Dead"
  },
  {
    id: "technician",
    name: "Technician",
    image: "images/perks/survivor/technician.png",
    owner: "Feng Min",
    description: ``
  },
  {
    id: "tenacity",
    name: "Tenacity",
    image: "images/perks/survivor/tenacity.png",
    owner: "Detective David Tapp",
    description: ``,
    licensed: true,
    license: "SAW"
  },
  {
    id: "thisIsNotHappening",
    name: "This Is Not Happening",
    image: "images/perks/survivor/thisIsNotHappening.png",
    description: ``
  },
  {
    id: "troubleshooter",
    name: "Troubleshooter",
    image: "images/perks/survivor/troubleshooter.png",
    owner: "Gabriel Soma",
    description: ``
  },
  {
    id: "unbreakable",
    name: "Unbreakable",
    image: "images/perks/survivor/unbreakable.png",
    owner: 'William "Bill" Overbeck',
    description: ``,
    licensed: true,
    license: "Left 4 Dead"
  },
  {
    id: "upTheAnte",
    name: "Up the Ante",
    image: "images/perks/survivor/upTheAnte.png",
    owner: "Ace Visconti",
    description: ``
  },
  {
    id: "urbanEvasion",
    name: "Urban Evasion",
    image: "images/perks/survivor/urbanEvasion.png",
    owner: "Nea Karlsson",
    description: ``
  },
  {
    id: "vigil",
    name: "Vigil",
    image: "images/perks/survivor/vigil.png",
    owner: "Quentin Smith",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "visionary",
    name: "Visionary",
    image: "images/perks/survivor/visionary.png",
    owner: "Felix Richter",
    description: ``
  },
  {
    id: "wakeUp",
    name: "Wake Up!",
    image: "images/perks/survivor/wakeUp.png",
    owner: "Quentin Smith",
    description: ``,
    licensed: true,
    license: "A Nightmare on Elm Street"
  },
  {
    id: "wellMakeIt",
    name: "We'll Make It",
    image: "images/perks/survivor/wellMakeIt.png",
    description: ``
  },
  {
    id: "wereGonnaLiveForever",
    name: "We're Gonna Live Forever",
    image: "images/perks/survivor/wereGonnaLiveForever.png",
    owner: "David King",
    description: ``
  },
  {
    id: "wicked",
    name: "Wicked",
    image: "images/perks/survivor/wicked.png",
    owner: "Sable Ward",
    description: ``
  },
  {
    id: "windowsOfOpportunity",
    name: "Windows of Opportunity",
    image: "images/perks/survivor/windowsOfOpportunity.png",
    owner: "Kate Denson",
    description: ``
  },
  {
    id: "wiretap",
    name: "Wiretap",
    image: "images/perks/survivor/wiretap.png",
    owner: "Ada Wong",
    description: ``,
    licensed: true,
    license: "Resident Evil"
  }
];