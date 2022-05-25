const menu = document.getElementById('menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuOpenBtn = document.getElementById('btn-menu');
const menuCloseBtn = document.getElementById('btn-close');

const dropdownLinks = document.querySelectorAll('.dropdown-toggle');

function toggleMenu() {
	menu.classList.remove('hidden');
	requestAnimationFrame(() => menu.classList.toggle('opacity-0'));
}

function toggleDropdown(e) {
	const toggleEl = e.target;
	const panel = toggleEl.nextElementSibling;
	const downArrow = toggleEl.querySelector('.arrow-down');
	const upArrow = toggleEl.querySelector('.arrow-up');

	// Change arrow icon
	toggleEl.classList.toggle('expanded');
	downArrow.classList.toggle('hidden', toggleEl.classList.contains('expanded'));
	upArrow.classList.toggle('hidden', !toggleEl.classList.contains('expanded'));

	// Toggle links
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + 'px';
	}
}

function setupEventListeners() {
	[menuOpenBtn, menuCloseBtn, menuOverlay].forEach((el) => el?.addEventListener('click', toggleMenu));

	menu.addEventListener('transitionend', () => menu.classList.contains('opacity-0') && menu.classList.add('hidden'));

	dropdownLinks.forEach((el) => el.addEventListener('click', toggleDropdown));
}

window.addEventListener('load', () => {
	setupEventListeners();
});
