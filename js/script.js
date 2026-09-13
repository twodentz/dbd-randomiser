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

      toggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

      content.hidden = isExpanded;
    });
  });
}

/* =========================
   Initialise
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  setupModeAccordions();
});