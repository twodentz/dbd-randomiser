/* =========================
   Randomiser Data
   ========================= */

const placeholderCharacter = "images/placeholders/character.png";
const placeholderPerk = "images/placeholders/perk.png";

/* =========================
   Randomiser State
   ========================= */

let includeLegendary = true;

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

/* =========================
   DOM References
   ========================= */

const perkModal = document.getElementById("perk-modal");
const modalImage = document.getElementById("modal-perk-image");
const modalName = document.getElementById("modal-perk-name");
const modalOwner = document.getElementById("modal-perk-owner");
const modalDesc = document.getElementById("modal-perk-description");

const characterModal = document.getElementById("character-modal");
const characterModalImage = document.getElementById("character-modal-image");
const characterModalName = document.getElementById("character-modal-name");
const characterModalChapter = document.getElementById("character-modal-chapter");
const characterModalBio = document.getElementById("character-modal-bio");

const perkModalClose = document.getElementById("modal-close");
const perkModalBackdrop = document.querySelector(
  "#perk-modal .modal-backdrop"
);

const characterModalClose = document.getElementById(
  "character-modal-close"
);
const characterModalBackdrop = document.querySelector(
  "#character-modal .modal-backdrop"
);

const legendaryToggle = document.getElementById("toggle-legendary");

const perkModalContent = document.querySelector(
  "#perk-modal .modal-content"
);

/* =========================
   Randomiser Helpers
   ========================= */

function getRandomItem(list) {
  if (!list || list.length === 0) return null;

  const index = Math.floor(Math.random() * list.length);

  return list[index];
}

function getRandomUniquePerks(pool, count = 4) {
  if (!pool || pool.length === 0) {
    return Array(count).fill(null);
  }

  if (pool.length < count) {
    console.warn(
      "Perk pool smaller than requested count. Some duplicates may occur."
    );
  }

  const available = [...pool];
  const result = [];

  for (let i = 0; i < count; i++) {
    if (available.length === 0) {
      available.push(...pool);
    }

    const index = Math.floor(
      Math.random() * available.length
    );

    const perk = available.splice(index, 1)[0];

    result.push(perk);
  }

  return result;
}

/* =========================
   Modal Display
   ========================= */

function openCharacterModal(character) {
  characterModalImage.src = character.image;
  characterModalName.textContent = character.name;
  characterModalChapter.textContent = character.chapter || "";
  characterModalBio.textContent =
    character.bio || "No biography available.";

  characterModal.classList.remove("hidden");
}

function closeCharacterModal() {
  characterModal.classList.add("hidden");
}

/* =========================
   Randomiser Display
   ========================= */

function updateCharacterDisplay(type) {
  const character = state[type].character;

  const imgEl = document.getElementById(`${type}-image`);
  const nameEl = document.getElementById(`${type}-name`);

  if (!imgEl || !nameEl) return;

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
    const imgEl = document.getElementById(
      `${type}-perk-img-${index}`
    );

    const nameEl = document.getElementById(
      `${type}-perk-name-${index}`
    );

    if (!imgEl || !nameEl) return;

    imgEl.onclick = null;
    imgEl.style.cursor = "default";

    if (!perk) {
      imgEl.src = placeholderPerk;
      imgEl.alt = "Placeholder";
      imgEl.classList.remove("hidden");

      nameEl.textContent = "—";

      return;
    }

    imgEl.src = perk.image;
    imgEl.alt = perk.name;
    imgEl.classList.remove("hidden");

    nameEl.textContent = perk.name;

    imgEl.onclick = () => openPerkModal(perk);
    imgEl.style.cursor = "pointer";
  });
}

/* =========================
   Randomiser Actions
   ========================= */

function randomiseCharacter(type) {
  const pool = type === "survivor" ? survivors : killers;
  const lastId = state[type].lastCharacterId;

  let available = pool;

  if (!includeLegendary) {
    available = available.filter(
      character => !character.legendary
    );
  }

  if (lastId) {
    available = available.filter(
      character => character.id !== lastId
    );
  }

  if (available.length === 0) return;

  const selected = getRandomItem(available);

  state[type].character = selected;
  state[type].lastCharacterId = selected.id;

  updateCharacterDisplay(type);
}

function randomisePerks(type) {
  const pool =
    type === "survivor"
      ? survivorPerks
      : killerPerks;

  state[type].perks = getRandomUniquePerks(pool, 4);

  updatePerkDisplay(type);
}

function randomiseAndAnimatePerks(type) {
  randomisePerks(type);

  for (let i = 0; i < 4; i++) {
    animateSinglePerk(type, i);
  }
}

function randomiseEverything(type) {
  randomiseCharacter(type);
  randomisePerks(type);
}

function rerollSinglePerk(type, index) {
  const pool =
    type === "survivor"
      ? survivorPerks
      : killerPerks;

  const currentPerks = state[type].perks;

  if (!pool || pool.length === 0) return;

  const usedIds = new Set(
    currentPerks
      .map((perk, perkIndex) =>
        perkIndex === index ? null : perk
      )
      .filter(Boolean)
      .map(perk => perk.id)
  );

  const candidates = pool.filter(
    perk => !usedIds.has(perk.id)
  );

  if (candidates.length === 0) {
    console.warn(
      "No available perks to reroll without duplicates."
    );

    return;
  }

  currentPerks[index] = getRandomItem(candidates);

  updatePerkDisplay(type);
  animateSinglePerk(type, index);
}

function resetTab(type) {
  state[type].character = null;
  state[type].lastCharacterId = null;
  state[type].perks = [null, null, null, null];

  updateCharacterDisplay(type);
  updatePerkDisplay(type);
}

/* =========================
   Animations
   ========================= */

function animatePerkShake(type) {
  for (let i = 0; i < 4; i++) {
    const slot = document.getElementById(
      `${type}-perk-slot-${i}`
    );

    if (!slot) continue;

    slot.classList.remove("shake");
    void slot.offsetWidth;
    slot.classList.add("shake");
  }
}

function animateSinglePerk(type, index) {
  const imgEl = document.getElementById(
    `${type}-perk-img-${index}`
  );

  if (!imgEl) return;

  imgEl.classList.remove("perk-animate");
  void imgEl.offsetWidth;
  imgEl.classList.add("perk-animate");
}

/* =========================
   Tab Controls
   ========================= */

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      tabButtons.forEach((tabButton) => {
        tabButton.classList.remove("active");
      });

      button.classList.add("active");

      tabs.forEach((tab) => {
        tab.classList.toggle(
          "active",
          tab.id === targetId
        );
      });
    });
  });
}

/* =========================
   Event Listeners
   ========================= */

function setupEventListeners() {
  // Survivor buttons
  document
    .getElementById("survivor-randomise-character")
    ?.addEventListener("click", () => randomiseCharacter("survivor"));

  document
    .getElementById("survivor-randomise-perks")
    .addEventListener("click", () => {
      randomiseAndAnimatePerks("survivor");
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
      randomiseAndAnimatePerks("survivor");
    });

  // Killer buttons
  document
    .getElementById("killer-randomise-character")
    ?.addEventListener("click", () => randomiseCharacter("killer"));

  document
    .getElementById("killer-randomise-perks")
    .addEventListener("click", () => {
      randomiseAndAnimatePerks("killer");
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
      randomiseAndAnimatePerks("killer");
    });

  // Reset buttons
  document
    .getElementById("survivor-reset")
    ?.addEventListener("click", () => resetTab("survivor"));

  document
    .getElementById("killer-reset")
    ?.addEventListener("click", () => resetTab("killer"));

  // Individual perk reroll buttons
  document.querySelectorAll(".perk-reroll-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      const index = parseInt(button.dataset.index, 10);

      rerollSinglePerk(type, index);
    });
  });

  // Character modal
  characterModalClose.addEventListener(
    "click",
    closeCharacterModal
  );

  characterModalBackdrop.addEventListener(
    "click",
    closeCharacterModal
  );

  // Keyboard controls
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCharacterModal();
    }
  });

  // Randomiser settings
  legendaryToggle.addEventListener("change", (event) => {
    includeLegendary = event.target.checked;
  });
}

/* =========================
   Initialise
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupEventListeners();

  updateCharacterDisplay("survivor");
  updatePerkDisplay("survivor");

  updateCharacterDisplay("killer");
  updatePerkDisplay("killer");
});
