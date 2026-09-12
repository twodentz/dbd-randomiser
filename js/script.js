// Placeholder images
const placeholderCharacter = "images/placeholders/character.png";
const placeholderPerk = "images/placeholders/perk.png";

let includeLegendary = true;

// Modal for perk descriptions
const perkModal = document.getElementById("perk-modal");
const modalImage = document.getElementById("modal-perk-image");
const modalName = document.getElementById("modal-perk-name");
const modalOwner = document.getElementById("modal-perk-owner");
const modalDesc = document.getElementById("modal-perk-description");

// State
const state = {
  survivor: {
    character: null,
    lastCharacterId: null,
    perks: [null, null, null, null],
  },
  killer: {
    character: null,
    lastCharacterId: null,
    perks: [null, null, null, null],
  },
};

// Helpers
function getRandomItem(list) {
  if (!list || list.length === 0) return null;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

/**
 * Get N unique random perks from a pool
 * Guarantees no duplicates as long as pool.length >= count
 */
function getRandomUniquePerks(pool, count = 4) {
  if (!pool || pool.length === 0) return Array(count).fill(null);

  if (pool.length < count) {
    console.warn("Perk pool smaller than requested count. Some duplicates may occur.");
  }

  const available = [...pool];
  const result = [];

  for (let i = 0; i < count; i++) {
    if (available.length === 0) {
      // Fallback: reuse pool if we somehow run out
      available.push(...pool);
    }
    const idx = Math.floor(Math.random() * available.length);
    const perk = available.splice(idx, 1)[0];
    result.push(perk);
  }

  return result;
}

function resetTab(type) {
  state[type].character = null;
  state[type].lastCharacterId = null;
  state[type].perks = [null, null, null, null];

  // Update UI
  updateCharacterDisplay(type);
  updatePerkDisplay(type);
}

/**
 * Reroll a single perk slot, guaranteeing no duplicates
 * relative to the other 3 currently selected perks.
 */
function rerollSinglePerk(type, index) {
  const isSurvivor = type === "survivor";
  const pool = isSurvivor ? survivorPerks : killerPerks;
  const currentPerks = state[type].perks;

  if (!pool || pool.length === 0) return;

  // Build a set of IDs currently in the other slots
  const usedIds = new Set(
    currentPerks
      .map((p, i) => (i === index ? null : p)) // ignore the slot we're rerolling
      .filter(Boolean)
      .map((p) => p.id)
  );

  // Filter pool to only perks not already used
  const candidates = pool.filter((p) => !usedIds.has(p.id));
  if (candidates.length === 0) {
    console.warn("No available perks to reroll without duplicates.");
    return;
  }

  const newPerk = getRandomItem(candidates);
  currentPerks[index] = newPerk;
  updatePerkDisplay(type);
  animateSinglePerk(type, index);
}

function openPerkModal(perk) {
  if (!perk) return;

  modalImage.src = perk.image;
  modalName.textContent = perk.name;
  modalDesc.textContent = perk.description || "No description available.";

  modalOwner.textContent = perk.owner
    ? `${perk.owner} Unique Perk`
    : "";

  perkModal.classList.remove("hidden");
}

function closePerkModal() {
  perkModal.classList.add("hidden");
}

function openCharacterModal(character) {
  document.getElementById("character-modal-image").src = character.image;
  document.getElementById("character-modal-name").textContent = character.name;
  document.getElementById("character-modal-chapter").textContent =
    character.chapter ? `${character.chapter}` : "";
  document.getElementById("character-modal-bio").textContent =
    character.bio || "No biography available.";

  document.getElementById("character-modal").classList.remove("hidden");
}

function closeCharacterModal() {
  document.getElementById("character-modal").classList.add("hidden");
}


// UI updates
function updateCharacterDisplay(type) {
  const character = state[type].character;

  const imgEl = document.getElementById(`${type}-image`);
  const nameEl = document.getElementById(`${type}-name`);

  if (!imgEl || !nameEl) return;

  // Always clear previous click
  imgEl.onclick = null;
  imgEl.style.cursor = "default";

  if (!character) {
    imgEl.src = placeholderCharacter;
    imgEl.alt = "Placeholder";
    imgEl.classList.remove("hidden");
    nameEl.textContent = "";
    return;
  }

  imgEl.src = character.image || placeholderCharacter;
  imgEl.alt = character.name;
  imgEl.classList.remove("hidden");

  imgEl.classList.remove("character-animate");
  void imgEl.offsetWidth;
  imgEl.classList.add("character-animate");

  nameEl.textContent = character.name;

  imgEl.onclick = () => openCharacterModal(character);
  imgEl.style.cursor = "pointer";
}

function updatePerkDisplay(type) {
  const perks = state[type].perks;

  perks.forEach((perk, index) => {
    const imgEl = document.getElementById(`${type}-perk-img-${index}`);
    const nameEl = document.getElementById(`${type}-perk-name-${index}`);

    if (!imgEl || !nameEl) return;

    if (!perk) {
      imgEl.src = placeholderPerk;
      imgEl.alt = "Placeholder";
      imgEl.classList.remove("hidden");
      nameEl.textContent = "—";
    } else {
        imgEl.src = perk.image;
        imgEl.alt = perk.name;
        imgEl.classList.remove("hidden");
        nameEl.textContent = perk.name;
        imgEl.onclick = () => openPerkModal(state[type].perks[index]);
        imgEl.style.cursor = "pointer";
      }
  });
}

// Randomiser functions
function randomiseCharacter(type) {
  const pool = type === "survivor" ? survivors : killers;
  const lastId = state[type].lastCharacterId;

  // Build available pool (filter legendary first, then filter lastId)
  let available = pool;

  if (!includeLegendary) {
    available = available.filter(c => !c.legendary);
  }

  if (lastId) {
    available = available.filter(char => char.id !== lastId);
  }

  // Safety fallback
  if (available.length === 0) return;

  const selected = available[Math.floor(Math.random() * available.length)];

  state[type].character = selected;
  state[type].lastCharacterId = selected.id;

  updateCharacterDisplay(type);
}

function renderSurvivorCharacter(character) {
  const img = document.getElementById("survivor-image");
  const name = document.getElementById("survivor-name");

  img.src = character.image;
  img.classList.remove("hidden");
  name.textContent = character.name;

  img.onclick = () => openCharacterModal(character);
}

function renderKillerCharacter(character) {
  const img = document.getElementById("killer-image");
  const name = document.getElementById("killer-name");

  img.src = character.image;
  img.classList.remove("hidden");
  name.textContent = character.name;

  img.onclick = () => openCharacterModal(character);
}

function randomisePerks(type) {
  const isSurvivor = type === "survivor";
  const pool = isSurvivor ? survivorPerks : killerPerks;

  const perks = getRandomUniquePerks(pool, 4);
  state[type].perks = perks;
  updatePerkDisplay(type);
}

function randomiseEverything(type) {
  randomiseCharacter(type);
  randomisePerks(type);
}

function animatePerkShake(type) {
  for (let i = 0; i < 4; i++) {
    const slot = document.getElementById(`${type}-perk-slot-${i}`);
    if (!slot) continue;

    slot.classList.remove("shake");
    void slot.offsetWidth;
    slot.classList.add("shake");
  }
}

function animateSinglePerk(type, index) {
  const imgEl = document.getElementById(`${type}-perk-img-${index}`);
  if (!imgEl) return;

  imgEl.classList.remove("perk-animate");
  void imgEl.offsetWidth; // restart animation
  imgEl.classList.add("perk-animate");
}

// Tabs
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tab;

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabs.forEach((tab) => {
        if (tab.id === targetId) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    });
  });
}

// Event binding
function setupButtons() {
  // Survivor buttons
  document
    .getElementById("survivor-randomise-character")
    ?.addEventListener("click", () => randomiseCharacter("survivor"));

  document
  .getElementById("survivor-randomise-perks")
  .addEventListener("click", () => {
    randomisePerks("survivor");
    updatePerkDisplay("survivor");

    for (let i = 0; i < 4; i++) {
      animateSinglePerk("survivor", i);
    }
  });

  document
    .getElementById("survivor-randomise-all")
    .addEventListener("click", () => {
      animatePerkShake("survivor");

      setTimeout(() => {
        randomiseCharacter("survivor");
        randomisePerks("survivor");
      }, 120);
    });

  document
  .getElementById("survivor-reroll-all-perks")
  .addEventListener("click", () => {
    randomisePerks("survivor");
    updatePerkDisplay("survivor");

    // Animate ALL perks (this is the key)
    for (let i = 0; i < 4; i++) {
      animateSinglePerk("survivor", i);
    }
  });

  // Killer buttons
  document
    .getElementById("killer-randomise-character")
    ?.addEventListener("click", () => randomiseCharacter("killer"));

  document
  .getElementById("killer-randomise-perks")
  .addEventListener("click", () => {
    randomisePerks("killer");
    updatePerkDisplay("killer");

    for (let i = 0; i < 4; i++) {
      animateSinglePerk("killer", i);
    }
  });

  document
    .getElementById("killer-randomise-all")
    .addEventListener("click", () => {
      animatePerkShake("killer");

      setTimeout(() => {
        randomiseCharacter("killer");
        randomisePerks("killer");
      }, 120);
    });

   document
  .getElementById("killer-reroll-all-perks")
  .addEventListener("click", () => {
    randomisePerks("killer");
    updatePerkDisplay("killer");

    // Animate ALL perks (this is the key)
    for (let i = 0; i < 4; i++) {
      animateSinglePerk("killer", i);
    }
  });

  document
    .getElementById("survivor-reset")
    ?.addEventListener("click", () => resetTab("survivor"));

  document
    .getElementById("killer-reset")
    ?.addEventListener("click", () => resetTab("killer"));

  // Individual perk reroll buttons (both survivor and killer)
  document.querySelectorAll(".perk-reroll-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type; // "survivor" or "killer"
      const index = parseInt(btn.dataset.index, 10);
      rerollSinglePerk(type, index);
    });
  });

  document.getElementById("modal-close").addEventListener("click", closePerkModal);
  document
  .querySelector("#perk-modal .modal-backdrop")
  .addEventListener("click", closePerkModal);
}

document
  .querySelector("#perk-modal .modal-content")
  .addEventListener("click", (e) => e.stopPropagation());

document
  .getElementById("character-modal-close")
  .addEventListener("click", closeCharacterModal);

document
  .querySelector("#character-modal .modal-backdrop")
  .addEventListener("click", closeCharacterModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCharacterModal();
    closePerkModal();
  }
});

document
  .getElementById("toggle-legendary")
  .addEventListener("change", (e) => {
    includeLegendary = e.target.checked;
  });

// INIT
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupButtons();
  // Initial UI state
  updateCharacterDisplay("survivor");
  updatePerkDisplay("survivor");
  updateCharacterDisplay("killer");
  updatePerkDisplay("killer");
});
