/*
 Sticky Nav
*/
const nav = document.querySelector("#nav-header");
const topOfNav = nav.offsetTop;
function stickyNav() {
	if (window.scrollY > topOfNav) {
		nav.classList.add("sticky-nav");
	} else {
		nav.classList.remove("sticky-nav");
	}
}
window.addEventListener('scroll', stickyNav);