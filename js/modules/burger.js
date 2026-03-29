export function burger() {
	const burgerWrapper = document.querySelector('.header__burger');
	const burgerBtn = document.querySelector('.header__active');
	const menu = document.querySelector('.header__menu');

	if (!burgerWrapper || !burgerBtn || !menu) return;

	burgerBtn.addEventListener('click', function (e) {
		e.stopPropagation();
		burgerWrapper.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.classList.toggle('lock');
		moveLogoToMenu(); // ← вызов здесь (один раз)
	});

	// Закрытие по ссылке
	menu.querySelectorAll('.header__link').forEach(link => {
		link.addEventListener('click', () => {
			burgerWrapper.classList.remove('active');
			menu.classList.remove('active');
			document.body.classList.remove('lock');
		});
	});

	// Закрытие по клику вне меню
	document.addEventListener('click', function (e) {
		if (!burgerWrapper.contains(e.target) && !menu.contains(e.target)) {
			burgerWrapper.classList.remove('active');
			menu.classList.remove('active');
			document.body.classList.remove('lock');
		}
	});
}

function moveLogoToMenu() {
	const logo = document.querySelector('.header__logo');
	const menu = document.querySelector('.header__menu');

	if (window.innerWidth <= 768) {
		if (!menu.querySelector('.header__logo')) {
			menu.prepend(logo.cloneNode(true));
		}
	} else {
		const clonedLogo = menu.querySelector('.header__logo');
		if (clonedLogo) clonedLogo.remove();
	}
}

// Запускаем при загрузке и ресайзе
window.addEventListener('load', moveLogoToMenu);
window.addEventListener('resize', moveLogoToMenu);