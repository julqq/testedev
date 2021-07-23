/* Coloque o JS neste arquivo */

const btn = document.querySelector(".mobile-menu-icon");
const menuMobile = document.querySelector(".menu-container");

function tooGleMenu() {
	if (menuMobile.style.display === "flex") {
		menuMobile.style.display = "none";
	} else {
		menuMobile.style.display = "flex";
	}
}

btn.addEventListener("click", () => tooGleMenu());
