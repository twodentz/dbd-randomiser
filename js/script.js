/* =========================
   Mode Accordions
   ========================= */

function setupModeAccordions() {
  const accordionToggles = document.querySelectorAll(
    ".mode-accordion-toggle"
  );

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const contentId = toggle.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      if (!content) return;

      const isExpanded =
        toggle.getAttribute("aria-expanded") === "true";

      accordionToggles.forEach((otherToggle) => {
        if (otherToggle === toggle) return;

        const otherContentId =
          otherToggle.getAttribute("aria-controls");

        const otherContent =
          document.getElementById(otherContentId);

        otherToggle.setAttribute("aria-expanded", "false");

        if (otherContent) {
          otherContent.hidden = true;
        }
      });

      toggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

      content.hidden = isExpanded;
    });
  });
}

/* =========================
   Perk Modal
   ========================= */

function openPerkModal(perk) {
  if (!perk) return;

  const perkModal = document.querySelector("#perk-modal");
  const modalImage = document.querySelector("#modal-perk-image");
  const modalName = document.querySelector("#modal-perk-name");
  const modalOwner = document.querySelector("#modal-perk-owner");
  const modalDesc = document.querySelector("#modal-perk-description");

  if (!perkModal) return;

  modalImage.src = perk.image;
  modalName.textContent = perk.name;
  modalDesc.textContent =
    perk.description || "No description available.";

  modalOwner.textContent = perk.owner
    ? `${perk.owner} Unique Perk`
    : "";

  perkModal.classList.remove("hidden");
}

function closePerkModal() {
  const perkModal = document.querySelector("#perk-modal");

  if (!perkModal) return;

  perkModal.classList.add("hidden");
}

function setupPerkModal() {
  const perkModal = document.querySelector("#perk-modal");

  if (!perkModal) return;

  const modalClose = perkModal.querySelector(".modal-close");
  const modalBackdrop = perkModal.querySelector(".modal-backdrop");
  const modalContent = perkModal.querySelector(".modal-content");

  modalClose?.addEventListener("click", closePerkModal);
  modalBackdrop?.addEventListener("click", closePerkModal);

  modalContent?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePerkModal();
    }
  });
}

/* =========================
   Initialise
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  setupModeAccordions();
  setupPerkModal();
});