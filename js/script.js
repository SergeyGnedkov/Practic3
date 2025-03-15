document.querySelector('.nav__toggle').addEventListener('click', function () {
    // Получаем элемент списка
    const navList = document.querySelector('.nav__list');
    // Переключаем класс 'open'
    navList.classList.toggle('open');
});