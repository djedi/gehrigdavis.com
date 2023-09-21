document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById("menu-toggle");
	const sideMenu = document.querySelector(".side-menu");

	menuToggle.addEventListener("click", function () {
			sideMenu.classList.toggle("active");
	});
});
