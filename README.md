# The Campfire

A collection of custom tools and challenges for Dead by Daylight, built with vanilla HTML, CSS, and JavaScript.

The Campfire began as a character and perk randomiser and has since expanded into a multi-mode companion app, with additional challenges and tools planned for future development.

---

## Development

New features and changes are developed on dedicated feature branches and merged into `dev` through pull requests.

The `dev` branch serves as the integration branch for ongoing development, while `main` is kept stable and represents the latest ready version of The Campfire.

---

## Modes

### Chaos Shuffle

Leave your loadout to chance.

- Random Survivor or Killer selection
- Random perk loadouts with no duplicate perks
- Randomise character, perks, or everything at once
- Reroll individual perks
- Prevents the same character from being rolled twice in a row
- Optional Legendary character inclusion
- Clickable perks and characters with additional information

### Adept Trials

Work together as a team and progress through the Survivor roster.

- Four-player Survivor challenge
- Each player progresses through their own Survivor column
- Escape to advance
- Sacrifice costs progress
- Three consecutive sacrifices ends the Trial
- Visual hook states track consecutive sacrifices
- Complete a Survivor column to become an Escapist
- Rank progression based on each player's position
- Unique Survivor perks displayed for each Trial

Additional Adept Trials features and options are currently in development.

---

## Planned Modes

### Survivor Iron Man

A Survivor-focused endurance challenge with Normal and Hardcore variants.

### Killer Iron Man

A Killer-focused endurance challenge with Normal and Hardcore variants.

---

## Features

- Dead by Daylight inspired interface
- Dedicated home page and mode navigation
- Reusable How to Play and Options panels
- Responsive layouts for smaller screens
- Character, perk, rank, and challenge state tracking
- Dedicated Survivor, Killer, and perk datasets
- Shared components and styling across modes

---

## Tech Stack

- **HTML** - structure
- **CSS** - styling, animations, and theming
- **JavaScript (Vanilla)** - application logic and state management

No frameworks or external JavaScript libraries are required.

---

## Project Structure

The project is separated into dedicated pages, stylesheets, scripts, datasets, and asset directories to keep each mode maintainable as The Campfire grows.

```text
css/
data/
images/
js/

index.html
randomiser.html
challenge.html
```

- `index.html` — The Campfire home
- `randomiser.html` — Chaos Shuffle
- `challenge.html` — Adept Trials

Large Survivor, Killer, and perk datasets are kept in dedicated files for maintainability and sanity.

---

## Project Status

Actively developed.

Chaos Shuffle and the core Adept Trials challenge are playable, with additional Adept Trials features and entirely new modes planned.

---

## Disclaimer

The Campfire is an unofficial fan project and is not affiliated with Behaviour Interactive.

Dead by Daylight and related assets belong to Behaviour Interactive and their respective owners and licence holders.

This repository contains original project code licensed under the MIT License.

---

## License

MIT License.

Feel free to fork, modify, and use the original project code with attribution.

---

## Why This Exists

I wanted a Dead by Daylight randomiser. Things got slightly out of hand.