const PLAYER_COUNT = 4;

// --------------------------------------------------
// Challenge Data
// --------------------------------------------------

const baseSurvivors = survivors.filter(
  survivor => !survivor.legendary && survivor.name !== "Baermar Uraz"
);

const completeSurvivorCount =
  Math.floor(baseSurvivors.length / PLAYER_COUNT) * PLAYER_COUNT;

const challengeSurvivors = baseSurvivors.slice(0, completeSurvivorCount);

const survivorColumns = Array.from(
  { length: PLAYER_COUNT },
  () => []
);

// Distribute Survivors across four columns in release order.
challengeSurvivors.forEach((survivor, index) => {
  const columnIndex = index % PLAYER_COUNT;

  survivorColumns[columnIndex].push(survivor);
});

// --------------------------------------------------
// Challenge State
// --------------------------------------------------

const challengeState = {
  players: survivorColumns.map((column, index) => ({
    player: index,
    column: index,
    position: 0,
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

  updateFinishedState(card, player);
}

// Finished State
function updateFinishedState(card, player) {
  card.classList.toggle("is-finished", player.finished);

  const resultButtons = card.querySelectorAll(
    ".challenge-result-btn"
  );

  resultButtons.forEach(button => {
    button.disabled = player.finished;
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

// --------------------------------------------------
// Challenge Actions
// --------------------------------------------------

function handleEscape(playerIndex) {
  const player = challengeState.players[playerIndex];
  const column = survivorColumns[player.column];

  if (player.finished) return;

  // If there is another Survivor ahead, move forward.
  if (player.position < column.length - 1) {
    player.position += 1;
    updatePlayerCard(playerIndex);
    return;
  }

  player.finished = true;
  player.finishingSurvivor = getCurrentSurvivor(player);

  updatePlayerCard(playerIndex);
}

function handleSacrifice(playerIndex) {
  const player = challengeState.players[playerIndex];

  if (player.finished) return;

  if (player.position > 0) {
    player.position -= 1;
    updatePlayerCard(playerIndex);
  }
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

// --------------------------------------------------
// Initialise
// --------------------------------------------------

updateChallengeDisplay();
