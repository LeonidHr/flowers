/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Grid, Thumbs, FreeMode } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці

	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
	if (document.querySelector('.mainscreen-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.mainscreen-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 25,
			speed: 800,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.mainscreen-slider .swiper-button-prev',
				nextEl: '.mainscreen-slider .swiper-button-next',
			},
			pagination: {
				el: '.mainscreen-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				650: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 5,
				},
			},
			
		});
	}
	if (document.querySelector('.stock-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.stock-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,

			grid: {
        rows: 2,
      },

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.stock-slider .swiper-button-prev',
				nextEl: '.stock-slider .swiper-button-next',
			},
			pagination: {
				el: '.stock-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},
			
		});
	}
	if (document.querySelector('.seasonal-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.seasonal-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,

			grid: {
        rows: 2,
      },

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.seasonal-slider .swiper-button-prev',
				nextEl: '.seasonal-slider .swiper-button-next',
			},
			pagination: {
				el: '.seasonal-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},
			
		});
	}
	if (document.querySelector('.gifts-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.gifts-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,

			grid: {
        rows: 2,
      },

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.gifts-slider .swiper-button-prev',
				nextEl: '.gifts-slider .swiper-button-next',
			},
			pagination: {
				el: '.gifts-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},
			
		});
	}
	if (document.querySelector('.forum-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.forum-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,

			pagination: {
				el: '.forum-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				300: {
					slidesPerView: 1,
				},
				500: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				// 992: {
				// 	slidesPerView: 4,
				// },
			},
			
		});
	}
	if (document.querySelector('.product-slider')) { // Вказуємо склас потрібного слайдера
		var swiper = new Swiper(".product-slider-thumbs", {
			modules: [FreeMode],

      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".product-slider", {
			modules: [Thumbs],
			
			initialSlide: 1,
			slidesPerView: 1,
      spaceBetween: 1,

      thumbs: {
        swiper: swiper,
      },
    });
	}
	if (document.querySelector('.related-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.related-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.related-slider .swiper-button-prev',
				nextEl: '.related-slider .swiper-button-next',
			},
			pagination: {
				el: '.related-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
			},
			
		});
	}
	if (document.querySelector('.you-see-slider') && window.innerWidth > 480) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.you-see-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.you-see-slider .swiper-button-prev',
				nextEl: '.you-see-slider .swiper-button-next',
			},
			pagination: {
				el: '.you-see-slider__pagination',
				clickable: true,
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					spaceBetween: 20,
					slidesPerView: 4,
				},
			},
			
		});
	}
	//
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});