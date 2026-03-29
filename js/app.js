import { burger } from './modules/burger.js';

document.addEventListener('DOMContentLoaded', () => {
	burger();

	// Слайдер фото (about)
	if (document.querySelector('.about__slider') && typeof Swiper !== 'undefined') {
		new Swiper('.about__slider', {
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
		console.log('✅ Слайдер фото загружен');
	}

	// Слайдер отзывов (reviews)
	if (document.querySelector('.reviews__slider') && typeof Swiper !== 'undefined') {
		new Swiper('.reviews__slider', {
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		console.log('✅ Слайдер отзывов загружен');
	}

	// Слайдер сертификатов
	if (document.querySelector('.about-me__certificates')) {
		new Swiper('.about-me__certificates', {
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		console.log('✅ Слайдер сертификатов загружен');
	}

	// Защита email от спама
	const emailLink = document.getElementById('emailLink');
	if (emailLink) {
		const user = 'i';
		const domain = 'skvora.ru';
		emailLink.href = `mailto:${user}@${domain}`;
		emailLink.textContent = `${user}@${domain}`;
	}

	console.log('Скрипты загружены');
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
			const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	});
});