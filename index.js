// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// // Страница добавления отзыва:

// // Поле для ввода названия продукта.
// // Текстовое поле для самого отзыва.
// // Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// // Страница просмотра отзывов:

// // Показывает список всех продуктов, о которых были оставлены отзывы.
// // При клике на название продукта отображается список всех отзывов по этому продукту.
// // Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage)

// const buttonEl = document.querySelector(".add-review");
// const inputProduct = document.querySelector(".name-text");
// const inputReview = document.querySelector(".review-text");
// const divEl = document.querySelector(".review-container");

// buttonEl.addEventListener("click", function () {
//   const rewInputProduct = inputProduct.value;
//   const rewInputReview = inputReview.value.trim();
  
//   // localStorage.setItem(inputProduct.value, inputReview.value);

//   const reviews = JSON.parse(localStorage.getItem("reviews"));
//   reviews.push({ rewInputProduct, rewInputReview });
//   localStorage.setItem("reviews", JSON.stringify(reviews));

//   alert("ready reviews");
// });
