

function pagination({posts, postsContainerClass, paginationWrapSelector, btnClass, data}) {

  if (document.querySelector(paginationWrapSelector)) {
    main(data);
  }

  function main(postsData) {
    // Вычисление сколько страниц делать
    let currPage = 0;
    let rows = posts;
    const pages = Math.ceil(postsData.length / posts);

    // Функция отображающая статьи
    function displayList(arrDataPseudo, rowPerPage, page) {
      const postsContainer = document.querySelector(postsContainerClass);
      // postsContainer.innerHTML = "";

      const arrData = Array.from(arrDataPseudo);

      // console.log(arrData);

      arrData.forEach(el => {
        el.style.display = "none";
      });

      const start = rowPerPage * page,
            end = start + rowPerPage;


      const paginatedData = arrData.slice(start, end);

      paginatedData.forEach((el) => {

        el.style.display = "flex";
        // const postEl = `
        //   <a href="#" class="content-blog__item item-content-blog d-flex ai-center">
        //     <div class="item-content-blog__img">
        //       <img class="img-fluid" src="${el.imgPath}" alt="${el.title}">
        //     </div>
        //     <div class="item-content-blog__content">
        //       <div class="item-content-blog__label label-blog">${el.filter}</div>
        //       <h4 class="item-content-blog__title title-blog">${el.title}</h4>
        //       <div class="item-content-blog__date label-blog">19 июль 2022</div>
        //       <p class="item-content-blog__text">${el.text}</p>
        //     </div>
        //   </a>
        // `;

        // postsContainer.insertAdjacentHTML("beforeend", postEl);
      });
    }

    // Отображение пагинации
    function displayPagination(arrData, pagesLength, page) {
      // Отображаем если больше 6 статей
      const paginationContainer = document.querySelector(paginationWrapSelector);
      paginationContainer.innerHTML = '';
      paginationContainer.parentElement.style.display = 'none';

      if (arrData.length > 6) {
        let countBtns = 3;
        paginationContainer.parentElement.style.display = 'flex';

        if (pagesLength <= 4) {
          for (let i = 0; i < pagesLength; i++) {
            const paginationBtn = `
              <button class="pagination-blog__dot" data-pag-num type="button">${i + 1}</button>
            `;

            paginationContainer.insertAdjacentHTML(
              "beforeend",
              paginationBtn
            );
          }
        } else if (page <= pagesLength - 3) {
          for (let i = page - 1; i < page + countBtns; i++) {
            if (i == -1) continue
            const paginationBtn = `
              <button class="pagination-blog__dot" data-pag-num type="button">${i + 1}</button>
            `;
            paginationContainer.insertAdjacentHTML(
              "beforeend",
              paginationBtn
            );
          }

          paginationContainer.insertAdjacentHTML(
            "beforeend",
            `
              <button class="pagination-blog__dot pagination-blog__dot_no-bg" data-pag-dots type="button">...</button>
            `
          );
          paginationContainer.insertAdjacentHTML(
            "beforeend",
            `
              <button class="pagination-blog__dot" data-pag-num type="button">${pagesLength}</button>
            `
          );
         } else {
          for (let i = pagesLength - 3; i < pagesLength; i++) {
            const paginationBtn = `
              <button class="pagination-blog__dot" data-pag-num type="button">${i + 1}</button>
            `;
            paginationContainer.insertAdjacentHTML(
              "beforeend",
              paginationBtn
            );
          }
         }
        addActive(null);
        removeDots(pagesLength); 
      }
    }

    // Убираем точки и общее к-во при доходе к ним 
    function removeDots(pagesLength) {
      if (document.querySelector('[data-pag-dots]')) {
        const btnActive = document.querySelector(`${btnClass}._active`);
        const dotsBtn = document.querySelector('[data-pag-dots]');

        if (+btnActive.innerHTML >= pagesLength - 3) {
          dotsBtn.style.display = 'none';
          dotsBtn.nextElementSibling.style.display = 'none';
        }
      }
    }

    // Добавляем класс активности
    function addActive(e) {
      const btns = document.querySelectorAll(btnClass);

      if (e && e.target.closest("[data-pag-num]")) {
        removeActiveFromAll(btns);
        e.target.classList.add("_active");
      } else {
        removeActiveFromAll(btns);
        btns.forEach((btn) => {
          if (currPage + 1 == btn.innerHTML) {
            btn.classList.add("_active");
          }
        });
      }
    }

    // Удаляем класс активности
    function removeActiveFromAll(btns) {
      btns.forEach((btn) => {
        btn.classList.remove("_active");
      });
    }

    //  Событие нажатия на контейнер пагинаии
    document.querySelector(paginationWrapSelector).parentElement.addEventListener("click", (e) => {
        if (e.target.closest(btnClass)) {
          addActive(e);
        }

        if (e.target.closest("[data-pag-next]") && currPage !== pages - 1) {
          ++currPage;
          displayList(postsData, rows, currPage);
          displayPagination(postsData, pages, currPage);
          addActive(null);
        }
        if (e.target.closest("[data-pag-prev]") && currPage !== 0) {
          --currPage;
          displayList(postsData, rows, currPage);
          displayPagination(postsData, pages, currPage);
          addActive(null);
        }
        if (e.target.closest("[data-pag-num]")) {
          currPage = e.target.innerText;
          --currPage;
          displayList(postsData, rows, currPage);
          displayPagination(postsData, pages, currPage);
        }
        if (e.target.closest("[data-pag-dots]")) {
          currPage = +e.target.previousElementSibling.innerText;
          displayList(postsData, rows, currPage);
          displayPagination(postsData, pages, currPage);
          addActive(null);
        }
      });

    displayList(postsData, rows, currPage);
    displayPagination(postsData, pages, 0);
  }
}

export default pagination;
