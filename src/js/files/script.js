// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";

import { addClass } from "./functions.js";
import { removeClass } from "./functions.js";
import { toggleClass } from "./functions.js";
import { removeClassForArray } from "./functions.js";


// Підключення списку активних модулів
import { flsModules } from "./modules.js";

addClickableHeaderTop();

// Событие клика
function addClickableHeaderTop() {
  document.addEventListener("click", e => {
    const target = e.target;

    if (target.closest('[data-header-btn]')) {
      toggleClass(target.closest('[data-header-item]'), '_active');
    }
    if (!target.closest('[data-header-btn]')) {
      removeClassForArray('[data-header-item]', '_active');
    }

    if (target.closest('[data-change]')) {
      changeList(target, '[data-visible]', '[data-parent-change]');
    }

    if (target.closest('.search-header__btn')) {
      addClass(target.closest('.search-header__input'), '_active');
    }
    if (!target.closest('.search-header__input')) {
      removeClassForArray('.search-header__input', '_active');
    }

    if (target.closest('[data-check]')) {
      toggleClass(target, '_active');
    }

    if (target.closest('.slide-products__like button')) {
      toggleClass(target.parentElement, '_active');
    }

    if (target.closest('[data-count-l]')) {
      counter('.action-product__num', 'l');
    }
    if (target.closest('[data-count-r]')) {
      counter('.action-product__num', 'r');
    }

    //data-count-l
  });
}

// Функция изменения информации в списке
function changeList(el, visibleElSelector, parentElSelector) {
  const parentEl = el.closest(parentElSelector),
        visibleEl = parentEl.querySelector(visibleElSelector),
        changeLang = el.innerHTML;


  el.innerHTML = visibleEl.innerHTML;
  visibleEl.innerHTML = changeLang;
}

// Счетчик

function counter(numClass, direction) {
  const numWrap = document.querySelector(numClass);
  let num = +numWrap.innerHTML;


  if (direction === 'l' && num > 1) {
    numWrap.innerHTML = num - 1;
  }
  if (direction === 'r') {
    numWrap.innerHTML = num + 1;
  }

}