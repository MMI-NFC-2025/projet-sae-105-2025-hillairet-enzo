/* src/js/script.js */

const toggleMenuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#main-menu");

toggleMenuBtn.addEventListener("click", () => {
  const isExpanded = toggleMenuBtn.getAttribute("aria-expanded") === "true";
  
  if (isExpanded) {
    // Si c'est ouvert, on ferme
    closeMenu();
  } else {
    // Sinon, on ouvre
    openMenu();
  }
});

function openMenu() {
  toggleMenuBtn.setAttribute("aria-expanded", "true");
  menu.removeAttribute("hidden");
  
  // Petit effet croix sur le burger (optionnel mais stylé)
  // On peut gérer ça en CSS si tu veux plus tard
  document.body.style.overflow = "hidden"; // Empêche de scroller la page derrière
}

function closeMenu() {
  toggleMenuBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("hidden", "");
  document.body.style.overflow = ""; // Réactive le scroll
}