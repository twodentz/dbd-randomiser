const PLAYER_COUNT = 4;
const MAX_CONSECUTIVE_SACRIFICES = 3;

// --------------------------------------------------
// Challenge Data
// --------------------------------------------------

const baseSurvivors = survivors.filter(
  survivor => !survivor.legendary && survivor.name !== "Baermar Uraz"
);

const completeSurvivorCount =
  Math.floor(baseSurvivors.length / PLAYER_COUNT) * PLAYER_COUNT;

const challengeSurvivors = baseSurvivors.slice(0, completeSurvivorCount);

function createSurvivorColumns(survivorList) {
  const columns = Array.from(
    { length: PLAYER_COUNT },
    () => []
  );

  survivorList.forEach((survivor, index) => {
    const columnIndex = index % PLAYER_COUNT;

    columns[columnIndex].push(survivor);
  });

  return columns;
}

function shuffleArray(list) {
  const shuffled = [...list];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

let survivorColumns = createSurvivorColumns(challengeSurvivors);

// --------------------------------------------------
// Challenge State
// --------------------------------------------------

const challengeState = {
  started: false,
  completed: false,
  failed: false,
  failedPlayer: null,
  players: survivorColumns.map((column, index) => ({
    player: index,
    name: `Player ${index + 1}`,
    column: index,
    position: 0,
    consecutiveSacrifices: 0,
    finished: false,
    finishingSurvivor: null,
  })),
};

// --------------------------------------------------
// Rank Helpers
// --------------------------------------------------

function getPlayerRank(player) {
  const column = survivorColumns[player.column];
  return column.length - player.position;
}

function getRankEmblem(rank) {
  if (rank === 1) {
    return "images/ranks/iridescent-survivor.png";
  }

  if (rank <= 4) {
    return "images/ranks/iridescent.png";
  }

  if (rank <= 8) {
    return "images/ranks/gold.png";
  }

  if (rank <= 12) {
    return "images/ranks/silver.png";
  }

  return "images/ranks/bronze.png";
}

// --------------------------------------------------
// Survivor Helpers
// --------------------------------------------------

function getChallengeSurvivorName(survivor) {
  if (survivor.name === "Aestri Yazar") {
    return "Aestri Yazar & Baermar Uraz";
  }
  return survivor.name;
}

function getCurrentSurvivor(player) {
  const column = survivorColumns[player.column];
  return column[player.position];
}

function getSurvivorPerks(survivor) {
  const ownerName = getChallengeSurvivorName(survivor);

  return survivorPerks.filter(
    perk => perk.owner === ownerName
  );
}

// --------------------------------------------------
// Player Card Rendering
// --------------------------------------------------

function updatePlayerCard(playerIndex) {
  const player = challengeState.players[playerIndex];
  const survivor = getCurrentSurvivor(player);

  if (!survivor) return;

  const card = document.querySelector(
    `.challenge-player-card[data-player="${playerIndex}"]`
  );

  if (!card) return;

  const playerLabel = card.querySelector(
    ".challenge-player-label"
  );

  playerLabel.textContent = player.name;

  // Survivor
  const survivorImage = card.querySelector(
    ".challenge-survivor-image"
  );

  const survivorName = card.querySelector(
    ".challenge-survivor-name"
  );

  survivorImage.src = survivor.image;
  survivorImage.alt = survivor.name;
  survivorName.textContent = getChallengeSurvivorName(survivor);

  const hookIcons = card.querySelectorAll(".challenge-hook-icon");
  hookIcons.forEach((hookIcon, index) => {
    hookIcon.classList.toggle(
      "is-active",
      index < player.consecutiveSacrifices
    );
  });

  card.classList.toggle(
    "is-sacrificed",
    challengeState.failed && challengeState.failedPlayer === playerIndex
  );

  // Rank
  const rank = getPlayerRank(player);

  const rankImage = card.querySelector(
    ".challenge-rank-icon"
  );

  const rankNumber = card.querySelector(
    ".challenge-rank-number"
  );

  rankImage.src = getRankEmblem(rank);
  rankImage.alt = `Rank ${rank}`;
  rankNumber.textContent = rank;

  // Unique Perks
  const perks = getSurvivorPerks(survivor);

  const perkButtons = card.querySelectorAll(
    ".challenge-perk"
  );

  perkButtons.forEach((button, index) => {
    const image = button.querySelector("img");
    const perk = perks[index];

    if (!perk) {
      image.src = "images/placeholders/perk.png";
      image.alt = "Perk";
      return;
    }

    image.src = perk.image;
    image.alt = perk.name;
  });

  // Finished State
  updateFinishedState(card, player);
}

function updateFinishedState(card, player) {
  card.classList.toggle("is-finished", player.finished);

  const resultButtons = card.querySelectorAll(
    ".challenge-result-btn"
  );

  resultButtons.forEach(button => {
    button.disabled = !challengeState.started || challengeState.completed || challengeState.failed || player.finished;
  });
}

// --------------------------------------------------
// Challenge Rendering
// --------------------------------------------------

function updateChallengeDisplay() {
  challengeState.players.forEach((player, index) => {
    updatePlayerCard(index);
  });
}

function updateChallengeControls() {
  const startButton = document.querySelector("#challenge-start");
  const resetButton = document.querySelector("#challenge-reset");
  const randomiseColumnsOption = document.querySelector(
    "#randomise-survivor-columns"
  );
  const playerNameInputs = document.querySelectorAll(
  ".challenge-player-name-input"
  );

  startButton.disabled = challengeState.started;
  resetButton.disabled = !challengeState.started;
  randomiseColumnsOption.disabled = challengeState.started;
  playerNameInputs.forEach(input => {
    input.disabled = challengeState.started;
  });
}

function updateChallengeCompletion() {
  const completion = document.querySelector(".challenge-complete");
  completion.hidden = !challengeState.completed;
}

function updateChallengeFailure(){
  const failure = document.querySelector(".challenge-failure");
  const failureMessage = document.querySelector(".challenge-failure-message");

  failure.hidden = !challengeState.failed;

  if (challengeState.failed && challengeState.failedPlayer !== null) {
    const failedPlayer = challengeState.players[challengeState.failedPlayer];

    failureMessage.textContent = `${failedPlayer.name} was sacrificed to the Entity`;
  }
}

// --------------------------------------------------
// Challenge Actions
// --------------------------------------------------

function handleEscape(playerIndex) {
  const player = challengeState.players[playerIndex];
  const column = survivorColumns[player.column];

  if (!challengeState.started || challengeState.completed || challengeState.failed || player.finished) return;

  player.consecutiveSacrifices = 0;

  // If there is another Survivor ahead, move forward.
  if (player.position < column.length - 1) {
    player.position += 1;
    updatePlayerCard(playerIndex);
    return;
  }

  player.finished = true;
  player.finishingSurvivor = getCurrentSurvivor(player);

  challengeState.completed = challengeState.players.every(
    player => player.finished
  );

  updatePlayerCard(playerIndex);
  updateChallengeCompletion();
}

function handleSacrifice(playerIndex) {
  const player = challengeState.players[playerIndex];

  if (!challengeState.started || challengeState.completed || challengeState.failed || player.finished) return;

  player.consecutiveSacrifices += 1;

  console.log(`Player ${playerIndex + 1} sacrifice streak: ${player.consecutiveSacrifices}`);

  if (player.consecutiveSacrifices >= MAX_CONSECUTIVE_SACRIFICES) {
    challengeState.failed = true;
    challengeState.failedPlayer = playerIndex;
    updatePlayerCard(playerIndex);
    updateChallengeFailure();
    return;
  }

  if (player.position > 0) {
    player.position -= 1;
  }
  updatePlayerCard(playerIndex);
}

function startChallenge() {
  if (challengeState.started) return;

  const playerNameInputs = document.querySelectorAll(
    ".challenge-player-name-input"
  );

  const playerNames = Array.from(playerNameInputs, (input, index) => {
    const name = input.value.trim();
    return name || `Player ${index + 1}`;
  });

  const shuffledPlayerNames = shuffleArray(playerNames);

  challengeState.players.forEach((player, index) => {
    player.name = shuffledPlayerNames[index];
  });

  const randomiseColumns = document.querySelector(
    "#randomise-survivor-columns"
  ).checked;

  if (randomiseColumns) {
  const shuffledSurvivors = shuffleArray(baseSurvivors);

  const completeRandomSurvivorCount =
    Math.floor(shuffledSurvivors.length / PLAYER_COUNT) * PLAYER_COUNT;

  const randomChallengeSurvivors =
    shuffledSurvivors.slice(0, completeRandomSurvivorCount);

  survivorColumns = createSurvivorColumns(randomChallengeSurvivors);
} else {
  survivorColumns = createSurvivorColumns(challengeSurvivors);
}

  challengeState.started = true;

  updateChallengeDisplay();
  updateChallengeControls();
}

function resetChallenge() {
  challengeState.started = false;
  challengeState.completed = false;
  challengeState.failed = false;
  challengeState.failedPlayer = null;

  challengeState.players.forEach((player, index) => {
    player.name = `Player ${index + 1}`;
    player.position = 0;
    player.consecutiveSacrifices = 0;
    player.finished = false;
    player.finishingSurvivor = null;
  });

  const playerNameInputs = document.querySelectorAll(
    ".challenge-player-name-input"
  );

  playerNameInputs.forEach(input => {
    input.value = "";
  });

  updateChallengeDisplay();
  updateChallengeCompletion();
  updateChallengeFailure();
  updateChallengeControls();
}

// --------------------------------------------------
// Event Listeners
// --------------------------------------------------

document
  .querySelectorAll(".challenge-escape-btn")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      handleEscape(index);
    });
  });

document
  .querySelectorAll(".challenge-sacrifice-btn")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      handleSacrifice(index);
    });
  });

document
  .querySelector("#challenge-start")
  .addEventListener("click", startChallenge);

document
  .querySelector("#challenge-reset")
  .addEventListener("click", resetChallenge);

// --------------------------------------------------
// Initialise
// --------------------------------------------------

updateChallengeDisplay();
updateChallengeControls();
