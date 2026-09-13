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
   Initialise
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  setupModeAccordions();
});